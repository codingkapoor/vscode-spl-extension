import { CompletionItemKind } from 'vscode-languageserver';

exports.vocabulary = {
    DEFINE: {
        label: "DEFINE",
        kind: CompletionItemKind.Keyword,
        data: "DEFINE",
        details: "",
        documentation: ""
    },
    NAMESPACE: {
        label: "NAMESPACE",
        kind: CompletionItemKind.Keyword,
        data: "NAMESPACE",
        details: "NAMESPACE details",
        documentation: `Definition:
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

**TYPE** Namespace type could be EVENT or UNPARSED or SESSION or SECTION or STAT or TRASH.

**LOCK** Optional. Depicts current namespace as the only namespace for the complete file.

**SOLR** Optional. Namespace data is written also to SOLR, if specified.

**REF** Namespace name of the parent namespace.

**BEGINS WITH** A regular expression to identify the beginning of a section (defined as a namespace).

**ENDS WITH** A regular expression to identify the end of a section (defined as a namespace). It is optional. If an END is not defined, the starting of a new namespace is considered as the end of the previous namespace.

**FILEPATTERN** A regular expression to identify files of interest within a bundle. It is optional but recommended so that the parser searches for a namespace in only specific file.

**BUNDLETYPE** The type of the bundle this namespace is created for.

**CONTEXT** Use Context when you want to capture particular information from the namespace. It captures the information in a variable which can be populated in the table defined for that namespace or any of its child namespace.

Rules:
- Parent namespace should define before defining childNamespace.
- Back reference regex allowed only in CONTEXT.
- Order should not be change.
- FILEPATTERN is an optional and not required for child namespaces.
- TYPE by default value is ‘SECTION’ if it is not mentioned.
`
    },
    TABLE: {
        label: "TABLE",
        kind: CompletionItemKind.Keyword,
        data: "TABLE",
        details: "TABLE details",
        documentation: `Definition:
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

**NAMESPACE** Namespace to which this table belongs to.

**ICON** It tells the parser about the structure of the section defined in the namespace associated with the table. There are six parser icons defined in the SPL for different log/data structures, which includes, nvpair_basic, aligned_basic, list_basic, xml_basic, json & csv_basic.

**LINEGRAB** Regular expression to match a line in a file. It is required only when the icon type is 'list-basic'.

**MULTILINE** Specifies whether data stretches belong single line.

**SKIP** Specifies the number of lines to skip before starting parsing.

**ADD_CONTEXT** It is a special method to get column values which defined in context or captured at namespace level using CONTEXT. Table should have column definition for the columns getting from ADD_CONTEXT. Multiple column can be specify with comma separated.

**CONTRAIN** It is used to enable null validation of the column values. It the validation fails the entire row is rejected by the parser.	

Rules:
- Table definitions cannot go without icon definitions.
- Any table without the table ICON will not be executed.
- All the parsed data can be manipulated using the COLUMN function.
`
    },
    COLUMN: {
        label: "COLUMN",
        kind: CompletionItemKind.Keyword,
        data: "COLUMN",
        details: "COLUMN details",
        documentation: `Definition:
Describes every attribute that is used to define a column in a table.

Usage:
    COLUMN @column-name [@data-type(@size):@n|nn] <@user-interface-attribs> AS @order [L]

Best Practices:
- All column names should be lower case.
- Column names can contain all letters (a..z), all numbers(0..9) and underscores(_).
- If the column name defined in the table is the same as the CONTEXT variable name (using ADD_CONTEXT), then the value in the CONTEXT variable will be assigned directly to the column name defined in the table; otherwise, we have to use COLCOPY function to copy the value.
- If the column is qualified as nn (NOT NULL) and no value is assigned to that column or through ADD_CONTEXT, then assign some default value to that column.
- Column definitions should be at the top followed by other operations such as ADD_CONTEXT, followed by the column function such as COLCOPY, COLMAP, so on.
- Columns that are dropped will not be created in Cassandra.
`
    },
    DESCRIPTION: {
        label: "DESCRIPTION",
        kind: CompletionItemKind.Property,
        data: "DESCRIPTION",
        details: "",
        documentation: ""
    },
    REF: {
        label: "REF",
        kind: CompletionItemKind.Property,
        data: "REF",
        details: "",
        documentation: ""
    },
    TYPE: {
        label: "TYPE",
        kind: CompletionItemKind.Property,
        data: "TYPE",
        details: "",
        documentation: ""
    },
    LOCK: {
        label: "LOCK",
        kind: CompletionItemKind.Property,
        data: "LOCK",
        details: "",
        documentation: ""
    },
    SOLR: {
        label: "SOLR",
        kind: CompletionItemKind.Property,
        data: "SOLR",
        details: "",
        documentation: ""
    },
    BUNDLETYPE: {
        label: "BUNDLETYPE",
        kind: CompletionItemKind.Property,
        data: "BUNDLETYPE",
        details: "",
        documentation: ""
    },
    BEGINS_WITH: {
        label: "BEGINS WITH",
        kind: CompletionItemKind.Property,
        data: "BEGINS_WITH",
        details: "",
        documentation: ""
    },
    ENDS_WITH: {
        label: "ENDS WITH",
        kind: CompletionItemKind.Property,
        data: "ENDS_WITH",
        details: "",
        documentation: ""
    },
    FILEPATTERN: {
        label: "FILEPATTERN",
        kind: CompletionItemKind.Property,
        data: "FILEPATTERN",
        details: "",
        documentation: ""
    },
    CONTEXT: {
        label: "CONTEXT",
        kind: CompletionItemKind.Property,
        data: "CONTEXT",
        details: "",
        documentation: ""
    },
    AS: {
        label: "AS",
        kind: CompletionItemKind.Keyword,
        data: "AS",
        details: "",
        documentation: ""
    },
    ICON: {
        label: "ICON",
        kind: CompletionItemKind.Property,
        data: "ICON",
        details: "",
        documentation: ""
    },
    LINEGRAB: {
        label: "LINEGRAB",
        kind: CompletionItemKind.Property,
        data: "LINEGRAB",
        details: "",
        documentation: ""
    },
    MULTILINE: {
        label: "MULTILINE",
        kind: CompletionItemKind.Property,
        data: "MULTILINE",
        details: "",
        documentation: ""
    },
    MULTILINE_NOT: {
        label: "MULTILINE NOT",
        kind: CompletionItemKind.Property,
        data: "MULTILINE_NOT",
        details: "",
        documentation: ""
    },
    SKIP: {
        label: "SKIP",
        kind: CompletionItemKind.Property,
        data: "SKIP",
        details: "",
        documentation: ""
    },
    WITH_SOLRMAPPING: {
        label: "WITH SOLRMAPPING",
        kind: CompletionItemKind.Property,
        data: "WITH_SOLRMAPPING",
        details: "",
        documentation: ""
    },
    COLCASE: {
        label: "COLCASE",
        kind: CompletionItemKind.Keyword,
        data: "COLCASE",
        details: "",
        documentation: ""
    },
    COLWHEN: {
        label: "COLWHEN",
        kind: CompletionItemKind.Keyword,
        data: "COLWHEN",
        details: "",
        documentation: ""
    },
    COLELSE: {
        label: "COLELSE",
        kind: CompletionItemKind.Keyword,
        data: "COLELSE",
        details: "",
        documentation: ""
    },
    COLEND: {
        label: "COLEND",
        kind: CompletionItemKind.Keyword,
        data: "COLEND",
        details: "",
        documentation: ""
    },
    COLCOPY: {
        label: "COLCOPY",
        kind: CompletionItemKind.Function,
        data: "COLCOPY",
        details: "COLCOPY details",
        documentation: `Definition:
Copy source column value or a literal value to one or more destination column(s).

Usage:
	COLCOPY(@source-column|@literal-value, @destination-column1 [, @destination-columnN])

Note:
- Second parameter must be a column.
`
    },
    COLSPLIT: {
        label: "COLSPLIT",
        kind: CompletionItemKind.Function,
        data: "COLSPLIT",
        details: "COLSPLIT details",
        documentation: `Definition:
Splits a column value into more than one pices specified by the back reference of a regular expression and assigns them to respective destination column.

Usage:
    COLSPLIT(@source-column, /@regex-with-back-reference/ , @destination-column1[,destination-columnN]*)

Note:
- Number of back reference in regex should be equal to number of destination column.
`
    },
    COLCALC: {
        label: "COLCALC",
        kind: CompletionItemKind.Function,
        data: "COLCALC",
        details: "COLCALC details",
        documentation: `Definition:
Used to perform various transformations and assigns the result to the target/result column.

Usage:
    COLCALC(@destination-column, @function , @parameters)

**Time Functions**
ADJYEAR, TIME2QTR, TIME2MONTH, TIME2WEEK, TIME2DAY, TIME2HOUR, TIME24HOUR, TIME210MIN, TIME2MIN, TIME230DAY, SDF2EPOCH, EPOCH2SDF, GMTIME, LOCALTIME, DATEDIFF

**Number Functions**
INT, MINUS, PLUS, TIMES, DIVIDEBY, RANDINT, XTOPOWY, HEX2DEC, HEX2BIN, BIN2HEX

**String Functions**
MD5, LENGTH, CONCAT, UC, LC, ZEROPAD
`
    },
    COLREP: {
        label: "COLREP",
        kind: CompletionItemKind.Function,
        data: "COLREP",
        details: "COLREP details",
        documentation: `Definition:
Used to search a pattern and replace with a string on a column value.

Usage:
	COLREP(/@regex/, ’@literal-value’, @column)
`
    },
    COLMAP: {
        label: "COLMAP",
        kind: CompletionItemKind.Function,
        data: "COLMAP",
        details: "COLMAP details",
        documentation: `Definition:
Conditionally assigns new value to the destination column. It works like if and else-if and else condition.

Usage:
    COLMAP(@destination-column, @test-column , /@regex/ , column1|literal1, column2|literal2 )

Explaination:
@destination-column gets value based on @test-column value i.e., if @test-column = @regex then column1|literal1 or column2|literal2
`
    },
    COLJOIN: {
        label: "COLJOIN",
        kind: CompletionItemKind.Function,
        data: "COLJOIN",
        details: "COLJOIN details",
        documentation: `Definition:
Used to join two or more columns or literals together and putting the value in the resultant column.

Usage:
    COLJOIN(@destination-col,@column1|’@literal-value’,@column2|‘@literal-value’[,@columnN]*)
`
    },
    COLDROP: {
        label: "COLDROP",
        kind: CompletionItemKind.Function,
        data: "COLDROP",
        details: "COLDROP details",
        documentation: `Definition:
Used to drop any temporary column or columns in the table.

Usage:
COLDROP(@column1[,@columnN]*)
`
    },
    COLFILL: {
        label: "COLFILL",
        kind: CompletionItemKind.Function,
        data: "COLFILL",
        details: "COLFILL details",
        documentation: `Definition:
Fills an empty column with the value from the previous row.

Usage:
    COLFILL(@column1[,@columnN]*)
`
    },
    ADD_CONTEXT: {
        label: "ADD_CONTEXT",
        kind: CompletionItemKind.Function,
        data: "ADD_CONTEXT",
        details: "",
        documentation: ""
    },
    CONSTRAIN: {
        label: "CONSTRAIN",
        kind: CompletionItemKind.Function,
        data: "CONSTRAIN",
        details: "",
        documentation: ""
    },
    UNPARSED: {
        label: "UNPARSED",
        kind: CompletionItemKind.Enum,
        data: "UNPARSED",
        details: "",
        documentation: ""
    },
    TRASH: {
        label: "TRASH",
        kind: CompletionItemKind.Enum,
        data: "TRASH",
        details: "",
        documentation: ""
    },
    EVENT: {
        label: "EVENT",
        kind: CompletionItemKind.Enum,
        data: "EVENT",
        details: "",
        documentation: ""
    },
    STAT: {
        label: "STAT",
        kind: CompletionItemKind.Enum,
        data: "STAT",
        details: "",
        documentation: ""
    },
    SESSION: {
        label: "SESSION",
        kind: CompletionItemKind.Enum,
        data: "SESSION",
        details: "",
        documentation: ""
    },
    LIST_BASIC: {
        label: "list_basic",
        kind: CompletionItemKind.Enum,
        data: "LIST_BASIC",
        details: "",
        documentation: ""
    },
    ALIGNED_BASIC: {
        label: "aligned_basic",
        kind: CompletionItemKind.Enum,
        data: "ALIGNED_BASIC",
        details: "",
        documentation: ""
    },
    NVPAIR_BASIC: {
        label: "nvpair_basic",
        kind: CompletionItemKind.Enum,
        data: "NVPAIR_BASIC",
        details: "",
        documentation: ""
    },
    XML_BASIC: {
        label: "xml_basic",
        kind: CompletionItemKind.Enum,
        data: "XML_BASIC",
        details: "",
        documentation: ""
    },
    JSON: {
        label: "json",
        kind: CompletionItemKind.Enum,
        data: "JSON",
        details: "",
        documentation: ""
    },
    CSV_NOHEADER: {
        label: "csv_noheader",
        kind: CompletionItemKind.Enum,
        data: "CSV_NOHEADER",
        details: "",
        documentation: ""
    },
    CSV_WITHHEADER: {
        label: "csv_withheader",
        kind: CompletionItemKind.Enum,
        data: "CSV_WITHHEADER",
        details: "",
        documentation: ""
    },
    ADJYEAR: {
        label: "ADJYEAR",
        kind: CompletionItemKind.Enum,
        data: "ADJYEAR",
        details: "",
        documentation: ""
    },
    TIME2QTR: {
        label: "TIME2QTR",
        kind: CompletionItemKind.Enum,
        data: "TIME2QTR",
        details: "",
        documentation: ""
    },
    TIME2MONTH: {
        label: "TIME2MONTH",
        kind: CompletionItemKind.Enum,
        data: "TIME2MONTH",
        details: "",
        documentation: ""
    },
    TIME2WEEK: {
        label: "TIME2WEEK",
        kind: CompletionItemKind.Enum,
        data: "TIME2WEEK",
        details: "",
        documentation: ""
    },
    TIME2DAY: {
        label: "TIME2DAY",
        kind: CompletionItemKind.Enum,
        data: "TIME2DAY",
        details: "",
        documentation: ""
    },
    TIME2HOUR: {
        label: "TIME2HOUR",
        kind: CompletionItemKind.Enum,
        data: "TIME2HOUR",
        details: "",
        documentation: ""
    },
    TIME24HOUR: {
        label: "TIME24HOUR",
        kind: CompletionItemKind.Enum,
        data: "TIME24HOUR",
        details: "",
        documentation: ""
    },
    TIME210MIN: {
        label: "TIME210MIN",
        kind: CompletionItemKind.Enum,
        data: "TIME210MIN",
        details: "",
        documentation: ""
    },
    TIME2MIN: {
        label: "TIME2MIN",
        kind: CompletionItemKind.Enum,
        data: "TIME2MIN",
        details: "",
        documentation: ""
    },
    TIME230DAY: {
        label: "TIME230DAY",
        kind: CompletionItemKind.Enum,
        data: "TIME230DAY",
        details: "",
        documentation: ""
    },
    SDF2EPOCH: {
        label: "SDF2EPOCH",
        kind: CompletionItemKind.Enum,
        data: "SDF2EPOCH",
        details: "",
        documentation: ""
    },
    EPOCH2SDF: {
        label: "EPOCH2SDF",
        kind: CompletionItemKind.Enum,
        data: "EPOCH2SDF",
        details: "",
        documentation: ""
    },
    GMTIME: {
        label: "GMTIME",
        kind: CompletionItemKind.Enum,
        data: "GMTIME",
        details: "",
        documentation: ""
    },
    LOCALTIME: {
        label: "LOCALTIME",
        kind: CompletionItemKind.Enum,
        data: "LOCALTIME",
        details: "",
        documentation: ""
    },
    DATEDIFF: {
        label: "DATEDIFF",
        kind: CompletionItemKind.Enum,
        data: "DATEDIFF",
        details: "",
        documentation: ""
    },
    INT: {
        label: "INT",
        kind: CompletionItemKind.Enum,
        data: "INT",
        details: "",
        documentation: ""
    },
    MINUS: {
        label: "MINUS",
        kind: CompletionItemKind.Enum,
        data: "MINUS",
        details: "",
        documentation: ""
    },
    PLUS: {
        label: "PLUS",
        kind: CompletionItemKind.Enum,
        data: "PLUS",
        details: "",
        documentation: ""
    },
    TIMES: {
        label: "TIMES",
        kind: CompletionItemKind.Enum,
        data: "TIMES",
        details: "",
        documentation: ""
    },
    DIVIDEBY: {
        label: "DIVIDEBY",
        kind: CompletionItemKind.Enum,
        data: "DIVIDEBY",
        details: "",
        documentation: ""
    },
    RANDINT: {
        label: "RANDINT",
        kind: CompletionItemKind.Enum,
        data: "RANDINT",
        details: "",
        documentation: ""
    },
    XTOPOWY: {
        label: "XTOPOWY",
        kind: CompletionItemKind.Enum,
        data: "XTOPOWY",
        details: "",
        documentation: ""
    },
    HEX2DEC: {
        label: "HEX2DEC",
        kind: CompletionItemKind.Enum,
        data: "HEX2DEC",
        details: "",
        documentation: ""
    },
    HEX2BIN: {
        label: "HEX2BIN",
        kind: CompletionItemKind.Enum,
        data: "HEX2BIN",
        details: "",
        documentation: ""
    },
    BIN2HEX: {
        label: "BIN2HEX",
        kind: CompletionItemKind.Enum,
        data: "BIN2HEX",
        details: "",
        documentation: ""
    },
    MD5: {
        label: "MD5",
        kind: CompletionItemKind.Enum,
        data: "MD5",
        details: "",
        documentation: ""
    },
    LENGTH: {
        label: "LENGTH",
        kind: CompletionItemKind.Enum,
        data: "LENGTH",
        details: "",
        documentation: ""
    },
    CONCAT: {
        label: "CONCAT",
        kind: CompletionItemKind.Enum,
        data: "CONCAT",
        details: "",
        documentation: ""
    },
    UC: {
        label: "UC",
        kind: CompletionItemKind.Enum,
        data: "UC",
        details: "",
        documentation: ""
    },
    LC: {
        label: "LC",
        kind: CompletionItemKind.Enum,
        data: "LC",
        details: "",
        documentation: ""
    },
    ZEROPAD: {
        label: "ZEROPAD",
        kind: CompletionItemKind.Enum,
        data: "ZEROPAD",
        details: "",
        documentation: ""
    },
    STR2TIME: {
        label: "STR2TIME",
        kind: CompletionItemKind.Enum,
        data: "STR2TIME",
        details: "",
        documentation: ""
    },
    STR2SUM: {
        label: "STR2SUM",
        kind: CompletionItemKind.Enum,
        data: "STR2SUM",
        details: "",
        documentation: ""
    }
};
