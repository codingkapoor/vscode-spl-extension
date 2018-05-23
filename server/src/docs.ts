exports.spl = {
    namespace: 
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
    , table:
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
    , column:
`Definition:
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
    , colcopy:
`Definition:
Copy source column value or a literal value to one or more destination column(s).

Usage:
	COLCOPY(@source-column|@literal-value, @destination-column1 [, @destination-columnN])

Note:
- Second parameter must be a column.
`
    , colsplit:
`Definition:
Splits a column value into more than one pices specified by the back reference of a regular expression and assigns them to respective destination column.

Usage:
    COLSPLIT(@source-column, /@regex-with-back-reference/ , @destination-column1[,destination-columnN]*)

Note:
- Number of back reference in regex should be equal to number of destination column.
`
    , colcalc:
`Definition:
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
    , colrep:
`Definition:
Used to search a pattern and replace with a string on a column value.

Usage:
	COLREP(/@regex/, ’@literal-value’, @column)
`
    , colmap:
`Definition:
Conditionally assigns new value to the destination column. It works like if and else-if and else condition.

Usage:
	COLMAP(@destination-column, @test-column , /@regex/ , column1|literal1, column2|literal2 )

Explaination:
@destination-column gets value based on @test-column value i.e., if @test-column = @regex then column1|literal1 or column2|literal2
`
    , coljoin:
`Definition:
Used to join two or more columns or literals together and putting the value in the resultant column.

Usage:
	COLJOIN(@destination-col,@column1|’@literal-value’,@column2|‘@literal-value’[,@columnN]*)
`
    , coldrop:
`Definition:
Used to drop any temporary column or columns in the table.

Usage:
COLDROP(@column1[,@columnN]*)
`
    , colfill:
`Definition:
Fills an empty column with the value from the previous row.

Usage:
	COLFILL(@column1[,@columnN]*)
`
}