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

var docs = require('./docs');
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
	documents.all().forEach(validateDotDocument);
})

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent((change) => {
	validateDotDocument(change.document);
});;

function validateDotDocument(textDocument: TextDocument): void {
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
connection.onCompletion((_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
	return [
		{
			label: 'DEFINE',
			kind: CompletionItemKind.Keyword,
			data: 1
		},
		{
			label: 'NAMESPACE',
			kind: CompletionItemKind.Keyword,
			data: 2
		},
		{
			label: 'TABLE',
			kind: CompletionItemKind.Keyword,
			data: 3
		},
		{
			label: 'COLUMN',
			kind: CompletionItemKind.Keyword,
			data: 4
		},
		{
			label: 'DESCRIPTION',
			kind: CompletionItemKind.Property,
			data: 5
		},
		{
			label: 'REF',
			kind: CompletionItemKind.Property,
			data: 6
		},
		{
			label: 'TYPE',
			kind: CompletionItemKind.Property,
			data: 7
		},
		{
			label: 'LOCK',
			kind: CompletionItemKind.Property,
			data: 8
		},
		{
			label: 'SOLR',
			kind: CompletionItemKind.Property,
			data: 9
		},
		{
			label: 'BUNDLETYPE',
			kind: CompletionItemKind.Property,
			data: 10
		},
		{
			label: 'BEGINS WITH',
			kind: CompletionItemKind.Property,
			data: 11
		},
		{
			label: 'ENDS WITH',
			kind: CompletionItemKind.Property,
			data: 12
		},
		{
			label: 'FILEPATTERN',
			kind: CompletionItemKind.Property,
			data: 13
		},
		{
			label: 'CONTEXT',
			kind: CompletionItemKind.Property,
			data: 14
		},
		{
			label: 'AS',
			kind: CompletionItemKind.Keyword,
			data: 15
		},
		{
			label: 'ICON',
			kind: CompletionItemKind.Property,
			data: 16
		},
		{
			label: 'LINEGRAB',
			kind: CompletionItemKind.Property,
			data: 17
		},
		{
			label: 'MULTILINE',
			kind: CompletionItemKind.Property,
			data: 18
		},
		{
			label: 'MULTILINE NOT',
			kind: CompletionItemKind.Property,
			data: 19
		},
		{
			label: 'SKIP',
			kind: CompletionItemKind.Property,
			data: 20
		},
		{
			label: 'WITH SOLRMAPPING',
			kind: CompletionItemKind.Property,
			data: 21
		},
		{
			label: 'COLCASE',
			kind: CompletionItemKind.Keyword,
			data: 22
		},
		{
			label: 'COLWHEN',
			kind: CompletionItemKind.Keyword,
			data: 23
		},
		{
			label: 'COLELSE',
			kind: CompletionItemKind.Keyword,
			data: 24
		},
		{
			label: 'COLEND',
			kind: CompletionItemKind.Keyword,
			data: 25
		},
		{
			label: 'COLCOPY',
			kind: CompletionItemKind.Function,
			data: 26
		},
		{
			label: 'COLSPLIT',
			kind: CompletionItemKind.Function,
			data: 27
		},
		{
			label: 'COLCALC',
			kind: CompletionItemKind.Function,
			data: 28
		},
		{
			label: 'COLREP',
			kind: CompletionItemKind.Function,
			data: 29
		},
		{
			label: 'COLMAP',
			kind: CompletionItemKind.Function,
			data: 30
		},
		{
			label: 'COLJOIN',
			kind: CompletionItemKind.Function,
			data: 31
		},
		{
			label: 'COLDROP',
			kind: CompletionItemKind.Function,
			data: 32
		},
		{
			label: 'COLFILL',
			kind: CompletionItemKind.Function,
			data: 33
		},
		{
			label: 'ADD_CONTEXT',
			kind: CompletionItemKind.Function,
			data: 34
		},
		{
			label: 'CONSTRAIN',
			kind: CompletionItemKind.Function,
			data: 35
		},
		{
			label: 'UNPARSED',
			kind: CompletionItemKind.Enum,
			data: 36
		},
		{
			label: 'TRASH',
			kind: CompletionItemKind.Enum,
			data: 37
		},
		{
			label: 'EVENT',
			kind: CompletionItemKind.Enum,
			data: 38
		},
		{
			label: 'STAT',
			kind: CompletionItemKind.Enum,
			data: 39
		},
		{
			label: 'SESSION',
			kind: CompletionItemKind.Enum,
			data: 40
		},
		{
			label: 'list_basic',
			kind: CompletionItemKind.Enum,
			data: 41
		},
		{
			label: 'aligned_basic',
			kind: CompletionItemKind.Enum,
			data: 42
		},
		{
			label: 'nvpair_basic',
			kind: CompletionItemKind.Enum,
			data: 43
		},
		{
			label: 'xml_basic',
			kind: CompletionItemKind.Enum,
			data: 44
		},
		{
			label: 'json',
			kind: CompletionItemKind.Enum,
			data: 45
		},
		{
			label: 'csv_noheader',
			kind: CompletionItemKind.Enum,
			data: 46
		},
		{
			label: 'csv_withheader',
			kind: CompletionItemKind.Enum,
			data: 47
		},
		{
			label: 'ADJYEAR',
			kind: CompletionItemKind.Enum,
			data: 48
		},
		{
			label: 'TIME2QTR',
			kind: CompletionItemKind.Enum,
			data: 49
		},
		{
			label: 'TIME2MONTH',
			kind: CompletionItemKind.Enum,
			data: 50
		},
		{
			label: 'TIME2WEEK',
			kind: CompletionItemKind.Enum,
			data: 51
		},
		{
			label: 'TIME2DAY',
			kind: CompletionItemKind.Enum,
			data: 52
		},
		{
			label: 'TIME2HOUR',
			kind: CompletionItemKind.Enum,
			data: 53
		},
		{
			label: 'TIME24HOUR',
			kind: CompletionItemKind.Enum,
			data: 54
		},
		{
			label: 'TIME210MIN',
			kind: CompletionItemKind.Enum,
			data: 55
		},
		{
			label: 'TIME2MIN',
			kind: CompletionItemKind.Enum,
			data: 56
		},
		{
			label: 'TIME230DAY',
			kind: CompletionItemKind.Enum,
			data: 57
		},
		{
			label: 'SDF2EPOCH',
			kind: CompletionItemKind.Enum,
			data: 58
		},
		{
			label: 'EPOCH2SDF',
			kind: CompletionItemKind.Enum,
			data: 59
		},
		{
			label: 'GMTIME',
			kind: CompletionItemKind.Enum,
			data: 60
		},
		{
			label: 'LOCALTIME',
			kind: CompletionItemKind.Enum,
			data: 61
		},
		{
			label: 'DATEDIFF',
			kind: CompletionItemKind.Enum,
			data: 62
		},
		{
			label: 'INT',
			kind: CompletionItemKind.Enum,
			data: 63
		},
		{
			label: 'MINUS',
			kind: CompletionItemKind.Enum,
			data: 64
		},
		{
			label: 'PLUS',
			kind: CompletionItemKind.Enum,
			data: 65
		},
		{
			label: 'TIMES',
			kind: CompletionItemKind.Enum,
			data: 66
		},
		{
			label: 'DIVIDEBY',
			kind: CompletionItemKind.Enum,
			data: 67
		},
		{
			label: 'RANDINT',
			kind: CompletionItemKind.Enum,
			data: 68
		},
		{
			label: 'XTOPOWY',
			kind: CompletionItemKind.Enum,
			data: 69
		},
		{
			label: 'HEX2DEC',
			kind: CompletionItemKind.Enum,
			data: 70
		},
		{
			label: 'HEX2BIN',
			kind: CompletionItemKind.Enum,
			data: 71
		},
		{
			label: 'BIN2HEX',
			kind: CompletionItemKind.Enum,
			data: 72
		},
		{
			label: 'MD5',
			kind: CompletionItemKind.Enum,
			data: 73
		},
		{
			label: 'LENGTH',
			kind: CompletionItemKind.Enum,
			data: 74
		},
		{
			label: 'CONCAT',
			kind: CompletionItemKind.Enum,
			data: 75
		},
		{
			label: 'UC',
			kind: CompletionItemKind.Enum,
			data: 76
		},
		{
			label: 'LC',
			kind: CompletionItemKind.Enum,
			data: 77
		},
		{
			label: 'ZEROPAD',
			kind: CompletionItemKind.Enum,
			data: 78
		},
		{
			label: 'STR2TIME',
			kind: CompletionItemKind.Enum,
			data: 79
		},
		{
			label: 'STR2SUM',
			kind: CompletionItemKind.Enum,
			data: 80
		}		
	]
});

// This handler resolve additional information for the item selected in the completion list.
connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
	if (item.data === 2) {
		item.detail = 'NAMESPACE details',
			item.documentation = docs.spl.namespace
	} else if (item.data === 3) {
		item.detail = 'TABLE details',
			item.documentation = docs.spl.table
	} else if(item.data === 4) {
		item.detail = 'COLUMN details',
			item.documentation = docs.spl.column
	} else if(item.data === 26) {
		item.detail = 'COLCOPY details',
			item.documentation = docs.spl.colcopy
	} else if(item.data === 27) {
		item.detail = 'COLSPLIT details',
			item.documentation = docs.spl.colsplit
	} else if(item.data === 28) {
		item.detail = 'COLCALC details',
			item.documentation = docs.spl.colcalc
	} else if(item.data === 29) {
		item.detail = 'COLREP details',
			item.documentation = docs.spl.colrep
	} else if(item.data === 30) {
		item.detail = 'COLMAP details',
			item.documentation = docs.spl.colmap
	} else if(item.data === 31) {
		item.detail = 'COLJOIN details',
			item.documentation = docs.spl.coljoin
	} else if(item.data === 32) {
		item.detail = 'COLDROP details',
			item.documentation = docs.spl.coldrop
	} else if(item.data === 33) {
		item.detail = 'COLFILL details',
			item.documentation = docs.spl.colfill
	} 

	return item;
});
