'use strict';

import {
	IPCMessageReader, IPCMessageWriter,
	createConnection, IConnection, TextDocumentSyncKind,
	TextDocuments, TextDocument, Diagnostic, DiagnosticSeverity,
	InitializeParams, InitializeResult, TextDocumentPositionParams,
	CompletionItem, CompletionItemKind,
	Hover, Files
} from 'vscode-languageserver';

import * as fs from 'fs';
import * as path from 'path';

var spl = require('./spl');
var parser = require('parser');

// Create a connection for the server. The connection uses Node's IPC as a transport
let connection: IConnection = createConnection(new IPCMessageReader(process), new IPCMessageWriter(process));

// Listen on the connection
connection.listen();

// Create a simple text document manager. The text document manager
// supports full document sync only
let documents: TextDocuments = new TextDocuments();
// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// After the server has started the client sends an initialize request. The server receives
// in the passed params the rootPath of the workspace plus the client capabilities. 
let workspaceRoot: string;

// The settings interface describe the server relevant settings part
interface Settings {
	splLanguageServer: SplSettings;
}

// These are the example settings we defined in the client's package.json
// file
interface SplSettings {
	maxNumberOfProblems: number;
}

// hold the maxNumberOfProblems setting
let maxNumberOfProblems: number;

// hold a list of colors and shapes for the completion provider
let colors: Array<string>;
let shapes: Array<string>;

connection.onInitialize((params): InitializeResult => {	
	workspaceRoot = params.rootPath;
	colors = new Array<string>();
	shapes = new Array<string>();

	return {		
		capabilities: {
			// Tell the client that the server works in FULL text document sync mode
			textDocumentSync: documents.syncKind,
			
			// Tell the client that the server support code complete
			completionProvider: {
				resolveProvider: true
			}
		}
	}
});

// The settings have changed. Is send on server activation as well.
connection.onDidChangeConfiguration((change) => {
	let settings = <Settings>change.settings;
	maxNumberOfProblems = settings.splLanguageServer.maxNumberOfProblems || 100;
	// Revalidate any open text documents
	documents.all().forEach(validateSplDocument);
})

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent((change) => {
	validateSplDocument(change.document);
});;

function validateSplDocument(textDocument: TextDocument): void {
	let diagnostics: Diagnostic[] = [];	

	var res = parser.SplValidator.doValidation(textDocument.getText());
	var messages = res.syntacticErrors.concat(res.semanticErrors);
		
	let lines = textDocument.getText().split(/\r?\n/g);
	let problems = 0;		

	for (var i = 0; i < messages.length && problems < maxNumberOfProblems; i++) {		
		problems++;
		
		if(messages[i].length == 0)
			messages[i].length = lines[i].length - messages[i].character;

		diagnostics.push({
			severity: DiagnosticSeverity.Error,
			range: {
				start: { line: messages[i].line, character: messages[i].character},
				end: { line: messages[i].line, character: messages[i].character + messages[i].length }
			},
			message: messages[i].message,
			source: 'ex'
		});			
	}

	// Send the computed diagnostics to VSCode.
	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

// This handler provides the initial list of the completion items.
connection.onCompletion((textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
    var res = [], arr = spl.vocabulary;
    for (var i in arr) {
        res.push(arr[i]);
    }

    return res;
});

// This handler resolve additional information for the item selected in the completion list.
connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
    return item;
});
