grammar Spl;

// Parser

splg 
	: 	define+ EOF
	;

define 	
	: 	namespace | table
	;
	
//----NameSpace	
namespace
	:	namespace_def ns_type_def?
		(bundle_type)?
		(begins_with)?
		(ns_ctx)?
		(ends_with)?
        (file_pattern)?
		SEMICOLON
	;

namespace_def
	:	DEFINE NAMESPACE ns_name DESCRIPTION QUOTED_LABEL
	;

ns_name
	: (IDENT | IDENT_DOT)
	;

ns_type_def
	: (TYPE NS_TYPES)? (REF ns_ref_name)? LOCK? SOLR? XML? JSON?
    ;

ns_ref_name
	: (IDENT | IDENT_DOT)
	;

bundle_type : BUNDLETYPE QUOTED_LABEL;

ns_ctx
	: CONTEXT REGEX AS IDENT (COMMA IDENT)*
	;


begins_with
	: BEGINS WITH REGEX
	;

ends_with
	: ENDS WITH REGEX
	;

file_pattern
	: FILEPATTERN REGEX
	;


table
	:	table_def 
		icon_def 
		set_xml_ns?
		multiline?
		skip_n?
		(column_def)+
		add_context 
		col_op_def* 
		constrain? 
		SEMICOLON 	
	;

table_def	
	:	DEFINE TABLE IDENT NAMESPACE ns_name
	;

icon_def
	:  	ICON ( list_basic_icon_def | nvpair_icon_def | aligned_basic_icon_def | xml_icon_def | csv_icon_def)
	;

csv_icon_def : (CSV_WITHHEADER|CSV_NOHEADER) REGEX;

list_basic_icon_def : LIST_BASIC LINEGRAB REGEX;

nvpair_icon_def : NV_PAIR REGEX REGEX;

aligned_basic_icon_def : ALIGNED_BASIC QUOTED_LABEL COMMA QUOTED_LABEL COMMA QUOTED_LABEL;

xml_icon_def : XML_BASIC REGEX;

multiline
	: MULTILINE (NOT)? REGEX QUOTED_LABEL
	;

skip_n : SKIP_N INT;

set_xml_ns
	: SETXMLNAMESPACE REGEX
	;

add_context
	: 	ADD_CONTEXT OPENPARENTHESIS  IDENT (COMMA (IDENT))* CLOSEPARENTHESIS
	;
constrain
	: 	CONSTRAIN OPENPARENTHESIS  (IDENT (COMMA (IDENT))*)? CLOSEPARENTHESIS
	;
	
//------Column Def
column_def
	:	COLUMN IDENT 
		(obj_ref)? 
		data_type 
		label_def? 
		(as_def)?
		(alignment)?
		(with_name_def)?
		(solr_mapping)?
	;

obj_ref 	
	: 	OPENPARENTHESIS IDENT_DOT (COLON IDENT)? CLOSEPARENTHESIS
	;
data_type
	:	OPENSQUARE DT OPENPARENTHESIS INT CLOSEPARENTHESIS COLON NULL_DEF (COLON QUOTED_LABEL)? CLOSESQUARE
	;
	
label_def
	:	LT attrib_def ( COMMA attrib_def )* GT
	;
attrib_def
	:	colmeta_attrib_name colmeta_attrib_value
	;
colmeta_attrib_name
	: (COLMETA_LABEL | COLMETA_SYSID1 | COLMETA_SYSID2 | COLMETA_SYSID3 | COLMETA_SESSID1 |
		COLMETA_SESSID2 | COLMETA_SESSID3 | COLMETA_SESS_NAME | COLMETA_SESS_ATTR |	COLMETA_SESS_COUNT |
		COLMETA_FILENAME | COLMETA_CONTENT | COLMETA_FRAGMENT_ID |	COLMETA_OBSURL | COLMETA_OBSSIZE |
		COLMETA_UPLOADEDBY | COLMETA_FACET | COLMETA_SEVERITY | COLMETA_UNITS | COLMETA_BEGIN_OFFSET |
		COLMETA_NAMESPACE | COLMETA_TYPE | COLMETA_TS | COLMETA_LINKED |)
	;
colmeta_attrib_value
	: (QUOTED_LABEL|IDENT|INT);

as_def
	: AS (INT | QUOTED_LABEL)
	;

with_name_def : WITH_NAME QUOTED_LABEL;
	
solr_mapping
	:	WITH SOLRMAPPING OPENPARENTHESIS solr_mapping_def ( COMMA solr_mapping_def )* CLOSEPARENTHESIS
	;

solr_mapping_def
	:	solr_mapping_attr_name solr_mapping_attr_value
	;

