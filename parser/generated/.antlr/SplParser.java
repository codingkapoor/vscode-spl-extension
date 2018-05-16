// Generated from /home/shivam/Desktop/spl/parser/generated/Spl.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class SplParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		SEMICOLON=1, COLON=2, DIVIDE=3, BACKSLASH=4, OPENSQUARE=5, CLOSESQUARE=6, 
		OPENPARENTHESIS=7, CLOSEPARENTHESIS=8, GT=9, LT=10, EQUAL=11, SINGLEQUOT=12, 
		DOT=13, COMMA=14, COMMENT=15, WS=16, DEFINE=17, NAMESPACE=18, REF=19, 
		DESCRIPTION=20, BEGINS=21, ENDS=22, WITH=23, BUNDLETYPE=24, TABLE=25, 
		LINEGRAB=26, COLUMN=27, AS=28, WITH_NAME=29, TYPE=30, FILEPATTERN=31, 
		SOLRMAPPING=32, CONTEXT=33, MULTILINE=34, SETXMLNAMESPACE=35, NOT=36, 
		XML=37, JSON=38, SKIP_N=39, ICON=40, NV_PAIR=41, LIST_BASIC=42, ALIGNED_BASIC=43, 
		XML_BASIC=44, CSV_WITHHEADER=45, CSV_NOHEADER=46, NULL_DEF=47, NS_TYPES=48, 
		SOLR=49, LOCK=50, CONSTRAIN=51, COLDROP=52, COLFILL=53, COLJOIN=54, COLCOPY=55, 
		ADD_CONTEXT=56, COLSPLIT=57, COLREP=58, COLMAP=59, COLCALC=60, COLCASE=61, 
		COLELSE=62, COLEND=63, COLWHEN=64, COLCOUNT=65, COLPRINT=66, FUNCTION=67, 
		INT=68, DT=69, REGEX=70, COLCALC_CATCH_ALL=71, QUOTED_LABEL=72, SOLRMAPPING_NAME=73, 
		SOLRMAPPING_DATATYPE=74, SOLRMAPPING_MULTIVALUED=75, SOLRMAPPING_UNIQFLDEF=76, 
		SOLRMAPPING_OMITNORMS=77, SOLRMAPPING_STORETV=78, SOLRMAPPING_STORETP=79, 
		SOLRMAPPING_STORETO=80, COLMETA_SYSID1=81, COLMETA_SYSID2=82, COLMETA_SYSID3=83, 
		COLMETA_SESSID1=84, COLMETA_SESSID2=85, COLMETA_SESSID3=86, COLMETA_SESS_NAME=87, 
		COLMETA_SESS_ATTR=88, COLMETA_SESS_COUNT=89, COLMETA_FILENAME=90, COLMETA_TS=91, 
		COLMETA_LINKED=92, COLMETA_CONTENT=93, COLMETA_FRAGMENT_ID=94, COLMETA_OBSURL=95, 
		COLMETA_OBSSIZE=96, COLMETA_UPLOADEDBY=97, COLMETA_FACET=98, COLMETA_SEVERITY=99, 
		COLMETA_UNITS=100, COLMETA_LABEL=101, COLMETA_BEGIN_OFFSET=102, COLMETA_NAMESPACE=103, 
		COLMETA_TYPE=104, ALIGNED_BASIC_L=105, ALIGNED_BASIC_R=106, ALIGNED_BASIC_C=107, 
		IDENT=108, IDENT_DOT=109, ZERO=110, EMPTY_QUOTE=111;
	public static final int
		RULE_splg = 0, RULE_define = 1, RULE_namespace = 2, RULE_namespace_def = 3, 
		RULE_ns_name = 4, RULE_ns_type_def = 5, RULE_ns_ref_name = 6, RULE_bundle_type = 7, 
		RULE_ns_ctx = 8, RULE_begins_with = 9, RULE_ends_with = 10, RULE_file_pattern = 11, 
		RULE_table = 12, RULE_table_def = 13, RULE_icon_def = 14, RULE_csv_icon_def = 15, 
		RULE_list_basic_icon_def = 16, RULE_nvpair_icon_def = 17, RULE_aligned_basic_icon_def = 18, 
		RULE_xml_icon_def = 19, RULE_multiline = 20, RULE_skip_n = 21, RULE_set_xml_ns = 22, 
		RULE_add_context = 23, RULE_constrain = 24, RULE_column_def = 25, RULE_obj_ref = 26, 
		RULE_data_type = 27, RULE_label_def = 28, RULE_attrib_def = 29, RULE_colmeta_attrib_name = 30, 
		RULE_colmeta_attrib_value = 31, RULE_as_def = 32, RULE_with_name_def = 33, 
		RULE_solr_mapping = 34, RULE_solr_mapping_def = 35, RULE_solr_mapping_attr_name = 36, 
		RULE_solr_mapping_attr_value = 37, RULE_alignment = 38, RULE_generic_colop_def = 39, 
		RULE_col_op_def = 40, RULE_colcopy = 41, RULE_colcopy_param = 42, RULE_coljoin = 43, 
		RULE_coljoin_param = 44, RULE_colsplit = 45, RULE_colsplit_param = 46, 
		RULE_colrep = 47, RULE_colrep_param = 48, RULE_colfill = 49, RULE_colfill_param = 50, 
		RULE_colmap = 51, RULE_colmap_param = 52, RULE_colcalc = 53, RULE_colcount = 54, 
		RULE_colcount_param = 55, RULE_coldrop = 56, RULE_coldrop_param = 57, 
		RULE_colprint = 58, RULE_colprint_param = 59, RULE_colwhen = 60, RULE_colwhen_param = 61, 
		RULE_colcase = 62, RULE_colcase_when = 63, RULE_colcase_when_nested = 64, 
		RULE_colcase_else = 65;
	public static final String[] ruleNames = {
		"splg", "define", "namespace", "namespace_def", "ns_name", "ns_type_def", 
		"ns_ref_name", "bundle_type", "ns_ctx", "begins_with", "ends_with", "file_pattern", 
		"table", "table_def", "icon_def", "csv_icon_def", "list_basic_icon_def", 
		"nvpair_icon_def", "aligned_basic_icon_def", "xml_icon_def", "multiline", 
		"skip_n", "set_xml_ns", "add_context", "constrain", "column_def", "obj_ref", 
		"data_type", "label_def", "attrib_def", "colmeta_attrib_name", "colmeta_attrib_value", 
		"as_def", "with_name_def", "solr_mapping", "solr_mapping_def", "solr_mapping_attr_name", 
		"solr_mapping_attr_value", "alignment", "generic_colop_def", "col_op_def", 
		"colcopy", "colcopy_param", "coljoin", "coljoin_param", "colsplit", "colsplit_param", 
		"colrep", "colrep_param", "colfill", "colfill_param", "colmap", "colmap_param", 
		"colcalc", "colcount", "colcount_param", "coldrop", "coldrop_param", "colprint", 
		"colprint_param", "colwhen", "colwhen_param", "colcase", "colcase_when", 
		"colcase_when_nested", "colcase_else"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "';'", "':'", "'/'", "'\\'", "'['", "']'", "'('", "')'", "'>'", 
		"'<'", "'='", "'''", "'.'", "','", null, null, "'DEFINE'", "'NAMESPACE'", 
		"'REF'", "'DESCRIPTION'", "'BEGINS'", "'ENDS'", "'WITH'", "'BUNDLETYPE'", 
		"'TABLE'", "'LINEGRAB'", "'COLUMN'", "'AS'", "'WITH NAME'", "'TYPE'", 
		"'FILEPATTERN'", "'SOLRMAPPING'", "'CONTEXT'", "'MULTILINE'", "'SETXMLNAMESPACE'", 
		"'NOT'", "'XML'", "'JSON'", "'SKIP'", "'ICON'", "'nvpair_basic'", "'list_basic'", 
		"'aligned_basic'", "'xml_basic'", "'csv_withheader'", "'csv_noheader'", 
		null, null, "'SOLR'", "'LOCK'", "'CONSTRAIN'", "'COLDROP'", "'COLFILL'", 
		"'COLJOIN'", "'COLCOPY'", "'ADD_CONTEXT'", "'COLSPLIT'", "'COLREP'", "'COLMAP'", 
		"'COLCALC'", "'COLCASE'", "'COLELSE'", "'COLEND'", "'COLWHEN'", "'COLCOUNT'", 
		"'COLPRINT'", null, null, null, null, null, null, "'name='", "'datatype='", 
		"'multivalued='", "'uniquefielddef='", "'omitnorms='", "'storetermvectors='", 
		"'storetermpositions='", "'storetermoffsets='", "'sysid1='", "'sysid2='", 
		"'sysid3='", "'sessionid1='", "'sessionid2='", "'sessionid3='", "'sessionname='", 
		"'sessionattr='", "'sessioncount='", "'filename='", "'ts='", "'linked='", 
		"'content='", "'fragment_id='", "'obs_url='", "'obs_size='", "'uploaded_by='", 
		"'facet='", "'severity='", "'units='", "'label='", "'begin_offset='", 
		"'namespace='", "'type='", "'[L]'", "'[R]'", "'[C]'", null, null, "'0'", 
		"''''"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "SEMICOLON", "COLON", "DIVIDE", "BACKSLASH", "OPENSQUARE", "CLOSESQUARE", 
		"OPENPARENTHESIS", "CLOSEPARENTHESIS", "GT", "LT", "EQUAL", "SINGLEQUOT", 
		"DOT", "COMMA", "COMMENT", "WS", "DEFINE", "NAMESPACE", "REF", "DESCRIPTION", 
		"BEGINS", "ENDS", "WITH", "BUNDLETYPE", "TABLE", "LINEGRAB", "COLUMN", 
		"AS", "WITH_NAME", "TYPE", "FILEPATTERN", "SOLRMAPPING", "CONTEXT", "MULTILINE", 
		"SETXMLNAMESPACE", "NOT", "XML", "JSON", "SKIP_N", "ICON", "NV_PAIR", 
		"LIST_BASIC", "ALIGNED_BASIC", "XML_BASIC", "CSV_WITHHEADER", "CSV_NOHEADER", 
		"NULL_DEF", "NS_TYPES", "SOLR", "LOCK", "CONSTRAIN", "COLDROP", "COLFILL", 
		"COLJOIN", "COLCOPY", "ADD_CONTEXT", "COLSPLIT", "COLREP", "COLMAP", "COLCALC", 
		"COLCASE", "COLELSE", "COLEND", "COLWHEN", "COLCOUNT", "COLPRINT", "FUNCTION", 
		"INT", "DT", "REGEX", "COLCALC_CATCH_ALL", "QUOTED_LABEL", "SOLRMAPPING_NAME", 
		"SOLRMAPPING_DATATYPE", "SOLRMAPPING_MULTIVALUED", "SOLRMAPPING_UNIQFLDEF", 
		"SOLRMAPPING_OMITNORMS", "SOLRMAPPING_STORETV", "SOLRMAPPING_STORETP", 
		"SOLRMAPPING_STORETO", "COLMETA_SYSID1", "COLMETA_SYSID2", "COLMETA_SYSID3", 
		"COLMETA_SESSID1", "COLMETA_SESSID2", "COLMETA_SESSID3", "COLMETA_SESS_NAME", 
		"COLMETA_SESS_ATTR", "COLMETA_SESS_COUNT", "COLMETA_FILENAME", "COLMETA_TS", 
		"COLMETA_LINKED", "COLMETA_CONTENT", "COLMETA_FRAGMENT_ID", "COLMETA_OBSURL", 
		"COLMETA_OBSSIZE", "COLMETA_UPLOADEDBY", "COLMETA_FACET", "COLMETA_SEVERITY", 
		"COLMETA_UNITS", "COLMETA_LABEL", "COLMETA_BEGIN_OFFSET", "COLMETA_NAMESPACE", 
		"COLMETA_TYPE", "ALIGNED_BASIC_L", "ALIGNED_BASIC_R", "ALIGNED_BASIC_C", 
		"IDENT", "IDENT_DOT", "ZERO", "EMPTY_QUOTE"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Spl.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public SplParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class SplgContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(SplParser.EOF, 0); }
		public List<DefineContext> define() {
			return getRuleContexts(DefineContext.class);
		}
		public DefineContext define(int i) {
			return getRuleContext(DefineContext.class,i);
		}
		public SplgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_splg; }
	}

	public final SplgContext splg() throws RecognitionException {
		SplgContext _localctx = new SplgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_splg);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(133); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(132);
				define();
				}
				}
				setState(135); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==DEFINE );
			setState(137);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DefineContext extends ParserRuleContext {
		public NamespaceContext namespace() {
			return getRuleContext(NamespaceContext.class,0);
		}
		public TableContext table() {
			return getRuleContext(TableContext.class,0);
		}
		public DefineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_define; }
	}

	public final DefineContext define() throws RecognitionException {
		DefineContext _localctx = new DefineContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_define);
		try {
			setState(141);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(139);
				namespace();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(140);
				table();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NamespaceContext extends ParserRuleContext {
		public Namespace_defContext namespace_def() {
			return getRuleContext(Namespace_defContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(SplParser.SEMICOLON, 0); }
		public Ns_type_defContext ns_type_def() {
			return getRuleContext(Ns_type_defContext.class,0);
		}
		public Bundle_typeContext bundle_type() {
			return getRuleContext(Bundle_typeContext.class,0);
		}
		public Begins_withContext begins_with() {
			return getRuleContext(Begins_withContext.class,0);
		}
		public Ns_ctxContext ns_ctx() {
			return getRuleContext(Ns_ctxContext.class,0);
		}
		public Ends_withContext ends_with() {
			return getRuleContext(Ends_withContext.class,0);
		}
		public File_patternContext file_pattern() {
			return getRuleContext(File_patternContext.class,0);
		}
		public NamespaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namespace; }
	}

	public final NamespaceContext namespace() throws RecognitionException {
		NamespaceContext _localctx = new NamespaceContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_namespace);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(143);
			namespace_def();
			setState(145);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				{
				setState(144);
				ns_type_def();
				}
				break;
			}
			setState(148);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BUNDLETYPE) {
				{
				setState(147);
				bundle_type();
				}
			}

			setState(151);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BEGINS) {
				{
				setState(150);
				begins_with();
				}
			}

			setState(154);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CONTEXT) {
				{
				setState(153);
				ns_ctx();
				}
			}

			setState(157);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ENDS) {
				{
				setState(156);
				ends_with();
				}
			}

			setState(160);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FILEPATTERN) {
				{
				setState(159);
				file_pattern();
				}
			}

			setState(162);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Namespace_defContext extends ParserRuleContext {
		public TerminalNode DEFINE() { return getToken(SplParser.DEFINE, 0); }
		public TerminalNode NAMESPACE() { return getToken(SplParser.NAMESPACE, 0); }
		public Ns_nameContext ns_name() {
			return getRuleContext(Ns_nameContext.class,0);
		}
		public TerminalNode DESCRIPTION() { return getToken(SplParser.DESCRIPTION, 0); }
		public TerminalNode QUOTED_LABEL() { return getToken(SplParser.QUOTED_LABEL, 0); }
		public Namespace_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namespace_def; }
	}

	public final Namespace_defContext namespace_def() throws RecognitionException {
		Namespace_defContext _localctx = new Namespace_defContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_namespace_def);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(164);
			match(DEFINE);
			setState(165);
			match(NAMESPACE);
			setState(166);
			ns_name();
			setState(167);
			match(DESCRIPTION);
			setState(168);
			match(QUOTED_LABEL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Ns_nameContext extends ParserRuleContext {
		public TerminalNode IDENT() { return getToken(SplParser.IDENT, 0); }
		public TerminalNode IDENT_DOT() { return getToken(SplParser.IDENT_DOT, 0); }
		public Ns_nameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ns_name; }
	}

	public final Ns_nameContext ns_name() throws RecognitionException {
		Ns_nameContext _localctx = new Ns_nameContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_ns_name);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(170);
			_la = _input.LA(1);
			if ( !(_la==IDENT || _la==IDENT_DOT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Ns_type_defContext extends ParserRuleContext {
		public TerminalNode TYPE() { return getToken(SplParser.TYPE, 0); }
		public TerminalNode NS_TYPES() { return getToken(SplParser.NS_TYPES, 0); }
		public TerminalNode REF() { return getToken(SplParser.REF, 0); }
		public Ns_ref_nameContext ns_ref_name() {
			return getRuleContext(Ns_ref_nameContext.class,0);
		}
		public TerminalNode LOCK() { return getToken(SplParser.LOCK, 0); }
		public TerminalNode SOLR() { return getToken(SplParser.SOLR, 0); }
		public TerminalNode XML() { return getToken(SplParser.XML, 0); }
		public TerminalNode JSON() { return getToken(SplParser.JSON, 0); }
		public Ns_type_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ns_type_def; }
	}

	public final Ns_type_defContext ns_type_def() throws RecognitionException {
		Ns_type_defContext _localctx = new Ns_type_defContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_ns_type_def);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(174);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TYPE) {
				{
				setState(172);
				match(TYPE);
				setState(173);
				match(NS_TYPES);
				}
			}

			setState(178);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==REF) {
				{
				setState(176);
				match(REF);
				setState(177);
				ns_ref_name();
				}
			}

			setState(181);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LOCK) {
				{
				setState(180);
				match(LOCK);
				}
			}

			setState(184);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SOLR) {
				{
				setState(183);
				match(SOLR);
				}
			}

			setState(187);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==XML) {
				{
				setState(186);
				match(XML);
				}
			}

			setState(190);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==JSON) {
				{
				setState(189);
				match(JSON);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Ns_ref_nameContext extends ParserRuleContext {
		public TerminalNode IDENT() { return getToken(SplParser.IDENT, 0); }
		public TerminalNode IDENT_DOT() { return getToken(SplParser.IDENT_DOT, 0); }
		public Ns_ref_nameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ns_ref_name; }
	}

	public final Ns_ref_nameContext ns_ref_name() throws RecognitionException {
		Ns_ref_nameContext _localctx = new Ns_ref_nameContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_ns_ref_name);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
			_la = _input.LA(1);
			if ( !(_la==IDENT || _la==IDENT_DOT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Bundle_typeContext extends ParserRuleContext {
		public TerminalNode BUNDLETYPE() { return getToken(SplParser.BUNDLETYPE, 0); }
		public TerminalNode QUOTED_LABEL() { return getToken(SplParser.QUOTED_LABEL, 0); }
		public Bundle_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bundle_type; }
	}

	public final Bundle_typeContext bundle_type() throws RecognitionException {
		Bundle_typeContext _localctx = new Bundle_typeContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_bundle_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(194);
			match(BUNDLETYPE);
			setState(195);
			match(QUOTED_LABEL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Ns_ctxContext extends ParserRuleContext {
		public TerminalNode CONTEXT() { return getToken(SplParser.CONTEXT, 0); }
		public TerminalNode REGEX() { return getToken(SplParser.REGEX, 0); }
		public TerminalNode AS() { return getToken(SplParser.AS, 0); }
		public List<TerminalNode> IDENT() { return getTokens(SplParser.IDENT); }
		public TerminalNode IDENT(int i) {
			return getToken(SplParser.IDENT, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(SplParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(SplParser.COMMA, i);
		}
		public Ns_ctxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ns_ctx; }
	}

	public final Ns_ctxContext ns_ctx() throws RecognitionException {
		Ns_ctxContext _localctx = new Ns_ctxContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_ns_ctx);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(197);
			match(CONTEXT);
			setState(198);
			match(REGEX);
			setState(199);
			match(AS);
			setState(200);
			match(IDENT);
			setState(205);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(201);
				match(COMMA);
				setState(202);
				match(IDENT);
				}
				}
				setState(207);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Begins_withContext extends ParserRuleContext {
		public TerminalNode BEGINS() { return getToken(SplParser.BEGINS, 0); }
		public TerminalNode WITH() { return getToken(SplParser.WITH, 0); }
		public TerminalNode REGEX() { return getToken(SplParser.REGEX, 0); }
		public Begins_withContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_begins_with; }
	}

	public final Begins_withContext begins_with() throws RecognitionException {
		Begins_withContext _localctx = new Begins_withContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_begins_with);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(208);
			match(BEGINS);
			setState(209);
			match(WITH);
			setState(210);
			match(REGEX);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Ends_withContext extends ParserRuleContext {
		public TerminalNode ENDS() { return getToken(SplParser.ENDS, 0); }
		public TerminalNode WITH() { return getToken(SplParser.WITH, 0); }
		public TerminalNode REGEX() { return getToken(SplParser.REGEX, 0); }
		public Ends_withContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ends_with; }
	}

	public final Ends_withContext ends_with() throws RecognitionException {
		Ends_withContext _localctx = new Ends_withContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_ends_with);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(212);
			match(ENDS);
			setState(213);
			match(WITH);
			setState(214);
			match(REGEX);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class File_patternContext extends ParserRuleContext {
		public TerminalNode FILEPATTERN() { return getToken(SplParser.FILEPATTERN, 0); }
		public TerminalNode REGEX() { return getToken(SplParser.REGEX, 0); }
		public File_patternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_file_pattern; }
	}

	public final File_patternContext file_pattern() throws RecognitionException {
		File_patternContext _localctx = new File_patternContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_file_pattern);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(216);
			match(FILEPATTERN);
			setState(217);
			match(REGEX);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TableContext extends ParserRuleContext {
		public Table_defContext table_def() {
			return getRuleContext(Table_defContext.class,0);
		}
		public Icon_defContext icon_def() {
			return getRuleContext(Icon_defContext.class,0);
		}
		public Add_contextContext add_context() {
			return getRuleContext(Add_contextContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(SplParser.SEMICOLON, 0); }
		public Set_xml_nsContext set_xml_ns() {
			return getRuleContext(Set_xml_nsContext.class,0);
		}
		public MultilineContext multiline() {
			return getRuleContext(MultilineContext.class,0);
		}
		public Skip_nContext skip_n() {
			return getRuleContext(Skip_nContext.class,0);
		}
		public List<Column_defContext> column_def() {
			return getRuleContexts(Column_defContext.class);
		}
		public Column_defContext column_def(int i) {
			return getRuleContext(Column_defContext.class,i);
		}
		public List<Col_op_defContext> col_op_def() {
			return getRuleContexts(Col_op_defContext.class);
		}
		public Col_op_defContext col_op_def(int i) {
			return getRuleContext(Col_op_defContext.class,i);
		}
		public ConstrainContext constrain() {
			return getRuleContext(ConstrainContext.class,0);
		}
		public TableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_table; }
	}

	public final TableContext table() throws RecognitionException {
		TableContext _localctx = new TableContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_table);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
			table_def();
			setState(220);
			icon_def();
			setState(222);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SETXMLNAMESPACE) {
				{
				setState(221);
				set_xml_ns();
				}
			}

			setState(225);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MULTILINE) {
				{
				setState(224);
				multiline();
				}
			}

			setState(228);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SKIP_N) {
				{
				setState(227);
				skip_n();
				}
			}

			setState(231); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(230);
				column_def();
				}
				}
				setState(233); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==COLUMN );
			setState(235);
			add_context();
			setState(239);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 52)) & ~0x3f) == 0 && ((1L << (_la - 52)) & ((1L << (COLDROP - 52)) | (1L << (COLFILL - 52)) | (1L << (COLJOIN - 52)) | (1L << (COLCOPY - 52)) | (1L << (COLSPLIT - 52)) | (1L << (COLREP - 52)) | (1L << (COLMAP - 52)) | (1L << (COLCASE - 52)) | (1L << (COLCOUNT - 52)) | (1L << (COLPRINT - 52)) | (1L << (COLCALC_CATCH_ALL - 52)))) != 0)) {
				{
				{
				setState(236);
				col_op_def();
				}
				}
				setState(241);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(243);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CONSTRAIN) {
				{
				setState(242);
				constrain();
				}
			}

			setState(245);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Table_defContext extends ParserRuleContext {
		public TerminalNode DEFINE() { return getToken(SplParser.DEFINE, 0); }
		public TerminalNode TABLE() { return getToken(SplParser.TABLE, 0); }
		public TerminalNode IDENT() { return getToken(SplParser.IDENT, 0); }
		public TerminalNode NAMESPACE() { return getToken(SplParser.NAMESPACE, 0); }
		public Ns_nameContext ns_name() {
			return getRuleContext(Ns_nameContext.class,0);
		}
		public Table_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_table_def; }
	}

	public final Table_defContext table_def() throws RecognitionException {
		Table_defContext _localctx = new Table_defContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_table_def);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(247);
			match(DEFINE);
			setState(248);
			match(TABLE);
			setState(249);
			match(IDENT);
			setState(250);
			match(NAMESPACE);
			setState(251);
			ns_name();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Icon_defContext extends ParserRuleContext {
		public TerminalNode ICON() { return getToken(SplParser.ICON, 0); }
		public List_basic_icon_defContext list_basic_icon_def() {
			return getRuleContext(List_basic_icon_defContext.class,0);
		}
		public Nvpair_icon_defContext nvpair_icon_def() {
			return getRuleContext(Nvpair_icon_defContext.class,0);
		}
		public Aligned_basic_icon_defContext aligned_basic_icon_def() {
			return getRuleContext(Aligned_basic_icon_defContext.class,0);
		}
		public Xml_icon_defContext xml_icon_def() {
			return getRuleContext(Xml_icon_defContext.class,0);
		}
		public Csv_icon_defContext csv_icon_def() {
			return getRuleContext(Csv_icon_defContext.class,0);
		}
		public Icon_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_icon_def; }
	}

	public final Icon_defContext icon_def() throws RecognitionException {
		Icon_defContext _localctx = new Icon_defContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_icon_def);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(253);
			match(ICON);
			setState(259);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LIST_BASIC:
				{
				setState(254);
				list_basic_icon_def();
				}
				break;
			case NV_PAIR:
				{
				setState(255);
				nvpair_icon_def();
				}
				break;
			case ALIGNED_BASIC:
				{
				setState(256);
				aligned_basic_icon_def();
				}
				break;
			case XML_BASIC:
				{
				setState(257);
				xml_icon_def();
				}
				break;
			case CSV_WITHHEADER:
			case CSV_NOHEADER:
				{
				setState(258);
				csv_icon_def();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Csv_icon_defContext extends ParserRuleContext {
		public TerminalNode REGEX() { return getToken(SplParser.REGEX, 0); }
		public TerminalNode CSV_WITHHEADER() { return getToken(SplParser.CSV_WITHHEADER, 0); }
		public TerminalNode CSV_NOHEADER() { return getToken(SplParser.CSV_NOHEADER, 0); }
		public Csv_icon_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_csv_icon_def; }
	}

	public final Csv_icon_defContext csv_icon_def() throws RecognitionException {
		Csv_icon_defContext _localctx = new Csv_icon_defContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_csv_icon_def);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(261);
			_la = _input.LA(1);
			if ( !(_la==CSV_WITHHEADER || _la==CSV_NOHEADER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(262);
			match(REGEX);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class List_basic_icon_defContext extends ParserRuleContext {
		public TerminalNode LIST_BASIC() { return getToken(SplParser.LIST_BASIC, 0); }
		public TerminalNode LINEGRAB() { return getToken(SplParser.LINEGRAB, 0); }
		public TerminalNode REGEX() { return getToken(SplParser.REGEX, 0); }
		public List_basic_icon_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_list_basic_icon_def; }
	}

	public final List_basic_icon_defContext list_basic_icon_def() throws RecognitionException {
		List_basic_icon_defContext _localctx = new List_basic_icon_defContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_list_basic_icon_def);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(264);
			match(LIST_BASIC);
			setState(265);
			match(LINEGRAB);
			setState(266);
			match(REGEX);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Nvpair_icon_defContext extends ParserRuleContext {
		public TerminalNode NV_PAIR() { return getToken(SplParser.NV_PAIR, 0); }
		public List<TerminalNode> REGEX() { return getTokens(SplParser.REGEX); }
		public TerminalNode REGEX(int i) {
			return getToken(SplParser.REGEX, i);
		}
		public Nvpair_icon_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nvpair_icon_def; }
	}

	public final Nvpair_icon_defContext nvpair_icon_def() throws RecognitionException {
		Nvpair_icon_defContext _localctx = new Nvpair_icon_defContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_nvpair_icon_def);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(268);
			match(NV_PAIR);
			setState(269);
			match(REGEX);
			setState(270);
			match(REGEX);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Aligned_basic_icon_defContext extends ParserRuleContext {
		public TerminalNode ALIGNED_BASIC() { return getToken(SplParser.ALIGNED_BASIC, 0); }
		public List<TerminalNode> QUOTED_LABEL() { return getTokens(SplParser.QUOTED_LABEL); }
		public TerminalNode QUOTED_LABEL(int i) {
			return getToken(SplParser.QUOTED_LABEL, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(SplParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(SplParser.COMMA, i);
		}
		public Aligned_basic_icon_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aligned_basic_icon_def; }
	}

	public final Aligned_basic_icon_defContext aligned_basic_icon_def() throws RecognitionException {
		Aligned_basic_icon_defContext _localctx = new Aligned_basic_icon_defContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_aligned_basic_icon_def);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(272);
			match(ALIGNED_BASIC);
			setState(273);
			match(QUOTED_LABEL);
			setState(274);
			match(COMMA);
			setState(275);
			match(QUOTED_LABEL);
			setState(276);
			match(COMMA);
			setState(277);
			match(QUOTED_LABEL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Xml_icon_defContext extends ParserRuleContext {
		public TerminalNode XML_BASIC() { return getToken(SplParser.XML_BASIC, 0); }
		public TerminalNode REGEX() { return getToken(SplParser.REGEX, 0); }
		public Xml_icon_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_xml_icon_def; }
	}

	public final Xml_icon_defContext xml_icon_def() throws RecognitionException {
		Xml_icon_defContext _localctx = new Xml_icon_defContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_xml_icon_def);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(279);
			match(XML_BASIC);
			setState(280);
			match(REGEX);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MultilineContext extends ParserRuleContext {
		public TerminalNode MULTILINE() { return getToken(SplParser.MULTILINE, 0); }
		public TerminalNode REGEX() { return getToken(SplParser.REGEX, 0); }
		public TerminalNode QUOTED_LABEL() { return getToken(SplParser.QUOTED_LABEL, 0); }
		public TerminalNode NOT() { return getToken(SplParser.NOT, 0); }
		public MultilineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multiline; }
	}

	public final MultilineContext multiline() throws RecognitionException {
		MultilineContext _localctx = new MultilineContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_multiline);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(282);
			match(MULTILINE);
			setState(284);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==NOT) {
				{
				setState(283);
				match(NOT);
				}
			}

			setState(286);
			match(REGEX);
			setState(287);
			match(QUOTED_LABEL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Skip_nContext extends ParserRuleContext {
		public TerminalNode SKIP_N() { return getToken(SplParser.SKIP_N, 0); }
		public TerminalNode INT() { return getToken(SplParser.INT, 0); }
		public Skip_nContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_skip_n; }
	}

	public final Skip_nContext skip_n() throws RecognitionException {
		Skip_nContext _localctx = new Skip_nContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_skip_n);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(289);
			match(SKIP_N);
			setState(290);
			match(INT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Set_xml_nsContext extends ParserRuleContext {
		public TerminalNode SETXMLNAMESPACE() { return getToken(SplParser.SETXMLNAMESPACE, 0); }
		public TerminalNode REGEX() { return getToken(SplParser.REGEX, 0); }
		public Set_xml_nsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_set_xml_ns; }
	}

	public final Set_xml_nsContext set_xml_ns() throws RecognitionException {
		Set_xml_nsContext _localctx = new Set_xml_nsContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_set_xml_ns);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(292);
			match(SETXMLNAMESPACE);
			setState(293);
			match(REGEX);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Add_contextContext extends ParserRuleContext {
		public TerminalNode ADD_CONTEXT() { return getToken(SplParser.ADD_CONTEXT, 0); }
		public TerminalNode OPENPARENTHESIS() { return getToken(SplParser.OPENPARENTHESIS, 0); }
		public List<TerminalNode> IDENT() { return getTokens(SplParser.IDENT); }
		public TerminalNode IDENT(int i) {
			return getToken(SplParser.IDENT, i);
		}
		public TerminalNode CLOSEPARENTHESIS() { return getToken(SplParser.CLOSEPARENTHESIS, 0); }
		public List<TerminalNode> COMMA() { return getTokens(SplParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(SplParser.COMMA, i);
		}
		public Add_contextContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_add_context; }
	}

	public final Add_contextContext add_context() throws RecognitionException {
		Add_contextContext _localctx = new Add_contextContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_add_context);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(295);
			match(ADD_CONTEXT);
			setState(296);
			match(OPENPARENTHESIS);
			setState(297);
			match(IDENT);
			setState(302);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(298);
				match(COMMA);
				{
				setState(299);
				match(IDENT);
				}
				}
				}
				setState(304);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(305);
			match(CLOSEPARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstrainContext extends ParserRuleContext {
		public TerminalNode CONSTRAIN() { return getToken(SplParser.CONSTRAIN, 0); }
		public TerminalNode OPENPARENTHESIS() { return getToken(SplParser.OPENPARENTHESIS, 0); }
		public TerminalNode CLOSEPARENTHESIS() { return getToken(SplParser.CLOSEPARENTHESIS, 0); }
		public List<TerminalNode> IDENT() { return getTokens(SplParser.IDENT); }
		public TerminalNode IDENT(int i) {
			return getToken(SplParser.IDENT, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(SplParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(SplParser.COMMA, i);
		}
		public ConstrainContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constrain; }
	}

	public final ConstrainContext constrain() throws RecognitionException {
		ConstrainContext _localctx = new ConstrainContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_constrain);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(307);
			match(CONSTRAIN);
			setState(308);
			match(OPENPARENTHESIS);
			setState(317);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENT) {
				{
				setState(309);
				match(IDENT);
				setState(314);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(310);
					match(COMMA);
					{
					setState(311);
					match(IDENT);
					}
					}
					}
					setState(316);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(319);
			match(CLOSEPARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Column_defContext extends ParserRuleContext {
		public TerminalNode COLUMN() { return getToken(SplParser.COLUMN, 0); }
		public TerminalNode IDENT() { return getToken(SplParser.IDENT, 0); }
		public Data_typeContext data_type() {
			return getRuleContext(Data_typeContext.class,0);
		}
		public Obj_refContext obj_ref() {
			return getRuleContext(Obj_refContext.class,0);
		}
		public Label_defContext label_def() {
			return getRuleContext(Label_defContext.class,0);
		}
		public As_defContext as_def() {
			return getRuleContext(As_defContext.class,0);
		}
		public AlignmentContext alignment() {
			return getRuleContext(AlignmentContext.class,0);
		}
		public With_name_defContext with_name_def() {
			return getRuleContext(With_name_defContext.class,0);
		}
		public Solr_mappingContext solr_mapping() {
			return getRuleContext(Solr_mappingContext.class,0);
		}
		public Column_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_column_def; }
	}

	public final Column_defContext column_def() throws RecognitionException {
		Column_defContext _localctx = new Column_defContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_column_def);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(321);
			match(COLUMN);
			setState(322);
			match(IDENT);
			setState(324);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPENPARENTHESIS) {
				{
				setState(323);
				obj_ref();
				}
			}

			setState(326);
			data_type();
			setState(328);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LT) {
				{
				setState(327);
				label_def();
				}
			}

			setState(331);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AS) {
				{
				setState(330);
				as_def();
				}
			}

			setState(334);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 105)) & ~0x3f) == 0 && ((1L << (_la - 105)) & ((1L << (ALIGNED_BASIC_L - 105)) | (1L << (ALIGNED_BASIC_R - 105)) | (1L << (ALIGNED_BASIC_C - 105)))) != 0)) {
				{
				setState(333);
				alignment();
				}
			}

			setState(337);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WITH_NAME) {
				{
				setState(336);
				with_name_def();
				}
			}

			setState(340);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WITH) {
				{
				setState(339);
				solr_mapping();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Obj_refContext extends ParserRuleContext {
		public TerminalNode OPENPARENTHESIS() { return getToken(SplParser.OPENPARENTHESIS, 0); }
		public TerminalNode IDENT_DOT() { return getToken(SplParser.IDENT_DOT, 0); }
		public TerminalNode CLOSEPARENTHESIS() { return getToken(SplParser.CLOSEPARENTHESIS, 0); }
		public TerminalNode COLON() { return getToken(SplParser.COLON, 0); }
		public TerminalNode IDENT() { return getToken(SplParser.IDENT, 0); }
		public Obj_refContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_obj_ref; }
	}

	public final Obj_refContext obj_ref() throws RecognitionException {
		Obj_refContext _localctx = new Obj_refContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_obj_ref);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(342);
			match(OPENPARENTHESIS);
			setState(343);
			match(IDENT_DOT);
			setState(346);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(344);
				match(COLON);
				setState(345);
				match(IDENT);
				}
			}

			setState(348);
			match(CLOSEPARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Data_typeContext extends ParserRuleContext {
		public TerminalNode OPENSQUARE() { return getToken(SplParser.OPENSQUARE, 0); }
		public TerminalNode DT() { return getToken(SplParser.DT, 0); }
		public TerminalNode OPENPARENTHESIS() { return getToken(SplParser.OPENPARENTHESIS, 0); }
		public TerminalNode INT() { return getToken(SplParser.INT, 0); }
		public TerminalNode CLOSEPARENTHESIS() { return getToken(SplParser.CLOSEPARENTHESIS, 0); }
		public List<TerminalNode> COLON() { return getTokens(SplParser.COLON); }
		public TerminalNode COLON(int i) {
			return getToken(SplParser.COLON, i);
		}
		public TerminalNode NULL_DEF() { return getToken(SplParser.NULL_DEF, 0); }
		public TerminalNode CLOSESQUARE() { return getToken(SplParser.CLOSESQUARE, 0); }
		public TerminalNode QUOTED_LABEL() { return getToken(SplParser.QUOTED_LABEL, 0); }
		public Data_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_data_type; }
	}

	public final Data_typeContext data_type() throws RecognitionException {
		Data_typeContext _localctx = new Data_typeContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_data_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(350);
			match(OPENSQUARE);
			setState(351);
			match(DT);
			setState(352);
			match(OPENPARENTHESIS);
			setState(353);
			match(INT);
			setState(354);
			match(CLOSEPARENTHESIS);
			setState(355);
			match(COLON);
			setState(356);
			match(NULL_DEF);
			setState(359);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(357);
				match(COLON);
				setState(358);
				match(QUOTED_LABEL);
				}
			}

			setState(361);
			match(CLOSESQUARE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Label_defContext extends ParserRuleContext {
		public TerminalNode LT() { return getToken(SplParser.LT, 0); }
		public List<Attrib_defContext> attrib_def() {
			return getRuleContexts(Attrib_defContext.class);
		}
		public Attrib_defContext attrib_def(int i) {
			return getRuleContext(Attrib_defContext.class,i);
		}
		public TerminalNode GT() { return getToken(SplParser.GT, 0); }
		public List<TerminalNode> COMMA() { return getTokens(SplParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(SplParser.COMMA, i);
		}
		public Label_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_label_def; }
	}

	public final Label_defContext label_def() throws RecognitionException {
		Label_defContext _localctx = new Label_defContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_label_def);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(363);
			match(LT);
			setState(364);
			attrib_def();
			setState(369);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(365);
				match(COMMA);
				setState(366);
				attrib_def();
				}
				}
				setState(371);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(372);
			match(GT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Attrib_defContext extends ParserRuleContext {
		public Colmeta_attrib_nameContext colmeta_attrib_name() {
			return getRuleContext(Colmeta_attrib_nameContext.class,0);
		}
		public Colmeta_attrib_valueContext colmeta_attrib_value() {
			return getRuleContext(Colmeta_attrib_valueContext.class,0);
		}
		public Attrib_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attrib_def; }
	}

	public final Attrib_defContext attrib_def() throws RecognitionException {
		Attrib_defContext _localctx = new Attrib_defContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_attrib_def);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(374);
			colmeta_attrib_name();
			setState(375);
			colmeta_attrib_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Colmeta_attrib_nameContext extends ParserRuleContext {
		public TerminalNode COLMETA_LABEL() { return getToken(SplParser.COLMETA_LABEL, 0); }
		public TerminalNode COLMETA_SYSID1() { return getToken(SplParser.COLMETA_SYSID1, 0); }
		public TerminalNode COLMETA_SYSID2() { return getToken(SplParser.COLMETA_SYSID2, 0); }
		public TerminalNode COLMETA_SYSID3() { return getToken(SplParser.COLMETA_SYSID3, 0); }
		public TerminalNode COLMETA_SESSID1() { return getToken(SplParser.COLMETA_SESSID1, 0); }
		public TerminalNode COLMETA_SESSID2() { return getToken(SplParser.COLMETA_SESSID2, 0); }
		public TerminalNode COLMETA_SESSID3() { return getToken(SplParser.COLMETA_SESSID3, 0); }
		public TerminalNode COLMETA_SESS_NAME() { return getToken(SplParser.COLMETA_SESS_NAME, 0); }
		public TerminalNode COLMETA_SESS_ATTR() { return getToken(SplParser.COLMETA_SESS_ATTR, 0); }
		public TerminalNode COLMETA_SESS_COUNT() { return getToken(SplParser.COLMETA_SESS_COUNT, 0); }
		public TerminalNode COLMETA_FILENAME() { return getToken(SplParser.COLMETA_FILENAME, 0); }
		public TerminalNode COLMETA_CONTENT() { return getToken(SplParser.COLMETA_CONTENT, 0); }
		public TerminalNode COLMETA_FRAGMENT_ID() { return getToken(SplParser.COLMETA_FRAGMENT_ID, 0); }
		public TerminalNode COLMETA_OBSURL() { return getToken(SplParser.COLMETA_OBSURL, 0); }
		public TerminalNode COLMETA_OBSSIZE() { return getToken(SplParser.COLMETA_OBSSIZE, 0); }
		public TerminalNode COLMETA_UPLOADEDBY() { return getToken(SplParser.COLMETA_UPLOADEDBY, 0); }
		public TerminalNode COLMETA_FACET() { return getToken(SplParser.COLMETA_FACET, 0); }
		public TerminalNode COLMETA_SEVERITY() { return getToken(SplParser.COLMETA_SEVERITY, 0); }
		public TerminalNode COLMETA_UNITS() { return getToken(SplParser.COLMETA_UNITS, 0); }
		public TerminalNode COLMETA_BEGIN_OFFSET() { return getToken(SplParser.COLMETA_BEGIN_OFFSET, 0); }
		public TerminalNode COLMETA_NAMESPACE() { return getToken(SplParser.COLMETA_NAMESPACE, 0); }
		public TerminalNode COLMETA_TYPE() { return getToken(SplParser.COLMETA_TYPE, 0); }
		public TerminalNode COLMETA_TS() { return getToken(SplParser.COLMETA_TS, 0); }
		public TerminalNode COLMETA_LINKED() { return getToken(SplParser.COLMETA_LINKED, 0); }
		public Colmeta_attrib_nameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colmeta_attrib_name; }
	}

	public final Colmeta_attrib_nameContext colmeta_attrib_name() throws RecognitionException {
		Colmeta_attrib_nameContext _localctx = new Colmeta_attrib_nameContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_colmeta_attrib_name);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(402);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case COLMETA_LABEL:
				{
				setState(377);
				match(COLMETA_LABEL);
				}
				break;
			case COLMETA_SYSID1:
				{
				setState(378);
				match(COLMETA_SYSID1);
				}
				break;
			case COLMETA_SYSID2:
				{
				setState(379);
				match(COLMETA_SYSID2);
				}
				break;
			case COLMETA_SYSID3:
				{
				setState(380);
				match(COLMETA_SYSID3);
				}
				break;
			case COLMETA_SESSID1:
				{
				setState(381);
				match(COLMETA_SESSID1);
				}
				break;
			case COLMETA_SESSID2:
				{
				setState(382);
				match(COLMETA_SESSID2);
				}
				break;
			case COLMETA_SESSID3:
				{
				setState(383);
				match(COLMETA_SESSID3);
				}
				break;
			case COLMETA_SESS_NAME:
				{
				setState(384);
				match(COLMETA_SESS_NAME);
				}
				break;
			case COLMETA_SESS_ATTR:
				{
				setState(385);
				match(COLMETA_SESS_ATTR);
				}
				break;
			case COLMETA_SESS_COUNT:
				{
				setState(386);
				match(COLMETA_SESS_COUNT);
				}
				break;
			case COLMETA_FILENAME:
				{
				setState(387);
				match(COLMETA_FILENAME);
				}
				break;
			case COLMETA_CONTENT:
				{
				setState(388);
				match(COLMETA_CONTENT);
				}
				break;
			case COLMETA_FRAGMENT_ID:
				{
				setState(389);
				match(COLMETA_FRAGMENT_ID);
				}
				break;
			case COLMETA_OBSURL:
				{
				setState(390);
				match(COLMETA_OBSURL);
				}
				break;
			case COLMETA_OBSSIZE:
				{
				setState(391);
				match(COLMETA_OBSSIZE);
				}
				break;
			case COLMETA_UPLOADEDBY:
				{
				setState(392);
				match(COLMETA_UPLOADEDBY);
				}
				break;
			case COLMETA_FACET:
				{
				setState(393);
				match(COLMETA_FACET);
				}
				break;
			case COLMETA_SEVERITY:
				{
				setState(394);
				match(COLMETA_SEVERITY);
				}
				break;
			case COLMETA_UNITS:
				{
				setState(395);
				match(COLMETA_UNITS);
				}
				break;
			case COLMETA_BEGIN_OFFSET:
				{
				setState(396);
				match(COLMETA_BEGIN_OFFSET);
				}
				break;
			case COLMETA_NAMESPACE:
				{
				setState(397);
				match(COLMETA_NAMESPACE);
				}
				break;
			case COLMETA_TYPE:
				{
				setState(398);
				match(COLMETA_TYPE);
				}
				break;
			case COLMETA_TS:
				{
				setState(399);
				match(COLMETA_TS);
				}
				break;
			case COLMETA_LINKED:
				{
				setState(400);
				match(COLMETA_LINKED);
				}
				break;
			case INT:
			case QUOTED_LABEL:
			case IDENT:
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Colmeta_attrib_valueContext extends ParserRuleContext {
		public TerminalNode QUOTED_LABEL() { return getToken(SplParser.QUOTED_LABEL, 0); }
		public TerminalNode IDENT() { return getToken(SplParser.IDENT, 0); }
		public TerminalNode INT() { return getToken(SplParser.INT, 0); }
		public Colmeta_attrib_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colmeta_attrib_value; }
	}

	public final Colmeta_attrib_valueContext colmeta_attrib_value() throws RecognitionException {
		Colmeta_attrib_valueContext _localctx = new Colmeta_attrib_valueContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_colmeta_attrib_value);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(404);
			_la = _input.LA(1);
			if ( !(((((_la - 68)) & ~0x3f) == 0 && ((1L << (_la - 68)) & ((1L << (INT - 68)) | (1L << (QUOTED_LABEL - 68)) | (1L << (IDENT - 68)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class As_defContext extends ParserRuleContext {
		public TerminalNode AS() { return getToken(SplParser.AS, 0); }
		public TerminalNode INT() { return getToken(SplParser.INT, 0); }
		public TerminalNode QUOTED_LABEL() { return getToken(SplParser.QUOTED_LABEL, 0); }
		public As_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_as_def; }
	}

	public final As_defContext as_def() throws RecognitionException {
		As_defContext _localctx = new As_defContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_as_def);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(406);
			match(AS);
			setState(407);
			_la = _input.LA(1);
			if ( !(_la==INT || _la==QUOTED_LABEL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class With_name_defContext extends ParserRuleContext {
		public TerminalNode WITH_NAME() { return getToken(SplParser.WITH_NAME, 0); }
		public TerminalNode QUOTED_LABEL() { return getToken(SplParser.QUOTED_LABEL, 0); }
		public With_name_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_with_name_def; }
	}

	public final With_name_defContext with_name_def() throws RecognitionException {
		With_name_defContext _localctx = new With_name_defContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_with_name_def);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(409);
			match(WITH_NAME);
			setState(410);
			match(QUOTED_LABEL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Solr_mappingContext extends ParserRuleContext {
		public TerminalNode WITH() { return getToken(SplParser.WITH, 0); }
		public TerminalNode SOLRMAPPING() { return getToken(SplParser.SOLRMAPPING, 0); }
		public TerminalNode OPENPARENTHESIS() { return getToken(SplParser.OPENPARENTHESIS, 0); }
		public List<Solr_mapping_defContext> solr_mapping_def() {
			return getRuleContexts(Solr_mapping_defContext.class);
		}
		public Solr_mapping_defContext solr_mapping_def(int i) {
			return getRuleContext(Solr_mapping_defContext.class,i);
		}
		public TerminalNode CLOSEPARENTHESIS() { return getToken(SplParser.CLOSEPARENTHESIS, 0); }
		public List<TerminalNode> COMMA() { return getTokens(SplParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(SplParser.COMMA, i);
		}
		public Solr_mappingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_solr_mapping; }
	}

	public final Solr_mappingContext solr_mapping() throws RecognitionException {
		Solr_mappingContext _localctx = new Solr_mappingContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_solr_mapping);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(412);
			match(WITH);
			setState(413);
			match(SOLRMAPPING);
			setState(414);
			match(OPENPARENTHESIS);
			setState(415);
			solr_mapping_def();
			setState(420);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(416);
				match(COMMA);
				setState(417);
				solr_mapping_def();
				}
				}
				setState(422);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(423);
			match(CLOSEPARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Solr_mapping_defContext extends ParserRuleContext {
		public Solr_mapping_attr_nameContext solr_mapping_attr_name() {
			return getRuleContext(Solr_mapping_attr_nameContext.class,0);
		}
		public Solr_mapping_attr_valueContext solr_mapping_attr_value() {
			return getRuleContext(Solr_mapping_attr_valueContext.class,0);
		}
		public Solr_mapping_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_solr_mapping_def; }
	}

	public final Solr_mapping_defContext solr_mapping_def() throws RecognitionException {
		Solr_mapping_defContext _localctx = new Solr_mapping_defContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_solr_mapping_def);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(425);
			solr_mapping_attr_name();
			setState(426);
			solr_mapping_attr_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Solr_mapping_attr_nameContext extends ParserRuleContext {
		public TerminalNode SOLRMAPPING_NAME() { return getToken(SplParser.SOLRMAPPING_NAME, 0); }
		public TerminalNode SOLRMAPPING_DATATYPE() { return getToken(SplParser.SOLRMAPPING_DATATYPE, 0); }
		public TerminalNode SOLRMAPPING_UNIQFLDEF() { return getToken(SplParser.SOLRMAPPING_UNIQFLDEF, 0); }
		public TerminalNode SOLRMAPPING_MULTIVALUED() { return getToken(SplParser.SOLRMAPPING_MULTIVALUED, 0); }
		public TerminalNode SOLRMAPPING_OMITNORMS() { return getToken(SplParser.SOLRMAPPING_OMITNORMS, 0); }
		public TerminalNode SOLRMAPPING_STORETV() { return getToken(SplParser.SOLRMAPPING_STORETV, 0); }
		public TerminalNode SOLRMAPPING_STORETP() { return getToken(SplParser.SOLRMAPPING_STORETP, 0); }
		public TerminalNode SOLRMAPPING_STORETO() { return getToken(SplParser.SOLRMAPPING_STORETO, 0); }
		public Solr_mapping_attr_nameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_solr_mapping_attr_name; }
	}

	public final Solr_mapping_attr_nameContext solr_mapping_attr_name() throws RecognitionException {
		Solr_mapping_attr_nameContext _localctx = new Solr_mapping_attr_nameContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_solr_mapping_attr_name);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(428);
			_la = _input.LA(1);
			if ( !(((((_la - 73)) & ~0x3f) == 0 && ((1L << (_la - 73)) & ((1L << (SOLRMAPPING_NAME - 73)) | (1L << (SOLRMAPPING_DATATYPE - 73)) | (1L << (SOLRMAPPING_MULTIVALUED - 73)) | (1L << (SOLRMAPPING_UNIQFLDEF - 73)) | (1L << (SOLRMAPPING_OMITNORMS - 73)) | (1L << (SOLRMAPPING_STORETV - 73)) | (1L << (SOLRMAPPING_STORETP - 73)) | (1L << (SOLRMAPPING_STORETO - 73)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Solr_mapping_attr_valueContext extends ParserRuleContext {
		public TerminalNode QUOTED_LABEL() { return getToken(SplParser.QUOTED_LABEL, 0); }
		public TerminalNode IDENT() { return getToken(SplParser.IDENT, 0); }
		public TerminalNode INT() { return getToken(SplParser.INT, 0); }
		public Solr_mapping_attr_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_solr_mapping_attr_value; }
	}

	public final Solr_mapping_attr_valueContext solr_mapping_attr_value() throws RecognitionException {
		Solr_mapping_attr_valueContext _localctx = new Solr_mapping_attr_valueContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_solr_mapping_attr_value);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(430);
			_la = _input.LA(1);
			if ( !(((((_la - 68)) & ~0x3f) == 0 && ((1L << (_la - 68)) & ((1L << (INT - 68)) | (1L << (QUOTED_LABEL - 68)) | (1L << (IDENT - 68)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlignmentContext extends ParserRuleContext {
		public TerminalNode ALIGNED_BASIC_L() { return getToken(SplParser.ALIGNED_BASIC_L, 0); }
		public TerminalNode ALIGNED_BASIC_R() { return getToken(SplParser.ALIGNED_BASIC_R, 0); }
		public TerminalNode ALIGNED_BASIC_C() { return getToken(SplParser.ALIGNED_BASIC_C, 0); }
		public AlignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alignment; }
	}

	public final AlignmentContext alignment() throws RecognitionException {
		AlignmentContext _localctx = new AlignmentContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_alignment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(432);
			_la = _input.LA(1);
			if ( !(((((_la - 105)) & ~0x3f) == 0 && ((1L << (_la - 105)) & ((1L << (ALIGNED_BASIC_L - 105)) | (1L << (ALIGNED_BASIC_R - 105)) | (1L << (ALIGNED_BASIC_C - 105)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Generic_colop_defContext extends ParserRuleContext {
		public List<TerminalNode> IDENT() { return getTokens(SplParser.IDENT); }
		public TerminalNode IDENT(int i) {
			return getToken(SplParser.IDENT, i);
		}
		public TerminalNode OPENPARENTHESIS() { return getToken(SplParser.OPENPARENTHESIS, 0); }
		public TerminalNode CLOSEPARENTHESIS() { return getToken(SplParser.CLOSEPARENTHESIS, 0); }
		public List<TerminalNode> COMMA() { return getTokens(SplParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(SplParser.COMMA, i);
		}
		public List<TerminalNode> QUOTED_LABEL() { return getTokens(SplParser.QUOTED_LABEL); }
		public TerminalNode QUOTED_LABEL(int i) {
			return getToken(SplParser.QUOTED_LABEL, i);
		}
		public Generic_colop_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_generic_colop_def; }
	}

	public final Generic_colop_defContext generic_colop_def() throws RecognitionException {
		Generic_colop_defContext _localctx = new Generic_colop_defContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_generic_colop_def);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(434);
			match(IDENT);
			setState(435);
			match(OPENPARENTHESIS);
			setState(436);
			match(IDENT);
			setState(439); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(437);
				match(COMMA);
				setState(438);
				_la = _input.LA(1);
				if ( !(_la==QUOTED_LABEL || _la==IDENT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(441); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==COMMA );
			setState(443);
			match(CLOSEPARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Col_op_defContext extends ParserRuleContext {
		public ColcopyContext colcopy() {
			return getRuleContext(ColcopyContext.class,0);
		}
		public ColcountContext colcount() {
			return getRuleContext(ColcountContext.class,0);
		}
		public ColjoinContext coljoin() {
			return getRuleContext(ColjoinContext.class,0);
		}
		public ColcalcContext colcalc() {
			return getRuleContext(ColcalcContext.class,0);
		}
		public ColsplitContext colsplit() {
			return getRuleContext(ColsplitContext.class,0);
		}
		public ColrepContext colrep() {
			return getRuleContext(ColrepContext.class,0);
		}
		public ColfillContext colfill() {
			return getRuleContext(ColfillContext.class,0);
		}
		public ColmapContext colmap() {
			return getRuleContext(ColmapContext.class,0);
		}
		public ColdropContext coldrop() {
			return getRuleContext(ColdropContext.class,0);
		}
		public ColprintContext colprint() {
			return getRuleContext(ColprintContext.class,0);
		}
		public ColcaseContext colcase() {
			return getRuleContext(ColcaseContext.class,0);
		}
		public Col_op_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_col_op_def; }
	}

	public final Col_op_defContext col_op_def() throws RecognitionException {
		Col_op_defContext _localctx = new Col_op_defContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_col_op_def);
		try {
			setState(456);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case COLCOPY:
				enterOuterAlt(_localctx, 1);
				{
				setState(445);
				colcopy();
				}
				break;
			case COLCOUNT:
				enterOuterAlt(_localctx, 2);
				{
				setState(446);
				colcount();
				}
				break;
			case COLJOIN:
				enterOuterAlt(_localctx, 3);
				{
				setState(447);
				coljoin();
				}
				break;
			case COLCALC_CATCH_ALL:
				enterOuterAlt(_localctx, 4);
				{
				setState(448);
				colcalc();
				}
				break;
			case COLSPLIT:
				enterOuterAlt(_localctx, 5);
				{
				setState(449);
				colsplit();
				}
				break;
			case COLREP:
				enterOuterAlt(_localctx, 6);
				{
				setState(450);
				colrep();
				}
				break;
			case COLFILL:
				enterOuterAlt(_localctx, 7);
				{
				setState(451);
				colfill();
				}
				break;
			case COLMAP:
				enterOuterAlt(_localctx, 8);
				{
				setState(452);
				colmap();
				}
				break;
			case COLDROP:
				enterOuterAlt(_localctx, 9);
				{
				setState(453);
				coldrop();
				}
				break;
			case COLPRINT:
				enterOuterAlt(_localctx, 10);
				{
				setState(454);
				colprint();
				}
				break;
			case COLCASE:
				enterOuterAlt(_localctx, 11);
				{
				setState(455);
				colcase();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColcopyContext extends ParserRuleContext {
		public TerminalNode COLCOPY() { return getToken(SplParser.COLCOPY, 0); }
		public TerminalNode OPENPARENTHESIS() { return getToken(SplParser.OPENPARENTHESIS, 0); }
		public Colcopy_paramContext colcopy_param() {
			return getRuleContext(Colcopy_paramContext.class,0);
		}
		public TerminalNode CLOSEPARENTHESIS() { return getToken(SplParser.CLOSEPARENTHESIS, 0); }
		public ColcopyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colcopy; }
	}

	public final ColcopyContext colcopy() throws RecognitionException {
		ColcopyContext _localctx = new ColcopyContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_colcopy);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(458);
			match(COLCOPY);
			setState(459);
			match(OPENPARENTHESIS);
			setState(460);
			colcopy_param();
			setState(461);
			match(CLOSEPARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Colcopy_paramContext extends ParserRuleContext {
		public TerminalNode COMMA() { return getToken(SplParser.COMMA, 0); }
		public List<TerminalNode> IDENT() { return getTokens(SplParser.IDENT); }
		public TerminalNode IDENT(int i) {
			return getToken(SplParser.IDENT, i);
		}
		public TerminalNode QUOTED_LABEL() { return getToken(SplParser.QUOTED_LABEL, 0); }
		public Colcopy_paramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colcopy_param; }
	}

	public final Colcopy_paramContext colcopy_param() throws RecognitionException {
		Colcopy_paramContext _localctx = new Colcopy_paramContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_colcopy_param);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(463);
			_la = _input.LA(1);
			if ( !(_la==QUOTED_LABEL || _la==IDENT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(464);
			match(COMMA);
			setState(465);
			match(IDENT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColjoinContext extends ParserRuleContext {
		public TerminalNode COLJOIN() { return getToken(SplParser.COLJOIN, 0); }
		public TerminalNode OPENPARENTHESIS() { return getToken(SplParser.OPENPARENTHESIS, 0); }
		public Coljoin_paramContext coljoin_param() {
			return getRuleContext(Coljoin_paramContext.class,0);
		}
		public TerminalNode CLOSEPARENTHESIS() { return getToken(SplParser.CLOSEPARENTHESIS, 0); }
		public ColjoinContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_coljoin; }
	}

	public final ColjoinContext coljoin() throws RecognitionException {
		ColjoinContext _localctx = new ColjoinContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_coljoin);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(467);
			match(COLJOIN);
			setState(468);
			match(OPENPARENTHESIS);
			setState(469);
			coljoin_param();
			setState(470);
			match(CLOSEPARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Coljoin_paramContext extends ParserRuleContext {
		public List<TerminalNode> IDENT() { return getTokens(SplParser.IDENT); }
		public TerminalNode IDENT(int i) {
			return getToken(SplParser.IDENT, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(SplParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(SplParser.COMMA, i);
		}
		public List<TerminalNode> QUOTED_LABEL() { return getTokens(SplParser.QUOTED_LABEL); }
		public TerminalNode QUOTED_LABEL(int i) {
			return getToken(SplParser.QUOTED_LABEL, i);
		}
		public Coljoin_paramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_coljoin_param; }
	}

	public final Coljoin_paramContext coljoin_param() throws RecognitionException {
		Coljoin_paramContext _localctx = new Coljoin_paramContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_coljoin_param);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(472);
			match(IDENT);
			setState(475); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(473);
				match(COMMA);
				setState(474);
				_la = _input.LA(1);
				if ( !(_la==QUOTED_LABEL || _la==IDENT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(477); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==COMMA );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColsplitContext extends ParserRuleContext {
		public TerminalNode COLSPLIT() { return getToken(SplParser.COLSPLIT, 0); }
		public TerminalNode OPENPARENTHESIS() { return getToken(SplParser.OPENPARENTHESIS, 0); }
		public Colsplit_paramContext colsplit_param() {
			return getRuleContext(Colsplit_paramContext.class,0);
		}
		public TerminalNode CLOSEPARENTHESIS() { return getToken(SplParser.CLOSEPARENTHESIS, 0); }
		public ColsplitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colsplit; }
	}

	public final ColsplitContext colsplit() throws RecognitionException {
		ColsplitContext _localctx = new ColsplitContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_colsplit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(479);
			match(COLSPLIT);
			setState(480);
			match(OPENPARENTHESIS);
			setState(481);
			colsplit_param();
			setState(482);
			match(CLOSEPARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Colsplit_paramContext extends ParserRuleContext {
		public List<TerminalNode> IDENT() { return getTokens(SplParser.IDENT); }
		public TerminalNode IDENT(int i) {
			return getToken(SplParser.IDENT, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(SplParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(SplParser.COMMA, i);
		}
		public TerminalNode REGEX() { return getToken(SplParser.REGEX, 0); }
		public Colsplit_paramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colsplit_param; }
	}

	public final Colsplit_paramContext colsplit_param() throws RecognitionException {
		Colsplit_paramContext _localctx = new Colsplit_paramContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_colsplit_param);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(484);
			match(IDENT);
			setState(485);
			match(COMMA);
			setState(486);
			match(REGEX);
			setState(489); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(487);
				match(COMMA);
				{
				setState(488);
				match(IDENT);
				}
				}
				}
				setState(491); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==COMMA );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColrepContext extends ParserRuleContext {
		public TerminalNode COLREP() { return getToken(SplParser.COLREP, 0); }
		public TerminalNode OPENPARENTHESIS() { return getToken(SplParser.OPENPARENTHESIS, 0); }
		public Colrep_paramContext colrep_param() {
			return getRuleContext(Colrep_paramContext.class,0);
		}
		public TerminalNode CLOSEPARENTHESIS() { return getToken(SplParser.CLOSEPARENTHESIS, 0); }
		public ColrepContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colrep; }
	}

	public final ColrepContext colrep() throws RecognitionException {
		ColrepContext _localctx = new ColrepContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_colrep);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(493);
			match(COLREP);
			setState(494);
			match(OPENPARENTHESIS);
			setState(495);
			colrep_param();
			setState(496);
			match(CLOSEPARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Colrep_paramContext extends ParserRuleContext {
		public TerminalNode REGEX() { return getToken(SplParser.REGEX, 0); }
		public List<TerminalNode> COMMA() { return getTokens(SplParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(SplParser.COMMA, i);
		}
		public List<TerminalNode> IDENT() { return getTokens(SplParser.IDENT); }
		public TerminalNode IDENT(int i) {
			return getToken(SplParser.IDENT, i);
		}
		public TerminalNode QUOTED_LABEL() { return getToken(SplParser.QUOTED_LABEL, 0); }
		public Colrep_paramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colrep_param; }
	}

	public final Colrep_paramContext colrep_param() throws RecognitionException {
		Colrep_paramContext _localctx = new Colrep_paramContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_colrep_param);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(498);
			match(REGEX);
			setState(499);
			match(COMMA);
			setState(500);
			_la = _input.LA(1);
			if ( !(_la==QUOTED_LABEL || _la==IDENT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(501);
			match(COMMA);
			setState(502);
			match(IDENT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColfillContext extends ParserRuleContext {
		public TerminalNode COLFILL() { return getToken(SplParser.COLFILL, 0); }
		public TerminalNode OPENPARENTHESIS() { return getToken(SplParser.OPENPARENTHESIS, 0); }
		public Colfill_paramContext colfill_param() {
			return getRuleContext(Colfill_paramContext.class,0);
		}
		public TerminalNode CLOSEPARENTHESIS() { return getToken(SplParser.CLOSEPARENTHESIS, 0); }
		public ColfillContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colfill; }
	}

	public final ColfillContext colfill() throws RecognitionException {
		ColfillContext _localctx = new ColfillContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_colfill);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(504);
			match(COLFILL);
			setState(505);
			match(OPENPARENTHESIS);
			setState(506);
			colfill_param();
			setState(507);
			match(CLOSEPARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Colfill_paramContext extends ParserRuleContext {
		public TerminalNode IDENT() { return getToken(SplParser.IDENT, 0); }
		public Colfill_paramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colfill_param; }
	}

	public final Colfill_paramContext colfill_param() throws RecognitionException {
		Colfill_paramContext _localctx = new Colfill_paramContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_colfill_param);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(509);
			match(IDENT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColmapContext extends ParserRuleContext {
		public TerminalNode COLMAP() { return getToken(SplParser.COLMAP, 0); }
		public TerminalNode OPENPARENTHESIS() { return getToken(SplParser.OPENPARENTHESIS, 0); }
		public Colmap_paramContext colmap_param() {
			return getRuleContext(Colmap_paramContext.class,0);
		}
		public TerminalNode CLOSEPARENTHESIS() { return getToken(SplParser.CLOSEPARENTHESIS, 0); }
		public ColmapContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colmap; }
	}

	public final ColmapContext colmap() throws RecognitionException {
		ColmapContext _localctx = new ColmapContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_colmap);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(511);
			match(COLMAP);
			setState(512);
			match(OPENPARENTHESIS);
			setState(513);
			colmap_param();
			setState(514);
			match(CLOSEPARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Colmap_paramContext extends ParserRuleContext {
		public List<TerminalNode> IDENT() { return getTokens(SplParser.IDENT); }
		public TerminalNode IDENT(int i) {
			return getToken(SplParser.IDENT, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(SplParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(SplParser.COMMA, i);
		}
		public TerminalNode REGEX() { return getToken(SplParser.REGEX, 0); }
		public List<TerminalNode> QUOTED_LABEL() { return getTokens(SplParser.QUOTED_LABEL); }
		public TerminalNode QUOTED_LABEL(int i) {
			return getToken(SplParser.QUOTED_LABEL, i);
		}
		public List<TerminalNode> ZERO() { return getTokens(SplParser.ZERO); }
		public TerminalNode ZERO(int i) {
			return getToken(SplParser.ZERO, i);
		}
		public List<TerminalNode> INT() { return getTokens(SplParser.INT); }
		public TerminalNode INT(int i) {
			return getToken(SplParser.INT, i);
		}
		public Colmap_paramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colmap_param; }
	}

	public final Colmap_paramContext colmap_param() throws RecognitionException {
		Colmap_paramContext _localctx = new Colmap_paramContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_colmap_param);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(516);
			match(IDENT);
			setState(517);
			match(COMMA);
			setState(518);
			match(IDENT);
			setState(519);
			match(COMMA);
			setState(520);
			_la = _input.LA(1);
			if ( !(_la==REGEX || _la==QUOTED_LABEL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(523); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(521);
				match(COMMA);
				setState(522);
				_la = _input.LA(1);
				if ( !(((((_la - 68)) & ~0x3f) == 0 && ((1L << (_la - 68)) & ((1L << (INT - 68)) | (1L << (QUOTED_LABEL - 68)) | (1L << (IDENT - 68)) | (1L << (ZERO - 68)))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(525); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==COMMA );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColcalcContext extends ParserRuleContext {
		public TerminalNode COLCALC_CATCH_ALL() { return getToken(SplParser.COLCALC_CATCH_ALL, 0); }
		public ColcalcContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colcalc; }
	}

	public final ColcalcContext colcalc() throws RecognitionException {
		ColcalcContext _localctx = new ColcalcContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_colcalc);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(527);
			match(COLCALC_CATCH_ALL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColcountContext extends ParserRuleContext {
		public TerminalNode COLCOUNT() { return getToken(SplParser.COLCOUNT, 0); }
		public TerminalNode OPENPARENTHESIS() { return getToken(SplParser.OPENPARENTHESIS, 0); }
		public Colcount_paramContext colcount_param() {
			return getRuleContext(Colcount_paramContext.class,0);
		}
		public TerminalNode CLOSEPARENTHESIS() { return getToken(SplParser.CLOSEPARENTHESIS, 0); }
		public ColcountContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colcount; }
	}

	public final ColcountContext colcount() throws RecognitionException {
		ColcountContext _localctx = new ColcountContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_colcount);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(529);
			match(COLCOUNT);
			setState(530);
			match(OPENPARENTHESIS);
			setState(531);
			colcount_param();
			setState(532);
			match(CLOSEPARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Colcount_paramContext extends ParserRuleContext {
		public List<TerminalNode> IDENT() { return getTokens(SplParser.IDENT); }
		public TerminalNode IDENT(int i) {
			return getToken(SplParser.IDENT, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(SplParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(SplParser.COMMA, i);
		}
		public TerminalNode REGEX() { return getToken(SplParser.REGEX, 0); }
		public Colcount_paramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colcount_param; }
	}

	public final Colcount_paramContext colcount_param() throws RecognitionException {
		Colcount_paramContext _localctx = new Colcount_paramContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_colcount_param);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(534);
			match(IDENT);
			setState(535);
			match(COMMA);
			setState(536);
			match(REGEX);
			setState(537);
			match(COMMA);
			setState(538);
			match(IDENT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColdropContext extends ParserRuleContext {
		public TerminalNode COLDROP() { return getToken(SplParser.COLDROP, 0); }
		public TerminalNode OPENPARENTHESIS() { return getToken(SplParser.OPENPARENTHESIS, 0); }
		public Coldrop_paramContext coldrop_param() {
			return getRuleContext(Coldrop_paramContext.class,0);
		}
		public TerminalNode CLOSEPARENTHESIS() { return getToken(SplParser.CLOSEPARENTHESIS, 0); }
		public ColdropContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_coldrop; }
	}

	public final ColdropContext coldrop() throws RecognitionException {
		ColdropContext _localctx = new ColdropContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_coldrop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(540);
			match(COLDROP);
			setState(541);
			match(OPENPARENTHESIS);
			setState(542);
			coldrop_param();
			setState(543);
			match(CLOSEPARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Coldrop_paramContext extends ParserRuleContext {
		public TerminalNode IDENT() { return getToken(SplParser.IDENT, 0); }
		public Coldrop_paramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_coldrop_param; }
	}

	public final Coldrop_paramContext coldrop_param() throws RecognitionException {
		Coldrop_paramContext _localctx = new Coldrop_paramContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_coldrop_param);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(545);
			match(IDENT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColprintContext extends ParserRuleContext {
		public TerminalNode COLPRINT() { return getToken(SplParser.COLPRINT, 0); }
		public TerminalNode OPENPARENTHESIS() { return getToken(SplParser.OPENPARENTHESIS, 0); }
		public Colprint_paramContext colprint_param() {
			return getRuleContext(Colprint_paramContext.class,0);
		}
		public TerminalNode CLOSEPARENTHESIS() { return getToken(SplParser.CLOSEPARENTHESIS, 0); }
		public ColprintContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colprint; }
	}

	public final ColprintContext colprint() throws RecognitionException {
		ColprintContext _localctx = new ColprintContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_colprint);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(547);
			match(COLPRINT);
			setState(548);
			match(OPENPARENTHESIS);
			setState(549);
			colprint_param();
			setState(550);
			match(CLOSEPARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Colprint_paramContext extends ParserRuleContext {
		public TerminalNode IDENT() { return getToken(SplParser.IDENT, 0); }
		public Colprint_paramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colprint_param; }
	}

	public final Colprint_paramContext colprint_param() throws RecognitionException {
		Colprint_paramContext _localctx = new Colprint_paramContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_colprint_param);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(552);
			match(IDENT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColwhenContext extends ParserRuleContext {
		public TerminalNode COLWHEN() { return getToken(SplParser.COLWHEN, 0); }
		public TerminalNode OPENPARENTHESIS() { return getToken(SplParser.OPENPARENTHESIS, 0); }
		public Colwhen_paramContext colwhen_param() {
			return getRuleContext(Colwhen_paramContext.class,0);
		}
		public TerminalNode CLOSEPARENTHESIS() { return getToken(SplParser.CLOSEPARENTHESIS, 0); }
		public ColwhenContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colwhen; }
	}

	public final ColwhenContext colwhen() throws RecognitionException {
		ColwhenContext _localctx = new ColwhenContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_colwhen);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(554);
			match(COLWHEN);
			setState(555);
			match(OPENPARENTHESIS);
			setState(556);
			colwhen_param();
			setState(557);
			match(CLOSEPARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Colwhen_paramContext extends ParserRuleContext {
		public TerminalNode IDENT() { return getToken(SplParser.IDENT, 0); }
		public TerminalNode COMMA() { return getToken(SplParser.COMMA, 0); }
		public TerminalNode REGEX() { return getToken(SplParser.REGEX, 0); }
		public Colwhen_paramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colwhen_param; }
	}

	public final Colwhen_paramContext colwhen_param() throws RecognitionException {
		Colwhen_paramContext _localctx = new Colwhen_paramContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_colwhen_param);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(559);
			match(IDENT);
			setState(560);
			match(COMMA);
			setState(561);
			match(REGEX);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColcaseContext extends ParserRuleContext {
		public TerminalNode COLCASE() { return getToken(SplParser.COLCASE, 0); }
		public Colcase_whenContext colcase_when() {
			return getRuleContext(Colcase_whenContext.class,0);
		}
		public TerminalNode COLELSE() { return getToken(SplParser.COLELSE, 0); }
		public Colcase_elseContext colcase_else() {
			return getRuleContext(Colcase_elseContext.class,0);
		}
		public TerminalNode COLEND() { return getToken(SplParser.COLEND, 0); }
		public ColcaseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colcase; }
	}

	public final ColcaseContext colcase() throws RecognitionException {
		ColcaseContext _localctx = new ColcaseContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_colcase);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(563);
			match(COLCASE);
			setState(564);
			colcase_when();
			setState(565);
			match(COLELSE);
			setState(566);
			colcase_else();
			setState(567);
			match(COLEND);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Colcase_whenContext extends ParserRuleContext {
		public List<Colcase_when_nestedContext> colcase_when_nested() {
			return getRuleContexts(Colcase_when_nestedContext.class);
		}
		public Colcase_when_nestedContext colcase_when_nested(int i) {
			return getRuleContext(Colcase_when_nestedContext.class,i);
		}
		public Colcase_whenContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colcase_when; }
	}

	public final Colcase_whenContext colcase_when() throws RecognitionException {
		Colcase_whenContext _localctx = new Colcase_whenContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_colcase_when);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(570); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(569);
				colcase_when_nested();
				}
				}
				setState(572); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==COLWHEN );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Colcase_when_nestedContext extends ParserRuleContext {
		public ColwhenContext colwhen() {
			return getRuleContext(ColwhenContext.class,0);
		}
		public List<Col_op_defContext> col_op_def() {
			return getRuleContexts(Col_op_defContext.class);
		}
		public Col_op_defContext col_op_def(int i) {
			return getRuleContext(Col_op_defContext.class,i);
		}
		public Colcase_when_nestedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colcase_when_nested; }
	}

	public final Colcase_when_nestedContext colcase_when_nested() throws RecognitionException {
		Colcase_when_nestedContext _localctx = new Colcase_when_nestedContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_colcase_when_nested);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(574);
			colwhen();
			setState(576); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(575);
				col_op_def();
				}
				}
				setState(578); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( ((((_la - 52)) & ~0x3f) == 0 && ((1L << (_la - 52)) & ((1L << (COLDROP - 52)) | (1L << (COLFILL - 52)) | (1L << (COLJOIN - 52)) | (1L << (COLCOPY - 52)) | (1L << (COLSPLIT - 52)) | (1L << (COLREP - 52)) | (1L << (COLMAP - 52)) | (1L << (COLCASE - 52)) | (1L << (COLCOUNT - 52)) | (1L << (COLPRINT - 52)) | (1L << (COLCALC_CATCH_ALL - 52)))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Colcase_elseContext extends ParserRuleContext {
		public List<Col_op_defContext> col_op_def() {
			return getRuleContexts(Col_op_defContext.class);
		}
		public Col_op_defContext col_op_def(int i) {
			return getRuleContext(Col_op_defContext.class,i);
		}
		public Colcase_elseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colcase_else; }
	}

	public final Colcase_elseContext colcase_else() throws RecognitionException {
		Colcase_elseContext _localctx = new Colcase_elseContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_colcase_else);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(583);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 52)) & ~0x3f) == 0 && ((1L << (_la - 52)) & ((1L << (COLDROP - 52)) | (1L << (COLFILL - 52)) | (1L << (COLJOIN - 52)) | (1L << (COLCOPY - 52)) | (1L << (COLSPLIT - 52)) | (1L << (COLREP - 52)) | (1L << (COLMAP - 52)) | (1L << (COLCASE - 52)) | (1L << (COLCOUNT - 52)) | (1L << (COLPRINT - 52)) | (1L << (COLCALC_CATCH_ALL - 52)))) != 0)) {
				{
				{
				setState(580);
				col_op_def();
				}
				}
				setState(585);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3q\u024d\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\3\2\6\2\u0088\n\2\r\2\16\2\u0089"+
		"\3\2\3\2\3\3\3\3\5\3\u0090\n\3\3\4\3\4\5\4\u0094\n\4\3\4\5\4\u0097\n\4"+
		"\3\4\5\4\u009a\n\4\3\4\5\4\u009d\n\4\3\4\5\4\u00a0\n\4\3\4\5\4\u00a3\n"+
		"\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\7\3\7\5\7\u00b1\n\7\3\7\3"+
		"\7\5\7\u00b5\n\7\3\7\5\7\u00b8\n\7\3\7\5\7\u00bb\n\7\3\7\5\7\u00be\n\7"+
		"\3\7\5\7\u00c1\n\7\3\b\3\b\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\7\n\u00ce"+
		"\n\n\f\n\16\n\u00d1\13\n\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\r\3\r\3"+
		"\r\3\16\3\16\3\16\5\16\u00e1\n\16\3\16\5\16\u00e4\n\16\3\16\5\16\u00e7"+
		"\n\16\3\16\6\16\u00ea\n\16\r\16\16\16\u00eb\3\16\3\16\7\16\u00f0\n\16"+
		"\f\16\16\16\u00f3\13\16\3\16\5\16\u00f6\n\16\3\16\3\16\3\17\3\17\3\17"+
		"\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\20\5\20\u0106\n\20\3\21\3\21"+
		"\3\21\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24"+
		"\3\24\3\24\3\25\3\25\3\25\3\26\3\26\5\26\u011f\n\26\3\26\3\26\3\26\3\27"+
		"\3\27\3\27\3\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31\7\31\u012f\n\31\f\31"+
		"\16\31\u0132\13\31\3\31\3\31\3\32\3\32\3\32\3\32\3\32\7\32\u013b\n\32"+
		"\f\32\16\32\u013e\13\32\5\32\u0140\n\32\3\32\3\32\3\33\3\33\3\33\5\33"+
		"\u0147\n\33\3\33\3\33\5\33\u014b\n\33\3\33\5\33\u014e\n\33\3\33\5\33\u0151"+
		"\n\33\3\33\5\33\u0154\n\33\3\33\5\33\u0157\n\33\3\34\3\34\3\34\3\34\5"+
		"\34\u015d\n\34\3\34\3\34\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35"+
		"\5\35\u016a\n\35\3\35\3\35\3\36\3\36\3\36\3\36\7\36\u0172\n\36\f\36\16"+
		"\36\u0175\13\36\3\36\3\36\3\37\3\37\3\37\3 \3 \3 \3 \3 \3 \3 \3 \3 \3"+
		" \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \5 \u0195\n \3!\3!\3\"\3"+
		"\"\3\"\3#\3#\3#\3$\3$\3$\3$\3$\3$\7$\u01a5\n$\f$\16$\u01a8\13$\3$\3$\3"+
		"%\3%\3%\3&\3&\3\'\3\'\3(\3(\3)\3)\3)\3)\3)\6)\u01ba\n)\r)\16)\u01bb\3"+
		")\3)\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\5*\u01cb\n*\3+\3+\3+\3+\3+\3,\3"+
		",\3,\3,\3-\3-\3-\3-\3-\3.\3.\3.\6.\u01de\n.\r.\16.\u01df\3/\3/\3/\3/\3"+
		"/\3\60\3\60\3\60\3\60\3\60\6\60\u01ec\n\60\r\60\16\60\u01ed\3\61\3\61"+
		"\3\61\3\61\3\61\3\62\3\62\3\62\3\62\3\62\3\62\3\63\3\63\3\63\3\63\3\63"+
		"\3\64\3\64\3\65\3\65\3\65\3\65\3\65\3\66\3\66\3\66\3\66\3\66\3\66\3\66"+
		"\6\66\u020e\n\66\r\66\16\66\u020f\3\67\3\67\38\38\38\38\38\39\39\39\3"+
		"9\39\39\3:\3:\3:\3:\3:\3;\3;\3<\3<\3<\3<\3<\3=\3=\3>\3>\3>\3>\3>\3?\3"+
		"?\3?\3?\3@\3@\3@\3@\3@\3@\3A\6A\u023d\nA\rA\16A\u023e\3B\3B\6B\u0243\n"+
		"B\rB\16B\u0244\3C\7C\u0248\nC\fC\16C\u024b\13C\3C\2\2D\2\4\6\b\n\f\16"+
		"\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bd"+
		"fhjlnprtvxz|~\u0080\u0082\u0084\2\13\3\2no\3\2/\60\5\2FFJJnn\4\2FFJJ\3"+
		"\2KR\3\2km\4\2JJnn\4\2HHJJ\6\2FFJJnnpp\2\u025a\2\u0087\3\2\2\2\4\u008f"+
		"\3\2\2\2\6\u0091\3\2\2\2\b\u00a6\3\2\2\2\n\u00ac\3\2\2\2\f\u00b0\3\2\2"+
		"\2\16\u00c2\3\2\2\2\20\u00c4\3\2\2\2\22\u00c7\3\2\2\2\24\u00d2\3\2\2\2"+
		"\26\u00d6\3\2\2\2\30\u00da\3\2\2\2\32\u00dd\3\2\2\2\34\u00f9\3\2\2\2\36"+
		"\u00ff\3\2\2\2 \u0107\3\2\2\2\"\u010a\3\2\2\2$\u010e\3\2\2\2&\u0112\3"+
		"\2\2\2(\u0119\3\2\2\2*\u011c\3\2\2\2,\u0123\3\2\2\2.\u0126\3\2\2\2\60"+
		"\u0129\3\2\2\2\62\u0135\3\2\2\2\64\u0143\3\2\2\2\66\u0158\3\2\2\28\u0160"+
		"\3\2\2\2:\u016d\3\2\2\2<\u0178\3\2\2\2>\u0194\3\2\2\2@\u0196\3\2\2\2B"+
		"\u0198\3\2\2\2D\u019b\3\2\2\2F\u019e\3\2\2\2H\u01ab\3\2\2\2J\u01ae\3\2"+
		"\2\2L\u01b0\3\2\2\2N\u01b2\3\2\2\2P\u01b4\3\2\2\2R\u01ca\3\2\2\2T\u01cc"+
		"\3\2\2\2V\u01d1\3\2\2\2X\u01d5\3\2\2\2Z\u01da\3\2\2\2\\\u01e1\3\2\2\2"+
		"^\u01e6\3\2\2\2`\u01ef\3\2\2\2b\u01f4\3\2\2\2d\u01fa\3\2\2\2f\u01ff\3"+
		"\2\2\2h\u0201\3\2\2\2j\u0206\3\2\2\2l\u0211\3\2\2\2n\u0213\3\2\2\2p\u0218"+
		"\3\2\2\2r\u021e\3\2\2\2t\u0223\3\2\2\2v\u0225\3\2\2\2x\u022a\3\2\2\2z"+
		"\u022c\3\2\2\2|\u0231\3\2\2\2~\u0235\3\2\2\2\u0080\u023c\3\2\2\2\u0082"+
		"\u0240\3\2\2\2\u0084\u0249\3\2\2\2\u0086\u0088\5\4\3\2\u0087\u0086\3\2"+
		"\2\2\u0088\u0089\3\2\2\2\u0089\u0087\3\2\2\2\u0089\u008a\3\2\2\2\u008a"+
		"\u008b\3\2\2\2\u008b\u008c\7\2\2\3\u008c\3\3\2\2\2\u008d\u0090\5\6\4\2"+
		"\u008e\u0090\5\32\16\2\u008f\u008d\3\2\2\2\u008f\u008e\3\2\2\2\u0090\5"+
		"\3\2\2\2\u0091\u0093\5\b\5\2\u0092\u0094\5\f\7\2\u0093\u0092\3\2\2\2\u0093"+
		"\u0094\3\2\2\2\u0094\u0096\3\2\2\2\u0095\u0097\5\20\t\2\u0096\u0095\3"+
		"\2\2\2\u0096\u0097\3\2\2\2\u0097\u0099\3\2\2\2\u0098\u009a\5\24\13\2\u0099"+
		"\u0098\3\2\2\2\u0099\u009a\3\2\2\2\u009a\u009c\3\2\2\2\u009b\u009d\5\22"+
		"\n\2\u009c\u009b\3\2\2\2\u009c\u009d\3\2\2\2\u009d\u009f\3\2\2\2\u009e"+
		"\u00a0\5\26\f\2\u009f\u009e\3\2\2\2\u009f\u00a0\3\2\2\2\u00a0\u00a2\3"+
		"\2\2\2\u00a1\u00a3\5\30\r\2\u00a2\u00a1\3\2\2\2\u00a2\u00a3\3\2\2\2\u00a3"+
		"\u00a4\3\2\2\2\u00a4\u00a5\7\3\2\2\u00a5\7\3\2\2\2\u00a6\u00a7\7\23\2"+
		"\2\u00a7\u00a8\7\24\2\2\u00a8\u00a9\5\n\6\2\u00a9\u00aa\7\26\2\2\u00aa"+
		"\u00ab\7J\2\2\u00ab\t\3\2\2\2\u00ac\u00ad\t\2\2\2\u00ad\13\3\2\2\2\u00ae"+
		"\u00af\7 \2\2\u00af\u00b1\7\62\2\2\u00b0\u00ae\3\2\2\2\u00b0\u00b1\3\2"+
		"\2\2\u00b1\u00b4\3\2\2\2\u00b2\u00b3\7\25\2\2\u00b3\u00b5\5\16\b\2\u00b4"+
		"\u00b2\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b5\u00b7\3\2\2\2\u00b6\u00b8\7\64"+
		"\2\2\u00b7\u00b6\3\2\2\2\u00b7\u00b8\3\2\2\2\u00b8\u00ba\3\2\2\2\u00b9"+
		"\u00bb\7\63\2\2\u00ba\u00b9\3\2\2\2\u00ba\u00bb\3\2\2\2\u00bb\u00bd\3"+
		"\2\2\2\u00bc\u00be\7\'\2\2\u00bd\u00bc\3\2\2\2\u00bd\u00be\3\2\2\2\u00be"+
		"\u00c0\3\2\2\2\u00bf\u00c1\7(\2\2\u00c0\u00bf\3\2\2\2\u00c0\u00c1\3\2"+
		"\2\2\u00c1\r\3\2\2\2\u00c2\u00c3\t\2\2\2\u00c3\17\3\2\2\2\u00c4\u00c5"+
		"\7\32\2\2\u00c5\u00c6\7J\2\2\u00c6\21\3\2\2\2\u00c7\u00c8\7#\2\2\u00c8"+
		"\u00c9\7H\2\2\u00c9\u00ca\7\36\2\2\u00ca\u00cf\7n\2\2\u00cb\u00cc\7\20"+
		"\2\2\u00cc\u00ce\7n\2\2\u00cd\u00cb\3\2\2\2\u00ce\u00d1\3\2\2\2\u00cf"+
		"\u00cd\3\2\2\2\u00cf\u00d0\3\2\2\2\u00d0\23\3\2\2\2\u00d1\u00cf\3\2\2"+
		"\2\u00d2\u00d3\7\27\2\2\u00d3\u00d4\7\31\2\2\u00d4\u00d5\7H\2\2\u00d5"+
		"\25\3\2\2\2\u00d6\u00d7\7\30\2\2\u00d7\u00d8\7\31\2\2\u00d8\u00d9\7H\2"+
		"\2\u00d9\27\3\2\2\2\u00da\u00db\7!\2\2\u00db\u00dc\7H\2\2\u00dc\31\3\2"+
		"\2\2\u00dd\u00de\5\34\17\2\u00de\u00e0\5\36\20\2\u00df\u00e1\5.\30\2\u00e0"+
		"\u00df\3\2\2\2\u00e0\u00e1\3\2\2\2\u00e1\u00e3\3\2\2\2\u00e2\u00e4\5*"+
		"\26\2\u00e3\u00e2\3\2\2\2\u00e3\u00e4\3\2\2\2\u00e4\u00e6\3\2\2\2\u00e5"+
		"\u00e7\5,\27\2\u00e6\u00e5\3\2\2\2\u00e6\u00e7\3\2\2\2\u00e7\u00e9\3\2"+
		"\2\2\u00e8\u00ea\5\64\33\2\u00e9\u00e8\3\2\2\2\u00ea\u00eb\3\2\2\2\u00eb"+
		"\u00e9\3\2\2\2\u00eb\u00ec\3\2\2\2\u00ec\u00ed\3\2\2\2\u00ed\u00f1\5\60"+
		"\31\2\u00ee\u00f0\5R*\2\u00ef\u00ee\3\2\2\2\u00f0\u00f3\3\2\2\2\u00f1"+
		"\u00ef\3\2\2\2\u00f1\u00f2\3\2\2\2\u00f2\u00f5\3\2\2\2\u00f3\u00f1\3\2"+
		"\2\2\u00f4\u00f6\5\62\32\2\u00f5\u00f4\3\2\2\2\u00f5\u00f6\3\2\2\2\u00f6"+
		"\u00f7\3\2\2\2\u00f7\u00f8\7\3\2\2\u00f8\33\3\2\2\2\u00f9\u00fa\7\23\2"+
		"\2\u00fa\u00fb\7\33\2\2\u00fb\u00fc\7n\2\2\u00fc\u00fd\7\24\2\2\u00fd"+
		"\u00fe\5\n\6\2\u00fe\35\3\2\2\2\u00ff\u0105\7*\2\2\u0100\u0106\5\"\22"+
		"\2\u0101\u0106\5$\23\2\u0102\u0106\5&\24\2\u0103\u0106\5(\25\2\u0104\u0106"+
		"\5 \21\2\u0105\u0100\3\2\2\2\u0105\u0101\3\2\2\2\u0105\u0102\3\2\2\2\u0105"+
		"\u0103\3\2\2\2\u0105\u0104\3\2\2\2\u0106\37\3\2\2\2\u0107\u0108\t\3\2"+
		"\2\u0108\u0109\7H\2\2\u0109!\3\2\2\2\u010a\u010b\7,\2\2\u010b\u010c\7"+
		"\34\2\2\u010c\u010d\7H\2\2\u010d#\3\2\2\2\u010e\u010f\7+\2\2\u010f\u0110"+
		"\7H\2\2\u0110\u0111\7H\2\2\u0111%\3\2\2\2\u0112\u0113\7-\2\2\u0113\u0114"+
		"\7J\2\2\u0114\u0115\7\20\2\2\u0115\u0116\7J\2\2\u0116\u0117\7\20\2\2\u0117"+
		"\u0118\7J\2\2\u0118\'\3\2\2\2\u0119\u011a\7.\2\2\u011a\u011b\7H\2\2\u011b"+
		")\3\2\2\2\u011c\u011e\7$\2\2\u011d\u011f\7&\2\2\u011e\u011d\3\2\2\2\u011e"+
		"\u011f\3\2\2\2\u011f\u0120\3\2\2\2\u0120\u0121\7H\2\2\u0121\u0122\7J\2"+
		"\2\u0122+\3\2\2\2\u0123\u0124\7)\2\2\u0124\u0125\7F\2\2\u0125-\3\2\2\2"+
		"\u0126\u0127\7%\2\2\u0127\u0128\7H\2\2\u0128/\3\2\2\2\u0129\u012a\7:\2"+
		"\2\u012a\u012b\7\t\2\2\u012b\u0130\7n\2\2\u012c\u012d\7\20\2\2\u012d\u012f"+
		"\7n\2\2\u012e\u012c\3\2\2\2\u012f\u0132\3\2\2\2\u0130\u012e\3\2\2\2\u0130"+
		"\u0131\3\2\2\2\u0131\u0133\3\2\2\2\u0132\u0130\3\2\2\2\u0133\u0134\7\n"+
		"\2\2\u0134\61\3\2\2\2\u0135\u0136\7\65\2\2\u0136\u013f\7\t\2\2\u0137\u013c"+
		"\7n\2\2\u0138\u0139\7\20\2\2\u0139\u013b\7n\2\2\u013a\u0138\3\2\2\2\u013b"+
		"\u013e\3\2\2\2\u013c\u013a\3\2\2\2\u013c\u013d\3\2\2\2\u013d\u0140\3\2"+
		"\2\2\u013e\u013c\3\2\2\2\u013f\u0137\3\2\2\2\u013f\u0140\3\2\2\2\u0140"+
		"\u0141\3\2\2\2\u0141\u0142\7\n\2\2\u0142\63\3\2\2\2\u0143\u0144\7\35\2"+
		"\2\u0144\u0146\7n\2\2\u0145\u0147\5\66\34\2\u0146\u0145\3\2\2\2\u0146"+
		"\u0147\3\2\2\2\u0147\u0148\3\2\2\2\u0148\u014a\58\35\2\u0149\u014b\5:"+
		"\36\2\u014a\u0149\3\2\2\2\u014a\u014b\3\2\2\2\u014b\u014d\3\2\2\2\u014c"+
		"\u014e\5B\"\2\u014d\u014c\3\2\2\2\u014d\u014e\3\2\2\2\u014e\u0150\3\2"+
		"\2\2\u014f\u0151\5N(\2\u0150\u014f\3\2\2\2\u0150\u0151\3\2\2\2\u0151\u0153"+
		"\3\2\2\2\u0152\u0154\5D#\2\u0153\u0152\3\2\2\2\u0153\u0154\3\2\2\2\u0154"+
		"\u0156\3\2\2\2\u0155\u0157\5F$\2\u0156\u0155\3\2\2\2\u0156\u0157\3\2\2"+
		"\2\u0157\65\3\2\2\2\u0158\u0159\7\t\2\2\u0159\u015c\7o\2\2\u015a\u015b"+
		"\7\4\2\2\u015b\u015d\7n\2\2\u015c\u015a\3\2\2\2\u015c\u015d\3\2\2\2\u015d"+
		"\u015e\3\2\2\2\u015e\u015f\7\n\2\2\u015f\67\3\2\2\2\u0160\u0161\7\7\2"+
		"\2\u0161\u0162\7G\2\2\u0162\u0163\7\t\2\2\u0163\u0164\7F\2\2\u0164\u0165"+
		"\7\n\2\2\u0165\u0166\7\4\2\2\u0166\u0169\7\61\2\2\u0167\u0168\7\4\2\2"+
		"\u0168\u016a\7J\2\2\u0169\u0167\3\2\2\2\u0169\u016a\3\2\2\2\u016a\u016b"+
		"\3\2\2\2\u016b\u016c\7\b\2\2\u016c9\3\2\2\2\u016d\u016e\7\f\2\2\u016e"+
		"\u0173\5<\37\2\u016f\u0170\7\20\2\2\u0170\u0172\5<\37\2\u0171\u016f\3"+
		"\2\2\2\u0172\u0175\3\2\2\2\u0173\u0171\3\2\2\2\u0173\u0174\3\2\2\2\u0174"+
		"\u0176\3\2\2\2\u0175\u0173\3\2\2\2\u0176\u0177\7\13\2\2\u0177;\3\2\2\2"+
		"\u0178\u0179\5> \2\u0179\u017a\5@!\2\u017a=\3\2\2\2\u017b\u0195\7g\2\2"+
		"\u017c\u0195\7S\2\2\u017d\u0195\7T\2\2\u017e\u0195\7U\2\2\u017f\u0195"+
		"\7V\2\2\u0180\u0195\7W\2\2\u0181\u0195\7X\2\2\u0182\u0195\7Y\2\2\u0183"+
		"\u0195\7Z\2\2\u0184\u0195\7[\2\2\u0185\u0195\7\\\2\2\u0186\u0195\7_\2"+
		"\2\u0187\u0195\7`\2\2\u0188\u0195\7a\2\2\u0189\u0195\7b\2\2\u018a\u0195"+
		"\7c\2\2\u018b\u0195\7d\2\2\u018c\u0195\7e\2\2\u018d\u0195\7f\2\2\u018e"+
		"\u0195\7h\2\2\u018f\u0195\7i\2\2\u0190\u0195\7j\2\2\u0191\u0195\7]\2\2"+
		"\u0192\u0195\7^\2\2\u0193\u0195\3\2\2\2\u0194\u017b\3\2\2\2\u0194\u017c"+
		"\3\2\2\2\u0194\u017d\3\2\2\2\u0194\u017e\3\2\2\2\u0194\u017f\3\2\2\2\u0194"+
		"\u0180\3\2\2\2\u0194\u0181\3\2\2\2\u0194\u0182\3\2\2\2\u0194\u0183\3\2"+
		"\2\2\u0194\u0184\3\2\2\2\u0194\u0185\3\2\2\2\u0194\u0186\3\2\2\2\u0194"+
		"\u0187\3\2\2\2\u0194\u0188\3\2\2\2\u0194\u0189\3\2\2\2\u0194\u018a\3\2"+
		"\2\2\u0194\u018b\3\2\2\2\u0194\u018c\3\2\2\2\u0194\u018d\3\2\2\2\u0194"+
		"\u018e\3\2\2\2\u0194\u018f\3\2\2\2\u0194\u0190\3\2\2\2\u0194\u0191\3\2"+
		"\2\2\u0194\u0192\3\2\2\2\u0194\u0193\3\2\2\2\u0195?\3\2\2\2\u0196\u0197"+
		"\t\4\2\2\u0197A\3\2\2\2\u0198\u0199\7\36\2\2\u0199\u019a\t\5\2\2\u019a"+
		"C\3\2\2\2\u019b\u019c\7\37\2\2\u019c\u019d\7J\2\2\u019dE\3\2\2\2\u019e"+
		"\u019f\7\31\2\2\u019f\u01a0\7\"\2\2\u01a0\u01a1\7\t\2\2\u01a1\u01a6\5"+
		"H%\2\u01a2\u01a3\7\20\2\2\u01a3\u01a5\5H%\2\u01a4\u01a2\3\2\2\2\u01a5"+
		"\u01a8\3\2\2\2\u01a6\u01a4\3\2\2\2\u01a6\u01a7\3\2\2\2\u01a7\u01a9\3\2"+
		"\2\2\u01a8\u01a6\3\2\2\2\u01a9\u01aa\7\n\2\2\u01aaG\3\2\2\2\u01ab\u01ac"+
		"\5J&\2\u01ac\u01ad\5L\'\2\u01adI\3\2\2\2\u01ae\u01af\t\6\2\2\u01afK\3"+
		"\2\2\2\u01b0\u01b1\t\4\2\2\u01b1M\3\2\2\2\u01b2\u01b3\t\7\2\2\u01b3O\3"+
		"\2\2\2\u01b4\u01b5\7n\2\2\u01b5\u01b6\7\t\2\2\u01b6\u01b9\7n\2\2\u01b7"+
		"\u01b8\7\20\2\2\u01b8\u01ba\t\b\2\2\u01b9\u01b7\3\2\2\2\u01ba\u01bb\3"+
		"\2\2\2\u01bb\u01b9\3\2\2\2\u01bb\u01bc\3\2\2\2\u01bc\u01bd\3\2\2\2\u01bd"+
		"\u01be\7\n\2\2\u01beQ\3\2\2\2\u01bf\u01cb\5T+\2\u01c0\u01cb\5n8\2\u01c1"+
		"\u01cb\5X-\2\u01c2\u01cb\5l\67\2\u01c3\u01cb\5\\/\2\u01c4\u01cb\5`\61"+
		"\2\u01c5\u01cb\5d\63\2\u01c6\u01cb\5h\65\2\u01c7\u01cb\5r:\2\u01c8\u01cb"+
		"\5v<\2\u01c9\u01cb\5~@\2\u01ca\u01bf\3\2\2\2\u01ca\u01c0\3\2\2\2\u01ca"+
		"\u01c1\3\2\2\2\u01ca\u01c2\3\2\2\2\u01ca\u01c3\3\2\2\2\u01ca\u01c4\3\2"+
		"\2\2\u01ca\u01c5\3\2\2\2\u01ca\u01c6\3\2\2\2\u01ca\u01c7\3\2\2\2\u01ca"+
		"\u01c8\3\2\2\2\u01ca\u01c9\3\2\2\2\u01cbS\3\2\2\2\u01cc\u01cd\79\2\2\u01cd"+
		"\u01ce\7\t\2\2\u01ce\u01cf\5V,\2\u01cf\u01d0\7\n\2\2\u01d0U\3\2\2\2\u01d1"+
		"\u01d2\t\b\2\2\u01d2\u01d3\7\20\2\2\u01d3\u01d4\7n\2\2\u01d4W\3\2\2\2"+
		"\u01d5\u01d6\78\2\2\u01d6\u01d7\7\t\2\2\u01d7\u01d8\5Z.\2\u01d8\u01d9"+
		"\7\n\2\2\u01d9Y\3\2\2\2\u01da\u01dd\7n\2\2\u01db\u01dc\7\20\2\2\u01dc"+
		"\u01de\t\b\2\2\u01dd\u01db\3\2\2\2\u01de\u01df\3\2\2\2\u01df\u01dd\3\2"+
		"\2\2\u01df\u01e0\3\2\2\2\u01e0[\3\2\2\2\u01e1\u01e2\7;\2\2\u01e2\u01e3"+
		"\7\t\2\2\u01e3\u01e4\5^\60\2\u01e4\u01e5\7\n\2\2\u01e5]\3\2\2\2\u01e6"+
		"\u01e7\7n\2\2\u01e7\u01e8\7\20\2\2\u01e8\u01eb\7H\2\2\u01e9\u01ea\7\20"+
		"\2\2\u01ea\u01ec\7n\2\2\u01eb\u01e9\3\2\2\2\u01ec\u01ed\3\2\2\2\u01ed"+
		"\u01eb\3\2\2\2\u01ed\u01ee\3\2\2\2\u01ee_\3\2\2\2\u01ef\u01f0\7<\2\2\u01f0"+
		"\u01f1\7\t\2\2\u01f1\u01f2\5b\62\2\u01f2\u01f3\7\n\2\2\u01f3a\3\2\2\2"+
		"\u01f4\u01f5\7H\2\2\u01f5\u01f6\7\20\2\2\u01f6\u01f7\t\b\2\2\u01f7\u01f8"+
		"\7\20\2\2\u01f8\u01f9\7n\2\2\u01f9c\3\2\2\2\u01fa\u01fb\7\67\2\2\u01fb"+
		"\u01fc\7\t\2\2\u01fc\u01fd\5f\64\2\u01fd\u01fe\7\n\2\2\u01fee\3\2\2\2"+
		"\u01ff\u0200\7n\2\2\u0200g\3\2\2\2\u0201\u0202\7=\2\2\u0202\u0203\7\t"+
		"\2\2\u0203\u0204\5j\66\2\u0204\u0205\7\n\2\2\u0205i\3\2\2\2\u0206\u0207"+
		"\7n\2\2\u0207\u0208\7\20\2\2\u0208\u0209\7n\2\2\u0209\u020a\7\20\2\2\u020a"+
		"\u020d\t\t\2\2\u020b\u020c\7\20\2\2\u020c\u020e\t\n\2\2\u020d\u020b\3"+
		"\2\2\2\u020e\u020f\3\2\2\2\u020f\u020d\3\2\2\2\u020f\u0210\3\2\2\2\u0210"+
		"k\3\2\2\2\u0211\u0212\7I\2\2\u0212m\3\2\2\2\u0213\u0214\7C\2\2\u0214\u0215"+
		"\7\t\2\2\u0215\u0216\5p9\2\u0216\u0217\7\n\2\2\u0217o\3\2\2\2\u0218\u0219"+
		"\7n\2\2\u0219\u021a\7\20\2\2\u021a\u021b\7H\2\2\u021b\u021c\7\20\2\2\u021c"+
		"\u021d\7n\2\2\u021dq\3\2\2\2\u021e\u021f\7\66\2\2\u021f\u0220\7\t\2\2"+
		"\u0220\u0221\5t;\2\u0221\u0222\7\n\2\2\u0222s\3\2\2\2\u0223\u0224\7n\2"+
		"\2\u0224u\3\2\2\2\u0225\u0226\7D\2\2\u0226\u0227\7\t\2\2\u0227\u0228\5"+
		"x=\2\u0228\u0229\7\n\2\2\u0229w\3\2\2\2\u022a\u022b\7n\2\2\u022by\3\2"+
		"\2\2\u022c\u022d\7B\2\2\u022d\u022e\7\t\2\2\u022e\u022f\5|?\2\u022f\u0230"+
		"\7\n\2\2\u0230{\3\2\2\2\u0231\u0232\7n\2\2\u0232\u0233\7\20\2\2\u0233"+
		"\u0234\7H\2\2\u0234}\3\2\2\2\u0235\u0236\7?\2\2\u0236\u0237\5\u0080A\2"+
		"\u0237\u0238\7@\2\2\u0238\u0239\5\u0084C\2\u0239\u023a\7A\2\2\u023a\177"+
		"\3\2\2\2\u023b\u023d\5\u0082B\2\u023c\u023b\3\2\2\2\u023d\u023e\3\2\2"+
		"\2\u023e\u023c\3\2\2\2\u023e\u023f\3\2\2\2\u023f\u0081\3\2\2\2\u0240\u0242"+
		"\5z>\2\u0241\u0243\5R*\2\u0242\u0241\3\2\2\2\u0243\u0244\3\2\2\2\u0244"+
		"\u0242\3\2\2\2\u0244\u0245\3\2\2\2\u0245\u0083\3\2\2\2\u0246\u0248\5R"+
		"*\2\u0247\u0246\3\2\2\2\u0248\u024b\3\2\2\2\u0249\u0247\3\2\2\2\u0249"+
		"\u024a\3\2\2\2\u024a\u0085\3\2\2\2\u024b\u0249\3\2\2\2/\u0089\u008f\u0093"+
		"\u0096\u0099\u009c\u009f\u00a2\u00b0\u00b4\u00b7\u00ba\u00bd\u00c0\u00cf"+
		"\u00e0\u00e3\u00e6\u00eb\u00f1\u00f5\u0105\u011e\u0130\u013c\u013f\u0146"+
		"\u014a\u014d\u0150\u0153\u0156\u015c\u0169\u0173\u0194\u01a6\u01bb\u01ca"+
		"\u01df\u01ed\u020f\u023e\u0244\u0249";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}