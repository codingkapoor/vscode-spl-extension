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
			label: 'LC',
			kind: CompletionItemKind.Operator,
			data: 36
		},
		{
			label: 'UC',
			kind: CompletionItemKind.Operator,
			data: 37
		},
		{
			label: 'HEX2DEC',
			kind: CompletionItemKind.Operator,
			data: 38
		},
		{
			label: 'XTOPOWY',
			kind: CompletionItemKind.Operator,
			data: 39
		},
		{
			label: 'MD5',
			kind: CompletionItemKind.Operator,
			data: 40
		},
		{
			label: 'PLUS',
			kind: CompletionItemKind.Operator,
			data: 41
		},
		{
			label: 'MINUS',
			kind: CompletionItemKind.Operator,
			data: 42
		},
		{
			label: 'TIMES',
			kind: CompletionItemKind.Operator,
			data: 43
		},
		{
			label: 'DIVIDEBY',
			kind: CompletionItemKind.Operator,
			data: 44
		},
		{
			label: 'SDF2EPOCH',
			kind: CompletionItemKind.Operator,
			data: 45
		},
		{
			label: 'STR2TIME',
			kind: CompletionItemKind.Operator,
			data: 46
		},
		{
			label: 'EPOCH2SDF',
			kind: CompletionItemKind.Operator,
			data: 47
		},
		{
			label: 'STR2SUM',
			kind: CompletionItemKind.Operator,
			data: 48
		},
		{
			label: 'ADJYEAR',
			kind: CompletionItemKind.Operator,
			data: 49
		},
		{
			label: 'CONCAT',
			kind: CompletionItemKind.Operator,
			data: 50
		},
		{
			label: 'INT',
			kind: CompletionItemKind.Operator,
			data: 51
		},
		{
			label: 'TIME2HOUR',
			kind: CompletionItemKind.Operator,
			data: 52
		},
		{
			label: 'TIME210MIN',
			kind: CompletionItemKind.Operator,
			data: 53
		},
		{
			label: 'TIME2DAY',
			kind: CompletionItemKind.Operator,
			data: 54
		},
		{
			label: 'UNPARSED',
			kind: CompletionItemKind.Enum,
			data: 55
		},
		{
			label: 'TRASH',
			kind: CompletionItemKind.Enum,
			data: 56
		},
		{
			label: 'EVENT',
			kind: CompletionItemKind.Enum,
			data: 57
		},
		{
			label: 'STAT',
			kind: CompletionItemKind.Enum,
			data: 58
		},
		{
			label: 'SESSION',
			kind: CompletionItemKind.Enum,
			data: 59
		},
		{
			label: 'list_basic',
			kind: CompletionItemKind.Enum,
			data: 60
		},
		{
			label: 'aligned_basic',
			kind: CompletionItemKind.Enum,
			data: 61
		},
		{
			label: 'nvpair_basic',
			kind: CompletionItemKind.Enum,
			data: 62
		},
		{
			label: 'xml_basic',
			kind: CompletionItemKind.Enum,
			data: 63
		},
		{
			label: 'json',
			kind: CompletionItemKind.Enum,
			data: 64
		},
		{
			label: 'static',
			kind: CompletionItemKind.Text,
			data: 65
		},
		{
			label: 'config',
			kind: CompletionItemKind.Text,
			data: 66
		}		
	]
});

// This handler resolve additional information for the item selected in the completion list.
connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
	if (item.data === 2) {
		item.detail = 'NAMESPACE details',
			item.documentation = 
`Definition:
A namespace is used to divide the log into smaller logical chunks. It defines the structure (or sections) for the parser. Use the BEGINS WITH, ENDS WITH and FILEPATTERN constructs to define the boundary of a namespace.

Namespaces can be defined in the hierarchical order. A parent namespace should encapsulate all the child namespaces i.e., the BEGINS WITH and ENDS WITH of the parent, should act as the boundaries of the BEGINS WITH and ENDS WITH of the child namespaces.

Usage:
DEFINE NAMESPACE @ns-name 
	DESCRIPTION ‘@ns-description’  
	[TYPE @ns-type] 
	[LOCK]? 
	[SOLR]? 
	[REF @parent-ns-name]
	BEGINS WITH /@regex/
	[ENDS WITH /@regex/]?
	[FILEPATTERN /@regex/]?
	[BUNDLETYPE '@bundle-type']?
	[CONTEXT /@regex-with-back-reference/ AS @col-name[(, col-name)(, col-name)…]]}
;

#TYPE# Namespace type could be EVENT or UNPARSED or SESSION or SECTION or STAT or TRASH.
#LOCK# Optional. Depicts current namespace as the only namespace for the complete file.
#SOLR# Optional. Namespace data is written also to SOLR, if specified.
#REF# Namespace name of the parent namespace.
#BEGINS WITH# A regular expression to identify the beginning of a section (defined as a namespace).
#ENDS WITH# A regular expression to identify the end of a section (defined as a namespace). It is optional. If an END is not defined, the starting of a new namespace is considered as the end of the previous namespace.
#FILEPATTERN# A regular expression to identify files of interest within a bundle. It is optional but recommended so that the parser searches for a namespace in only specific file.
#BUNDLETYPE# The type of the bundle this namespace is created for.
#CONTEXT# Use Context when you want to capture particular information from the namespace. It captures the information in a variable which can be populated in the table defined for that namespace or any of its child namespace.

Rules:
- Parent namespace should define before defining childNamespace.
- Back reference regex allowed only in CONTEXT.
- Order should not be change.
- FILEPATTERN is an optional and not required for child namespaces.
- TYPE by default value is ‘SECTION’ if it is not mentioned.
`			
	} else if (item.data === 3) {
		item.detail = 'TABLE details',
			item.documentation =
`Definition:
Tables are declared within a namespace to populate its row and column data. It contains the parser ICON and all column definitions.

Usage:
DEFINE TABLE @tbl-name
	NAMESPACE @ns-name
	ICON @icon-type
	LINEGRAB /@regex/
	MULTILINE /@regex/
	SKIP @num

	COLUMN @col-name  (obj.aspect)     [@datatype(@size):nn|n]       	<label=@label>

	[ADD_CONTEXT(@var1, @var2..)]
	CONSTRAIN()
;

#NAMESPACE# Namespace to which this table belongs to.
#ICON# It tells the parser about the structure of the section defined in the namespace associated with the table. There are six parser icons defined in the SPL for different log/data structures, which includes, nvpair_basic, aligned_basic, list_basic, xml_basic, json & csv_basic.
#LINEGRAB# Regular expression to match a line in a file. It is required only when the icon type is 'list-basic'.
#MULTILINE# Specifies whether data stretches belong single line.
#SKIP# Specifies the number of lines to skip before starting parsing.
#ADD_CONTEXT# It is a special method to get column values which defined in context or captured at namespace level using CONTEXT. Table should have column definition for the columns getting from ADD_CONTEXT. Multiple column can be specify with comma separated.
#CONTRAIN# It is used to enable null validation of the column values. It the validation fails the entire row is rejected by the parser.	

Rules:
- Table definitions cannot go without icon definitions.
- Any table without the table ICON will not be executed.
- All the parsed data can be manipulated using the COLUMN function.
`
	}

	return item;
});