solr_mapping_attr_name
	: (SOLRMAPPING_NAME | SOLRMAPPING_DATATYPE | SOLRMAPPING_UNIQFLDEF | SOLRMAPPING_MULTIVALUED |
		SOLRMAPPING_OMITNORMS | SOLRMAPPING_STORETV | SOLRMAPPING_STORETP | SOLRMAPPING_STORETO)
	;

solr_mapping_attr_value
	: (QUOTED_LABEL|IDENT|INT)
	;

alignment: ALIGNED_BASIC_L | ALIGNED_BASIC_R | ALIGNED_BASIC_C;

generic_colop_def
	: IDENT OPENPARENTHESIS IDENT (COMMA (QUOTED_LABEL|IDENT))+ CLOSEPARENTHESIS
	;

col_op_def	
	: 	colcopy|colcount|coljoin|colcalc|colsplit|colrep|colfill|colmap|coldrop|colprint|colcase
	;

colcopy : COLCOPY OPENPARENTHESIS colcopy_param CLOSEPARENTHESIS;
colcopy_param : (QUOTED_LABEL|IDENT) COMMA IDENT;


coljoin : COLJOIN OPENPARENTHESIS coljoin_param CLOSEPARENTHESIS;
coljoin_param : IDENT (COMMA (QUOTED_LABEL|IDENT))+ ;

colsplit : COLSPLIT OPENPARENTHESIS colsplit_param CLOSEPARENTHESIS;
colsplit_param : IDENT COMMA REGEX (COMMA (IDENT))+;
	

colrep : COLREP OPENPARENTHESIS colrep_param CLOSEPARENTHESIS;
colrep_param : REGEX COMMA (QUOTED_LABEL|IDENT) COMMA IDENT ;

colfill : COLFILL OPENPARENTHESIS colfill_param CLOSEPARENTHESIS;
colfill_param : IDENT ;

colmap : COLMAP OPENPARENTHESIS colmap_param CLOSEPARENTHESIS;
colmap_param : IDENT COMMA IDENT COMMA (REGEX|QUOTED_LABEL) (COMMA (QUOTED_LABEL|IDENT|ZERO|INT))+;


//LCP 5.8 doesn't support escaping of wrapper char, so temporary solution to accept everything inside colcalc
//change this after upgrading to 5.9
//colcalc: COLCALC OPENPARENTHESIS colcalc_param CLOSEPARENTHESIS;
//colcalc_param : IDENT COMMA FUNCTION (COMMA (QUOTED_LABEL|IDENT|ZERO|INT))+;

colcalc: COLCALC_CATCH_ALL;

//COLCOUNT(src, /PATTERN/, dest)
colcount: COLCOUNT OPENPARENTHESIS colcount_param CLOSEPARENTHESIS;
colcount_param : IDENT COMMA REGEX COMMA IDENT;

//COLDROP(col)
coldrop:  COLDROP OPENPARENTHESIS coldrop_param CLOSEPARENTHESIS;
coldrop_param : IDENT ;

//COLPRINT(col)
colprint:  COLPRINT OPENPARENTHESIS colprint_param CLOSEPARENTHESIS;
colprint_param : IDENT ;

//COLWHEN(st_temp,/<regex to check>/)
colwhen: COLWHEN OPENPARENTHESIS colwhen_param CLOSEPARENTHESIS;
colwhen_param : IDENT COMMA REGEX;

colcase: COLCASE colcase_when COLELSE colcase_else COLEND;
colcase_when : (colcase_when_nested)+;
colcase_when_nested : colwhen col_op_def+;
colcase_else : col_op_def*;


// Lexer
Comment:  '#' ~( '\r' | '\n' )* ;
SEMICOLON: ';' ;
COLON : ':' ;
DIVIDE : '/' ; 
BACKSLASH : '\\' ;
OPENSQUARE : '[' ;
CLOSESQUARE : ']' ;
OPENPARENTHESIS : '(' ;
CLOSEPARENTHESIS : ')' ;
GT : '>' ;
LT : '<' ;
EQUAL : '=' ;
SINGLEQUOT : '\'' ;
DOT: '.';
COMMA: ',';

COMMENT : '#' ~[\r\n]* '\r'? '\n' -> skip ;
WS : [ \n\t\r\u000C]+ -> skip ;

DEFINE : 'DEFINE' ;
NAMESPACE : 'NAMESPACE' ;
REF: 'REF';
DESCRIPTION : 'DESCRIPTION' ;
BEGINS : 'BEGINS' ;
ENDS : 'ENDS' ;
WITH : 'WITH' ;
BUNDLETYPE: 'BUNDLETYPE';
TABLE : 'TABLE' ;
LINEGRAB : 'LINEGRAB' ;
COLUMN : 'COLUMN' ;
AS : 'AS' ;
WITH_NAME : 'WITH NAME';
TYPE  : 'TYPE' ;
FILEPATTERN : 'FILEPATTERN' ;
SOLRMAPPING : 'SOLRMAPPING' ;
CONTEXT: 'CONTEXT';
MULTILINE: 'MULTILINE';
SETXMLNAMESPACE : 'SETXMLNAMESPACE';
NOT: 'NOT';
XML: 'XML';
JSON: 'JSON';
SKIP_N : 'SKIP';

ICON  : 'ICON' ;
NV_PAIR : 'nvpair_basic' ;
LIST_BASIC : 'list_basic' ;
ALIGNED_BASIC : 'aligned_basic';
XML_BASIC : 'xml_basic';
CSV_WITHHEADER: 'csv_withheader';
CSV_NOHEADER: 'csv_noheader';


NULL_DEF : 'nn' | 'n' ;
NS_TYPES : 'EVENT' | 'UNPARSED' | 'SESSION' | 'SECTION' | 'STAT' | 'TRASH';
SOLR : 'SOLR' ;
LOCK : 'LOCK' ;

CONSTRAIN: 'CONSTRAIN';
COLDROP: 'COLDROP';
COLFILL: 'COLFILL';
COLJOIN: 'COLJOIN';
COLCOPY: 'COLCOPY';
ADD_CONTEXT: 'ADD_CONTEXT';
COLSPLIT: 'COLSPLIT';
COLREP: 'COLREP';
COLMAP: 'COLMAP';
COLCALC: 'COLCALC';
COLCASE : 'COLCASE' ;
COLELSE : 'COLELSE' ;
COLEND : 'COLEND' ;
COLWHEN: 'COLWHEN';
COLCOUNT: 'COLCOUNT';
COLPRINT: 'COLPRINT';
FUNCTION: 'ADJYEAR' | 'CONCAT' | 'DIVIDEBY'  | 'MD5' | 'EPOCH2SDF' | 'SDF2EPOCH' | 'STR2SUM' | 'MINUS' | 'PLUS' | 'HEX2DEC' | 'INT' | 'LC' | 'UC' | 'TIMES' | 'LENGTH' | 'MD5' | 'XTOPOWY';

INT : '1'..'9' '0'..'9'*;

DT: 'i' | 's' | 'r';

REGEX : DIVIDE ((BACKSLASH .) | ~'/' )* DIVIDE ;

COLCALC_CATCH_ALL: COLCALC OPENPARENTHESIS (~')')* CLOSEPARENTHESIS ;

QUOTED_LABEL : SINGLEQUOT ((BACKSLASH .) | ~'\'' )* SINGLEQUOT ;

SOLRMAPPING_NAME : 'name=';
SOLRMAPPING_DATATYPE : 'datatype=';  //beware of type=1 col meta attribute token while changing ordering
SOLRMAPPING_MULTIVALUED : 'multivalued=';
SOLRMAPPING_UNIQFLDEF : 'uniquefielddef=';
SOLRMAPPING_OMITNORMS : 'omitnorms=';
SOLRMAPPING_STORETV : 'storetermvectors=';
SOLRMAPPING_STORETP : 'storetermpositions=';
SOLRMAPPING_STORETO : 'storetermoffsets=';


//column level metadata
COLMETA_SYSID1 : 'sysid1=';
COLMETA_SYSID2 : 'sysid2=';
COLMETA_SYSID3 : 'sysid3=';
COLMETA_SESSID1 : 'sessionid1=';
COLMETA_SESSID2 : 'sessionid2=';
COLMETA_SESSID3 : 'sessionid3=';
COLMETA_SESS_NAME : 'sessionname=';
COLMETA_SESS_ATTR : 'sessionattr=';
COLMETA_SESS_COUNT : 'sessioncount=';


COLMETA_FILENAME : 'filename=';
COLMETA_TS : 'ts=';
COLMETA_LINKED : 'linked=';
COLMETA_CONTENT : 'content=';
COLMETA_FRAGMENT_ID : 'fragment_id=';
COLMETA_OBSURL : 'obs_url=';
COLMETA_OBSSIZE : 'obs_size=';
COLMETA_UPLOADEDBY : 'uploaded_by=';
COLMETA_FACET : 'facet=';
COLMETA_SEVERITY : 'severity=';
COLMETA_UNITS : 'units=';
COLMETA_LABEL : 'label=';
COLMETA_BEGIN_OFFSET : 'begin_offset=';
COLMETA_NAMESPACE : 'namespace=';
COLMETA_TYPE : 'type=';

ALIGNED_BASIC_L : '[L]';
ALIGNED_BASIC_R : '[R]';
ALIGNED_BASIC_C : '[C]';

IDENT : [a-z][a-z0-9_]+ ;
IDENT_DOT : IDENT ( DOT IDENT )+ ;
ZERO: '0';
EMPTY_QUOTE : '\'\'';
