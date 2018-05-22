// Generated from Spl.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SplListener = require('./SplListener').SplListener;
var grammarFileName = "Spl.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003r\u024d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u00049\t9\u0004",
    ":\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004?\t?\u0004@\t@\u0004",
    "A\tA\u0004B\tB\u0004C\tC\u0003\u0002\u0006\u0002\u0088\n\u0002\r\u0002",
    "\u000e\u0002\u0089\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0005",
    "\u0003\u0090\n\u0003\u0003\u0004\u0003\u0004\u0005\u0004\u0094\n\u0004",
    "\u0003\u0004\u0005\u0004\u0097\n\u0004\u0003\u0004\u0005\u0004\u009a",
    "\n\u0004\u0003\u0004\u0005\u0004\u009d\n\u0004\u0003\u0004\u0005\u0004",
    "\u00a0\n\u0004\u0003\u0004\u0005\u0004\u00a3\n\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0005\u0007\u00b1",
    "\n\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u00b5\n\u0007\u0003\u0007",
    "\u0005\u0007\u00b8\n\u0007\u0003\u0007\u0005\u0007\u00bb\n\u0007\u0003",
    "\u0007\u0005\u0007\u00be\n\u0007\u0003\u0007\u0005\u0007\u00c1\n\u0007",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0007\n\u00ce\n\n\f\n\u000e\n\u00d1\u000b\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0005",
    "\u000e\u00e1\n\u000e\u0003\u000e\u0005\u000e\u00e4\n\u000e\u0003\u000e",
    "\u0005\u000e\u00e7\n\u000e\u0003\u000e\u0006\u000e\u00ea\n\u000e\r\u000e",
    "\u000e\u000e\u00eb\u0003\u000e\u0003\u000e\u0007\u000e\u00f0\n\u000e",
    "\f\u000e\u000e\u000e\u00f3\u000b\u000e\u0003\u000e\u0005\u000e\u00f6",
    "\n\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u0106\n\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0005\u0016\u011f",
    "\n\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0007\u0019\u012f\n\u0019\f\u0019",
    "\u000e\u0019\u0132\u000b\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0007\u001a\u013b\n\u001a",
    "\f\u001a\u000e\u001a\u013e\u000b\u001a\u0005\u001a\u0140\n\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u0147",
    "\n\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u014b\n\u001b\u0003\u001b",
    "\u0005\u001b\u014e\n\u001b\u0003\u001b\u0005\u001b\u0151\n\u001b\u0003",
    "\u001b\u0005\u001b\u0154\n\u001b\u0003\u001b\u0005\u001b\u0157\n\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0005\u001c\u015d\n",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0005",
    "\u001d\u016a\n\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0007\u001e\u0172\n\u001e\f\u001e\u000e\u001e",
    "\u0175\u000b\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0005 \u0195\n \u0003!\u0003",
    "!\u0003\"\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0003$\u0003$\u0003$",
    "\u0003$\u0003$\u0003$\u0007$\u01a5\n$\f$\u000e$\u01a8\u000b$\u0003$",
    "\u0003$\u0003%\u0003%\u0003%\u0003&\u0003&\u0003\'\u0003\'\u0003(\u0003",
    "(\u0003)\u0003)\u0003)\u0003)\u0003)\u0006)\u01ba\n)\r)\u000e)\u01bb",
    "\u0003)\u0003)\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003",
    "*\u0003*\u0003*\u0003*\u0005*\u01cb\n*\u0003+\u0003+\u0003+\u0003+\u0003",
    "+\u0003,\u0003,\u0003,\u0003,\u0003-\u0003-\u0003-\u0003-\u0003-\u0003",
    ".\u0003.\u0003.\u0006.\u01de\n.\r.\u000e.\u01df\u0003/\u0003/\u0003",
    "/\u0003/\u0003/\u00030\u00030\u00030\u00030\u00030\u00060\u01ec\n0\r",
    "0\u000e0\u01ed\u00031\u00031\u00031\u00031\u00031\u00032\u00032\u0003",
    "2\u00032\u00032\u00032\u00033\u00033\u00033\u00033\u00033\u00034\u0003",
    "4\u00035\u00035\u00035\u00035\u00035\u00036\u00036\u00036\u00036\u0003",
    "6\u00036\u00036\u00066\u020e\n6\r6\u000e6\u020f\u00037\u00037\u0003",
    "8\u00038\u00038\u00038\u00038\u00039\u00039\u00039\u00039\u00039\u0003",
    "9\u0003:\u0003:\u0003:\u0003:\u0003:\u0003;\u0003;\u0003<\u0003<\u0003",
    "<\u0003<\u0003<\u0003=\u0003=\u0003>\u0003>\u0003>\u0003>\u0003>\u0003",
    "?\u0003?\u0003?\u0003?\u0003@\u0003@\u0003@\u0003@\u0003@\u0003@\u0003",
    "A\u0006A\u023d\nA\rA\u000eA\u023e\u0003B\u0003B\u0006B\u0243\nB\rB\u000e",
    "B\u0244\u0003C\u0007C\u0248\nC\fC\u000eC\u024b\u000bC\u0003C\u0002\u0002",
    "D\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080",
    "\u0082\u0084\u0002\u000b\u0003\u0002op\u0003\u000201\u0005\u0002GGK",
    "Koo\u0004\u0002GGKK\u0003\u0002LS\u0003\u0002ln\u0004\u0002KKoo\u0004",
    "\u0002IIKK\u0006\u0002GGKKooqq\u0002\u025a\u0002\u0087\u0003\u0002\u0002",
    "\u0002\u0004\u008f\u0003\u0002\u0002\u0002\u0006\u0091\u0003\u0002\u0002",
    "\u0002\b\u00a6\u0003\u0002\u0002\u0002\n\u00ac\u0003\u0002\u0002\u0002",
    "\f\u00b0\u0003\u0002\u0002\u0002\u000e\u00c2\u0003\u0002\u0002\u0002",
    "\u0010\u00c4\u0003\u0002\u0002\u0002\u0012\u00c7\u0003\u0002\u0002\u0002",
    "\u0014\u00d2\u0003\u0002\u0002\u0002\u0016\u00d6\u0003\u0002\u0002\u0002",
    "\u0018\u00da\u0003\u0002\u0002\u0002\u001a\u00dd\u0003\u0002\u0002\u0002",
    "\u001c\u00f9\u0003\u0002\u0002\u0002\u001e\u00ff\u0003\u0002\u0002\u0002",
    " \u0107\u0003\u0002\u0002\u0002\"\u010a\u0003\u0002\u0002\u0002$\u010e",
    "\u0003\u0002\u0002\u0002&\u0112\u0003\u0002\u0002\u0002(\u0119\u0003",
    "\u0002\u0002\u0002*\u011c\u0003\u0002\u0002\u0002,\u0123\u0003\u0002",
    "\u0002\u0002.\u0126\u0003\u0002\u0002\u00020\u0129\u0003\u0002\u0002",
    "\u00022\u0135\u0003\u0002\u0002\u00024\u0143\u0003\u0002\u0002\u0002",
    "6\u0158\u0003\u0002\u0002\u00028\u0160\u0003\u0002\u0002\u0002:\u016d",
    "\u0003\u0002\u0002\u0002<\u0178\u0003\u0002\u0002\u0002>\u0194\u0003",
    "\u0002\u0002\u0002@\u0196\u0003\u0002\u0002\u0002B\u0198\u0003\u0002",
    "\u0002\u0002D\u019b\u0003\u0002\u0002\u0002F\u019e\u0003\u0002\u0002",
    "\u0002H\u01ab\u0003\u0002\u0002\u0002J\u01ae\u0003\u0002\u0002\u0002",
    "L\u01b0\u0003\u0002\u0002\u0002N\u01b2\u0003\u0002\u0002\u0002P\u01b4",
    "\u0003\u0002\u0002\u0002R\u01ca\u0003\u0002\u0002\u0002T\u01cc\u0003",
    "\u0002\u0002\u0002V\u01d1\u0003\u0002\u0002\u0002X\u01d5\u0003\u0002",
    "\u0002\u0002Z\u01da\u0003\u0002\u0002\u0002\\\u01e1\u0003\u0002\u0002",
    "\u0002^\u01e6\u0003\u0002\u0002\u0002`\u01ef\u0003\u0002\u0002\u0002",
    "b\u01f4\u0003\u0002\u0002\u0002d\u01fa\u0003\u0002\u0002\u0002f\u01ff",
    "\u0003\u0002\u0002\u0002h\u0201\u0003\u0002\u0002\u0002j\u0206\u0003",
    "\u0002\u0002\u0002l\u0211\u0003\u0002\u0002\u0002n\u0213\u0003\u0002",
    "\u0002\u0002p\u0218\u0003\u0002\u0002\u0002r\u021e\u0003\u0002\u0002",
    "\u0002t\u0223\u0003\u0002\u0002\u0002v\u0225\u0003\u0002\u0002\u0002",
    "x\u022a\u0003\u0002\u0002\u0002z\u022c\u0003\u0002\u0002\u0002|\u0231",
    "\u0003\u0002\u0002\u0002~\u0235\u0003\u0002\u0002\u0002\u0080\u023c",
    "\u0003\u0002\u0002\u0002\u0082\u0240\u0003\u0002\u0002\u0002\u0084\u0249",
    "\u0003\u0002\u0002\u0002\u0086\u0088\u0005\u0004\u0003\u0002\u0087\u0086",
    "\u0003\u0002\u0002\u0002\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u0087",
    "\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u008b",
    "\u0003\u0002\u0002\u0002\u008b\u008c\u0007\u0002\u0002\u0003\u008c\u0003",
    "\u0003\u0002\u0002\u0002\u008d\u0090\u0005\u0006\u0004\u0002\u008e\u0090",
    "\u0005\u001a\u000e\u0002\u008f\u008d\u0003\u0002\u0002\u0002\u008f\u008e",
    "\u0003\u0002\u0002\u0002\u0090\u0005\u0003\u0002\u0002\u0002\u0091\u0093",
    "\u0005\b\u0005\u0002\u0092\u0094\u0005\f\u0007\u0002\u0093\u0092\u0003",
    "\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002\u0094\u0096\u0003",
    "\u0002\u0002\u0002\u0095\u0097\u0005\u0010\t\u0002\u0096\u0095\u0003",
    "\u0002\u0002\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0097\u0099\u0003",
    "\u0002\u0002\u0002\u0098\u009a\u0005\u0014\u000b\u0002\u0099\u0098\u0003",
    "\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002\u0002\u009a\u009c\u0003",
    "\u0002\u0002\u0002\u009b\u009d\u0005\u0012\n\u0002\u009c\u009b\u0003",
    "\u0002\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u009f\u0003",
    "\u0002\u0002\u0002\u009e\u00a0\u0005\u0016\f\u0002\u009f\u009e\u0003",
    "\u0002\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0\u00a2\u0003",
    "\u0002\u0002\u0002\u00a1\u00a3\u0005\u0018\r\u0002\u00a2\u00a1\u0003",
    "\u0002\u0002\u0002\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003",
    "\u0002\u0002\u0002\u00a4\u00a5\u0007\u0004\u0002\u0002\u00a5\u0007\u0003",
    "\u0002\u0002\u0002\u00a6\u00a7\u0007\u0014\u0002\u0002\u00a7\u00a8\u0007",
    "\u0015\u0002\u0002\u00a8\u00a9\u0005\n\u0006\u0002\u00a9\u00aa\u0007",
    "\u0017\u0002\u0002\u00aa\u00ab\u0007K\u0002\u0002\u00ab\t\u0003\u0002",
    "\u0002\u0002\u00ac\u00ad\t\u0002\u0002\u0002\u00ad\u000b\u0003\u0002",
    "\u0002\u0002\u00ae\u00af\u0007!\u0002\u0002\u00af\u00b1\u00073\u0002",
    "\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002",
    "\u0002\u00b1\u00b4\u0003\u0002\u0002\u0002\u00b2\u00b3\u0007\u0016\u0002",
    "\u0002\u00b3\u00b5\u0005\u000e\b\u0002\u00b4\u00b2\u0003\u0002\u0002",
    "\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5\u00b7\u0003\u0002\u0002",
    "\u0002\u00b6\u00b8\u00075\u0002\u0002\u00b7\u00b6\u0003\u0002\u0002",
    "\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u00ba\u0003\u0002\u0002",
    "\u0002\u00b9\u00bb\u00074\u0002\u0002\u00ba\u00b9\u0003\u0002\u0002",
    "\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002\u00bb\u00bd\u0003\u0002\u0002",
    "\u0002\u00bc\u00be\u0007(\u0002\u0002\u00bd\u00bc\u0003\u0002\u0002",
    "\u0002\u00bd\u00be\u0003\u0002\u0002\u0002\u00be\u00c0\u0003\u0002\u0002",
    "\u0002\u00bf\u00c1\u0007)\u0002\u0002\u00c0\u00bf\u0003\u0002\u0002",
    "\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1\r\u0003\u0002\u0002",
    "\u0002\u00c2\u00c3\t\u0002\u0002\u0002\u00c3\u000f\u0003\u0002\u0002",
    "\u0002\u00c4\u00c5\u0007\u001b\u0002\u0002\u00c5\u00c6\u0007K\u0002",
    "\u0002\u00c6\u0011\u0003\u0002\u0002\u0002\u00c7\u00c8\u0007$\u0002",
    "\u0002\u00c8\u00c9\u0007I\u0002\u0002\u00c9\u00ca\u0007\u001f\u0002",
    "\u0002\u00ca\u00cf\u0007o\u0002\u0002\u00cb\u00cc\u0007\u0011\u0002",
    "\u0002\u00cc\u00ce\u0007o\u0002\u0002\u00cd\u00cb\u0003\u0002\u0002",
    "\u0002\u00ce\u00d1\u0003\u0002\u0002\u0002\u00cf\u00cd\u0003\u0002\u0002",
    "\u0002\u00cf\u00d0\u0003\u0002\u0002\u0002\u00d0\u0013\u0003\u0002\u0002",
    "\u0002\u00d1\u00cf\u0003\u0002\u0002\u0002\u00d2\u00d3\u0007\u0018\u0002",
    "\u0002\u00d3\u00d4\u0007\u001a\u0002\u0002\u00d4\u00d5\u0007I\u0002",
    "\u0002\u00d5\u0015\u0003\u0002\u0002\u0002\u00d6\u00d7\u0007\u0019\u0002",
    "\u0002\u00d7\u00d8\u0007\u001a\u0002\u0002\u00d8\u00d9\u0007I\u0002",
    "\u0002\u00d9\u0017\u0003\u0002\u0002\u0002\u00da\u00db\u0007\"\u0002",
    "\u0002\u00db\u00dc\u0007I\u0002\u0002\u00dc\u0019\u0003\u0002\u0002",
    "\u0002\u00dd\u00de\u0005\u001c\u000f\u0002\u00de\u00e0\u0005\u001e\u0010",
    "\u0002\u00df\u00e1\u0005.\u0018\u0002\u00e0\u00df\u0003\u0002\u0002",
    "\u0002\u00e0\u00e1\u0003\u0002\u0002\u0002\u00e1\u00e3\u0003\u0002\u0002",
    "\u0002\u00e2\u00e4\u0005*\u0016\u0002\u00e3\u00e2\u0003\u0002\u0002",
    "\u0002\u00e3\u00e4\u0003\u0002\u0002\u0002\u00e4\u00e6\u0003\u0002\u0002",
    "\u0002\u00e5\u00e7\u0005,\u0017\u0002\u00e6\u00e5\u0003\u0002\u0002",
    "\u0002\u00e6\u00e7\u0003\u0002\u0002\u0002\u00e7\u00e9\u0003\u0002\u0002",
    "\u0002\u00e8\u00ea\u00054\u001b\u0002\u00e9\u00e8\u0003\u0002\u0002",
    "\u0002\u00ea\u00eb\u0003\u0002\u0002\u0002\u00eb\u00e9\u0003\u0002\u0002",
    "\u0002\u00eb\u00ec\u0003\u0002\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002",
    "\u0002\u00ed\u00f1\u00050\u0019\u0002\u00ee\u00f0\u0005R*\u0002\u00ef",
    "\u00ee\u0003\u0002\u0002\u0002\u00f0\u00f3\u0003\u0002\u0002\u0002\u00f1",
    "\u00ef\u0003\u0002\u0002\u0002\u00f1\u00f2\u0003\u0002\u0002\u0002\u00f2",
    "\u00f5\u0003\u0002\u0002\u0002\u00f3\u00f1\u0003\u0002\u0002\u0002\u00f4",
    "\u00f6\u00052\u001a\u0002\u00f5\u00f4\u0003\u0002\u0002\u0002\u00f5",
    "\u00f6\u0003\u0002\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002\u00f7",
    "\u00f8\u0007\u0004\u0002\u0002\u00f8\u001b\u0003\u0002\u0002\u0002\u00f9",
    "\u00fa\u0007\u0014\u0002\u0002\u00fa\u00fb\u0007\u001c\u0002\u0002\u00fb",
    "\u00fc\u0007o\u0002\u0002\u00fc\u00fd\u0007\u0015\u0002\u0002\u00fd",
    "\u00fe\u0005\n\u0006\u0002\u00fe\u001d\u0003\u0002\u0002\u0002\u00ff",
    "\u0105\u0007+\u0002\u0002\u0100\u0106\u0005\"\u0012\u0002\u0101\u0106",
    "\u0005$\u0013\u0002\u0102\u0106\u0005&\u0014\u0002\u0103\u0106\u0005",
    "(\u0015\u0002\u0104\u0106\u0005 \u0011\u0002\u0105\u0100\u0003\u0002",
    "\u0002\u0002\u0105\u0101\u0003\u0002\u0002\u0002\u0105\u0102\u0003\u0002",
    "\u0002\u0002\u0105\u0103\u0003\u0002\u0002\u0002\u0105\u0104\u0003\u0002",
    "\u0002\u0002\u0106\u001f\u0003\u0002\u0002\u0002\u0107\u0108\t\u0003",
    "\u0002\u0002\u0108\u0109\u0007I\u0002\u0002\u0109!\u0003\u0002\u0002",
    "\u0002\u010a\u010b\u0007-\u0002\u0002\u010b\u010c\u0007\u001d\u0002",
    "\u0002\u010c\u010d\u0007I\u0002\u0002\u010d#\u0003\u0002\u0002\u0002",
    "\u010e\u010f\u0007,\u0002\u0002\u010f\u0110\u0007I\u0002\u0002\u0110",
    "\u0111\u0007I\u0002\u0002\u0111%\u0003\u0002\u0002\u0002\u0112\u0113",
    "\u0007.\u0002\u0002\u0113\u0114\u0007K\u0002\u0002\u0114\u0115\u0007",
    "\u0011\u0002\u0002\u0115\u0116\u0007K\u0002\u0002\u0116\u0117\u0007",
    "\u0011\u0002\u0002\u0117\u0118\u0007K\u0002\u0002\u0118\'\u0003\u0002",
    "\u0002\u0002\u0119\u011a\u0007/\u0002\u0002\u011a\u011b\u0007I\u0002",
    "\u0002\u011b)\u0003\u0002\u0002\u0002\u011c\u011e\u0007%\u0002\u0002",
    "\u011d\u011f\u0007\'\u0002\u0002\u011e\u011d\u0003\u0002\u0002\u0002",
    "\u011e\u011f\u0003\u0002\u0002\u0002\u011f\u0120\u0003\u0002\u0002\u0002",
    "\u0120\u0121\u0007I\u0002\u0002\u0121\u0122\u0007K\u0002\u0002\u0122",
    "+\u0003\u0002\u0002\u0002\u0123\u0124\u0007*\u0002\u0002\u0124\u0125",
    "\u0007G\u0002\u0002\u0125-\u0003\u0002\u0002\u0002\u0126\u0127\u0007",
    "&\u0002\u0002\u0127\u0128\u0007I\u0002\u0002\u0128/\u0003\u0002\u0002",
    "\u0002\u0129\u012a\u0007;\u0002\u0002\u012a\u012b\u0007\n\u0002\u0002",
    "\u012b\u0130\u0007o\u0002\u0002\u012c\u012d\u0007\u0011\u0002\u0002",
    "\u012d\u012f\u0007o\u0002\u0002\u012e\u012c\u0003\u0002\u0002\u0002",
    "\u012f\u0132\u0003\u0002\u0002\u0002\u0130\u012e\u0003\u0002\u0002\u0002",
    "\u0130\u0131\u0003\u0002\u0002\u0002\u0131\u0133\u0003\u0002\u0002\u0002",
    "\u0132\u0130\u0003\u0002\u0002\u0002\u0133\u0134\u0007\u000b\u0002\u0002",
    "\u01341\u0003\u0002\u0002\u0002\u0135\u0136\u00076\u0002\u0002\u0136",
    "\u013f\u0007\n\u0002\u0002\u0137\u013c\u0007o\u0002\u0002\u0138\u0139",
    "\u0007\u0011\u0002\u0002\u0139\u013b\u0007o\u0002\u0002\u013a\u0138",
    "\u0003\u0002\u0002\u0002\u013b\u013e\u0003\u0002\u0002\u0002\u013c\u013a",
    "\u0003\u0002\u0002\u0002\u013c\u013d\u0003\u0002\u0002\u0002\u013d\u0140",
    "\u0003\u0002\u0002\u0002\u013e\u013c\u0003\u0002\u0002\u0002\u013f\u0137",
    "\u0003\u0002\u0002\u0002\u013f\u0140\u0003\u0002\u0002\u0002\u0140\u0141",
    "\u0003\u0002\u0002\u0002\u0141\u0142\u0007\u000b\u0002\u0002\u01423",
    "\u0003\u0002\u0002\u0002\u0143\u0144\u0007\u001e\u0002\u0002\u0144\u0146",
    "\u0007o\u0002\u0002\u0145\u0147\u00056\u001c\u0002\u0146\u0145\u0003",
    "\u0002\u0002\u0002\u0146\u0147\u0003\u0002\u0002\u0002\u0147\u0148\u0003",
    "\u0002\u0002\u0002\u0148\u014a\u00058\u001d\u0002\u0149\u014b\u0005",
    ":\u001e\u0002\u014a\u0149\u0003\u0002\u0002\u0002\u014a\u014b\u0003",
    "\u0002\u0002\u0002\u014b\u014d\u0003\u0002\u0002\u0002\u014c\u014e\u0005",
    "B\"\u0002\u014d\u014c\u0003\u0002\u0002\u0002\u014d\u014e\u0003\u0002",
    "\u0002\u0002\u014e\u0150\u0003\u0002\u0002\u0002\u014f\u0151\u0005N",
    "(\u0002\u0150\u014f\u0003\u0002\u0002\u0002\u0150\u0151\u0003\u0002",
    "\u0002\u0002\u0151\u0153\u0003\u0002\u0002\u0002\u0152\u0154\u0005D",
    "#\u0002\u0153\u0152\u0003\u0002\u0002\u0002\u0153\u0154\u0003\u0002",
    "\u0002\u0002\u0154\u0156\u0003\u0002\u0002\u0002\u0155\u0157\u0005F",
    "$\u0002\u0156\u0155\u0003\u0002\u0002\u0002\u0156\u0157\u0003\u0002",
    "\u0002\u0002\u01575\u0003\u0002\u0002\u0002\u0158\u0159\u0007\n\u0002",
    "\u0002\u0159\u015c\u0007p\u0002\u0002\u015a\u015b\u0007\u0005\u0002",
    "\u0002\u015b\u015d\u0007o\u0002\u0002\u015c\u015a\u0003\u0002\u0002",
    "\u0002\u015c\u015d\u0003\u0002\u0002\u0002\u015d\u015e\u0003\u0002\u0002",
    "\u0002\u015e\u015f\u0007\u000b\u0002\u0002\u015f7\u0003\u0002\u0002",
    "\u0002\u0160\u0161\u0007\b\u0002\u0002\u0161\u0162\u0007H\u0002\u0002",
    "\u0162\u0163\u0007\n\u0002\u0002\u0163\u0164\u0007G\u0002\u0002\u0164",
    "\u0165\u0007\u000b\u0002\u0002\u0165\u0166\u0007\u0005\u0002\u0002\u0166",
    "\u0169\u00072\u0002\u0002\u0167\u0168\u0007\u0005\u0002\u0002\u0168",
    "\u016a\u0007K\u0002\u0002\u0169\u0167\u0003\u0002\u0002\u0002\u0169",
    "\u016a\u0003\u0002\u0002\u0002\u016a\u016b\u0003\u0002\u0002\u0002\u016b",
    "\u016c\u0007\t\u0002\u0002\u016c9\u0003\u0002\u0002\u0002\u016d\u016e",
    "\u0007\r\u0002\u0002\u016e\u0173\u0005<\u001f\u0002\u016f\u0170\u0007",
    "\u0011\u0002\u0002\u0170\u0172\u0005<\u001f\u0002\u0171\u016f\u0003",
    "\u0002\u0002\u0002\u0172\u0175\u0003\u0002\u0002\u0002\u0173\u0171\u0003",
    "\u0002\u0002\u0002\u0173\u0174\u0003\u0002\u0002\u0002\u0174\u0176\u0003",
    "\u0002\u0002\u0002\u0175\u0173\u0003\u0002\u0002\u0002\u0176\u0177\u0007",
    "\f\u0002\u0002\u0177;\u0003\u0002\u0002\u0002\u0178\u0179\u0005> \u0002",
    "\u0179\u017a\u0005@!\u0002\u017a=\u0003\u0002\u0002\u0002\u017b\u0195",
    "\u0007h\u0002\u0002\u017c\u0195\u0007T\u0002\u0002\u017d\u0195\u0007",
    "U\u0002\u0002\u017e\u0195\u0007V\u0002\u0002\u017f\u0195\u0007W\u0002",
    "\u0002\u0180\u0195\u0007X\u0002\u0002\u0181\u0195\u0007Y\u0002\u0002",
    "\u0182\u0195\u0007Z\u0002\u0002\u0183\u0195\u0007[\u0002\u0002\u0184",
    "\u0195\u0007\\\u0002\u0002\u0185\u0195\u0007]\u0002\u0002\u0186\u0195",
    "\u0007`\u0002\u0002\u0187\u0195\u0007a\u0002\u0002\u0188\u0195\u0007",
    "b\u0002\u0002\u0189\u0195\u0007c\u0002\u0002\u018a\u0195\u0007d\u0002",
    "\u0002\u018b\u0195\u0007e\u0002\u0002\u018c\u0195\u0007f\u0002\u0002",
    "\u018d\u0195\u0007g\u0002\u0002\u018e\u0195\u0007i\u0002\u0002\u018f",
    "\u0195\u0007j\u0002\u0002\u0190\u0195\u0007k\u0002\u0002\u0191\u0195",
    "\u0007^\u0002\u0002\u0192\u0195\u0007_\u0002\u0002\u0193\u0195\u0003",
    "\u0002\u0002\u0002\u0194\u017b\u0003\u0002\u0002\u0002\u0194\u017c\u0003",
    "\u0002\u0002\u0002\u0194\u017d\u0003\u0002\u0002\u0002\u0194\u017e\u0003",
    "\u0002\u0002\u0002\u0194\u017f\u0003\u0002\u0002\u0002\u0194\u0180\u0003",
    "\u0002\u0002\u0002\u0194\u0181\u0003\u0002\u0002\u0002\u0194\u0182\u0003",
    "\u0002\u0002\u0002\u0194\u0183\u0003\u0002\u0002\u0002\u0194\u0184\u0003",
    "\u0002\u0002\u0002\u0194\u0185\u0003\u0002\u0002\u0002\u0194\u0186\u0003",
    "\u0002\u0002\u0002\u0194\u0187\u0003\u0002\u0002\u0002\u0194\u0188\u0003",
    "\u0002\u0002\u0002\u0194\u0189\u0003\u0002\u0002\u0002\u0194\u018a\u0003",
    "\u0002\u0002\u0002\u0194\u018b\u0003\u0002\u0002\u0002\u0194\u018c\u0003",
    "\u0002\u0002\u0002\u0194\u018d\u0003\u0002\u0002\u0002\u0194\u018e\u0003",
    "\u0002\u0002\u0002\u0194\u018f\u0003\u0002\u0002\u0002\u0194\u0190\u0003",
    "\u0002\u0002\u0002\u0194\u0191\u0003\u0002\u0002\u0002\u0194\u0192\u0003",
    "\u0002\u0002\u0002\u0194\u0193\u0003\u0002\u0002\u0002\u0195?\u0003",
    "\u0002\u0002\u0002\u0196\u0197\t\u0004\u0002\u0002\u0197A\u0003\u0002",
    "\u0002\u0002\u0198\u0199\u0007\u001f\u0002\u0002\u0199\u019a\t\u0005",
    "\u0002\u0002\u019aC\u0003\u0002\u0002\u0002\u019b\u019c\u0007 \u0002",
    "\u0002\u019c\u019d\u0007K\u0002\u0002\u019dE\u0003\u0002\u0002\u0002",
    "\u019e\u019f\u0007\u001a\u0002\u0002\u019f\u01a0\u0007#\u0002\u0002",
    "\u01a0\u01a1\u0007\n\u0002\u0002\u01a1\u01a6\u0005H%\u0002\u01a2\u01a3",
    "\u0007\u0011\u0002\u0002\u01a3\u01a5\u0005H%\u0002\u01a4\u01a2\u0003",
    "\u0002\u0002\u0002\u01a5\u01a8\u0003\u0002\u0002\u0002\u01a6\u01a4\u0003",
    "\u0002\u0002\u0002\u01a6\u01a7\u0003\u0002\u0002\u0002\u01a7\u01a9\u0003",
    "\u0002\u0002\u0002\u01a8\u01a6\u0003\u0002\u0002\u0002\u01a9\u01aa\u0007",
    "\u000b\u0002\u0002\u01aaG\u0003\u0002\u0002\u0002\u01ab\u01ac\u0005",
    "J&\u0002\u01ac\u01ad\u0005L\'\u0002\u01adI\u0003\u0002\u0002\u0002\u01ae",
    "\u01af\t\u0006\u0002\u0002\u01afK\u0003\u0002\u0002\u0002\u01b0\u01b1",
    "\t\u0004\u0002\u0002\u01b1M\u0003\u0002\u0002\u0002\u01b2\u01b3\t\u0007",
    "\u0002\u0002\u01b3O\u0003\u0002\u0002\u0002\u01b4\u01b5\u0007o\u0002",
    "\u0002\u01b5\u01b6\u0007\n\u0002\u0002\u01b6\u01b9\u0007o\u0002\u0002",
    "\u01b7\u01b8\u0007\u0011\u0002\u0002\u01b8\u01ba\t\b\u0002\u0002\u01b9",
    "\u01b7\u0003\u0002\u0002\u0002\u01ba\u01bb\u0003\u0002\u0002\u0002\u01bb",
    "\u01b9\u0003\u0002\u0002\u0002\u01bb\u01bc\u0003\u0002\u0002\u0002\u01bc",
    "\u01bd\u0003\u0002\u0002\u0002\u01bd\u01be\u0007\u000b\u0002\u0002\u01be",
    "Q\u0003\u0002\u0002\u0002\u01bf\u01cb\u0005T+\u0002\u01c0\u01cb\u0005",
    "n8\u0002\u01c1\u01cb\u0005X-\u0002\u01c2\u01cb\u0005l7\u0002\u01c3\u01cb",
    "\u0005\\/\u0002\u01c4\u01cb\u0005`1\u0002\u01c5\u01cb\u0005d3\u0002",
    "\u01c6\u01cb\u0005h5\u0002\u01c7\u01cb\u0005r:\u0002\u01c8\u01cb\u0005",
    "v<\u0002\u01c9\u01cb\u0005~@\u0002\u01ca\u01bf\u0003\u0002\u0002\u0002",
    "\u01ca\u01c0\u0003\u0002\u0002\u0002\u01ca\u01c1\u0003\u0002\u0002\u0002",
    "\u01ca\u01c2\u0003\u0002\u0002\u0002\u01ca\u01c3\u0003\u0002\u0002\u0002",
    "\u01ca\u01c4\u0003\u0002\u0002\u0002\u01ca\u01c5\u0003\u0002\u0002\u0002",
    "\u01ca\u01c6\u0003\u0002\u0002\u0002\u01ca\u01c7\u0003\u0002\u0002\u0002",
    "\u01ca\u01c8\u0003\u0002\u0002\u0002\u01ca\u01c9\u0003\u0002\u0002\u0002",
    "\u01cbS\u0003\u0002\u0002\u0002\u01cc\u01cd\u0007:\u0002\u0002\u01cd",
    "\u01ce\u0007\n\u0002\u0002\u01ce\u01cf\u0005V,\u0002\u01cf\u01d0\u0007",
    "\u000b\u0002\u0002\u01d0U\u0003\u0002\u0002\u0002\u01d1\u01d2\t\b\u0002",
    "\u0002\u01d2\u01d3\u0007\u0011\u0002\u0002\u01d3\u01d4\u0007o\u0002",
    "\u0002\u01d4W\u0003\u0002\u0002\u0002\u01d5\u01d6\u00079\u0002\u0002",
    "\u01d6\u01d7\u0007\n\u0002\u0002\u01d7\u01d8\u0005Z.\u0002\u01d8\u01d9",
    "\u0007\u000b\u0002\u0002\u01d9Y\u0003\u0002\u0002\u0002\u01da\u01dd",
    "\u0007o\u0002\u0002\u01db\u01dc\u0007\u0011\u0002\u0002\u01dc\u01de",
    "\t\b\u0002\u0002\u01dd\u01db\u0003\u0002\u0002\u0002\u01de\u01df\u0003",
    "\u0002\u0002\u0002\u01df\u01dd\u0003\u0002\u0002\u0002\u01df\u01e0\u0003",
    "\u0002\u0002\u0002\u01e0[\u0003\u0002\u0002\u0002\u01e1\u01e2\u0007",
    "<\u0002\u0002\u01e2\u01e3\u0007\n\u0002\u0002\u01e3\u01e4\u0005^0\u0002",
    "\u01e4\u01e5\u0007\u000b\u0002\u0002\u01e5]\u0003\u0002\u0002\u0002",
    "\u01e6\u01e7\u0007o\u0002\u0002\u01e7\u01e8\u0007\u0011\u0002\u0002",
    "\u01e8\u01eb\u0007I\u0002\u0002\u01e9\u01ea\u0007\u0011\u0002\u0002",
    "\u01ea\u01ec\u0007o\u0002\u0002\u01eb\u01e9\u0003\u0002\u0002\u0002",
    "\u01ec\u01ed\u0003\u0002\u0002\u0002\u01ed\u01eb\u0003\u0002\u0002\u0002",
    "\u01ed\u01ee\u0003\u0002\u0002\u0002\u01ee_\u0003\u0002\u0002\u0002",
    "\u01ef\u01f0\u0007=\u0002\u0002\u01f0\u01f1\u0007\n\u0002\u0002\u01f1",
    "\u01f2\u0005b2\u0002\u01f2\u01f3\u0007\u000b\u0002\u0002\u01f3a\u0003",
    "\u0002\u0002\u0002\u01f4\u01f5\u0007I\u0002\u0002\u01f5\u01f6\u0007",
    "\u0011\u0002\u0002\u01f6\u01f7\t\b\u0002\u0002\u01f7\u01f8\u0007\u0011",
    "\u0002\u0002\u01f8\u01f9\u0007o\u0002\u0002\u01f9c\u0003\u0002\u0002",
    "\u0002\u01fa\u01fb\u00078\u0002\u0002\u01fb\u01fc\u0007\n\u0002\u0002",
    "\u01fc\u01fd\u0005f4\u0002\u01fd\u01fe\u0007\u000b\u0002\u0002\u01fe",
    "e\u0003\u0002\u0002\u0002\u01ff\u0200\u0007o\u0002\u0002\u0200g\u0003",
    "\u0002\u0002\u0002\u0201\u0202\u0007>\u0002\u0002\u0202\u0203\u0007",
    "\n\u0002\u0002\u0203\u0204\u0005j6\u0002\u0204\u0205\u0007\u000b\u0002",
    "\u0002\u0205i\u0003\u0002\u0002\u0002\u0206\u0207\u0007o\u0002\u0002",
    "\u0207\u0208\u0007\u0011\u0002\u0002\u0208\u0209\u0007o\u0002\u0002",
    "\u0209\u020a\u0007\u0011\u0002\u0002\u020a\u020d\t\t\u0002\u0002\u020b",
    "\u020c\u0007\u0011\u0002\u0002\u020c\u020e\t\n\u0002\u0002\u020d\u020b",
    "\u0003\u0002\u0002\u0002\u020e\u020f\u0003\u0002\u0002\u0002\u020f\u020d",
    "\u0003\u0002\u0002\u0002\u020f\u0210\u0003\u0002\u0002\u0002\u0210k",
    "\u0003\u0002\u0002\u0002\u0211\u0212\u0007J\u0002\u0002\u0212m\u0003",
    "\u0002\u0002\u0002\u0213\u0214\u0007D\u0002\u0002\u0214\u0215\u0007",
    "\n\u0002\u0002\u0215\u0216\u0005p9\u0002\u0216\u0217\u0007\u000b\u0002",
    "\u0002\u0217o\u0003\u0002\u0002\u0002\u0218\u0219\u0007o\u0002\u0002",
    "\u0219\u021a\u0007\u0011\u0002\u0002\u021a\u021b\u0007I\u0002\u0002",
    "\u021b\u021c\u0007\u0011\u0002\u0002\u021c\u021d\u0007o\u0002\u0002",
    "\u021dq\u0003\u0002\u0002\u0002\u021e\u021f\u00077\u0002\u0002\u021f",
    "\u0220\u0007\n\u0002\u0002\u0220\u0221\u0005t;\u0002\u0221\u0222\u0007",
    "\u000b\u0002\u0002\u0222s\u0003\u0002\u0002\u0002\u0223\u0224\u0007",
    "o\u0002\u0002\u0224u\u0003\u0002\u0002\u0002\u0225\u0226\u0007E\u0002",
    "\u0002\u0226\u0227\u0007\n\u0002\u0002\u0227\u0228\u0005x=\u0002\u0228",
    "\u0229\u0007\u000b\u0002\u0002\u0229w\u0003\u0002\u0002\u0002\u022a",
    "\u022b\u0007o\u0002\u0002\u022by\u0003\u0002\u0002\u0002\u022c\u022d",
    "\u0007C\u0002\u0002\u022d\u022e\u0007\n\u0002\u0002\u022e\u022f\u0005",
    "|?\u0002\u022f\u0230\u0007\u000b\u0002\u0002\u0230{\u0003\u0002\u0002",
    "\u0002\u0231\u0232\u0007o\u0002\u0002\u0232\u0233\u0007\u0011\u0002",
    "\u0002\u0233\u0234\u0007I\u0002\u0002\u0234}\u0003\u0002\u0002\u0002",
    "\u0235\u0236\u0007@\u0002\u0002\u0236\u0237\u0005\u0080A\u0002\u0237",
    "\u0238\u0007A\u0002\u0002\u0238\u0239\u0005\u0084C\u0002\u0239\u023a",
    "\u0007B\u0002\u0002\u023a\u007f\u0003\u0002\u0002\u0002\u023b\u023d",
    "\u0005\u0082B\u0002\u023c\u023b\u0003\u0002\u0002\u0002\u023d\u023e",
    "\u0003\u0002\u0002\u0002\u023e\u023c\u0003\u0002\u0002\u0002\u023e\u023f",
    "\u0003\u0002\u0002\u0002\u023f\u0081\u0003\u0002\u0002\u0002\u0240\u0242",
    "\u0005z>\u0002\u0241\u0243\u0005R*\u0002\u0242\u0241\u0003\u0002\u0002",
    "\u0002\u0243\u0244\u0003\u0002\u0002\u0002\u0244\u0242\u0003\u0002\u0002",
    "\u0002\u0244\u0245\u0003\u0002\u0002\u0002\u0245\u0083\u0003\u0002\u0002",
    "\u0002\u0246\u0248\u0005R*\u0002\u0247\u0246\u0003\u0002\u0002\u0002",
    "\u0248\u024b\u0003\u0002\u0002\u0002\u0249\u0247\u0003\u0002\u0002\u0002",
    "\u0249\u024a\u0003\u0002\u0002\u0002\u024a\u0085\u0003\u0002\u0002\u0002",
    "\u024b\u0249\u0003\u0002\u0002\u0002/\u0089\u008f\u0093\u0096\u0099",
    "\u009c\u009f\u00a2\u00b0\u00b4\u00b7\u00ba\u00bd\u00c0\u00cf\u00e0\u00e3",
    "\u00e6\u00eb\u00f1\u00f5\u0105\u011e\u0130\u013c\u013f\u0146\u014a\u014d",
    "\u0150\u0153\u0156\u015c\u0169\u0173\u0194\u01a6\u01bb\u01ca\u01df\u01ed",
    "\u020f\u023e\u0244\u0249"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "';'", "':'", "'/'", "'\\'", "'['", "']'", 
                     "'('", "')'", "'>'", "'<'", "'='", "'''", "'.'", "','", 
                     null, null, "'DEFINE'", "'NAMESPACE'", "'REF'", "'DESCRIPTION'", 
                     "'BEGINS'", "'ENDS'", "'WITH'", "'BUNDLETYPE'", "'TABLE'", 
                     "'LINEGRAB'", "'COLUMN'", "'AS'", "'WITH NAME'", "'TYPE'", 
                     "'FILEPATTERN'", "'SOLRMAPPING'", "'CONTEXT'", "'MULTILINE'", 
                     "'SETXMLNAMESPACE'", "'NOT'", "'XML'", "'JSON'", "'SKIP'", 
                     "'ICON'", "'nvpair_basic'", "'list_basic'", "'aligned_basic'", 
                     "'xml_basic'", "'csv_withheader'", "'csv_noheader'", 
                     null, null, "'SOLR'", "'LOCK'", "'CONSTRAIN'", "'COLDROP'", 
                     "'COLFILL'", "'COLJOIN'", "'COLCOPY'", "'ADD_CONTEXT'", 
                     "'COLSPLIT'", "'COLREP'", "'COLMAP'", "'COLCALC'", 
                     "'COLCASE'", "'COLELSE'", "'COLEND'", "'COLWHEN'", 
                     "'COLCOUNT'", "'COLPRINT'", null, null, null, null, 
                     null, null, "'name='", "'datatype='", "'multivalued='", 
                     "'uniquefielddef='", "'omitnorms='", "'storetermvectors='", 
                     "'storetermpositions='", "'storetermoffsets='", "'sysid1='", 
                     "'sysid2='", "'sysid3='", "'sessionid1='", "'sessionid2='", 
                     "'sessionid3='", "'sessionname='", "'sessionattr='", 
                     "'sessioncount='", "'filename='", "'ts='", "'linked='", 
                     "'content='", "'fragment_id='", "'obs_url='", "'obs_size='", 
                     "'uploaded_by='", "'facet='", "'severity='", "'units='", 
                     "'label='", "'begin_offset='", "'namespace='", "'type='", 
                     "'[L]'", "'[R]'", "'[C]'", null, null, "'0'", "''''" ];

var symbolicNames = [ null, "Comment", "SEMICOLON", "COLON", "DIVIDE", "BACKSLASH", 
                      "OPENSQUARE", "CLOSESQUARE", "OPENPARENTHESIS", "CLOSEPARENTHESIS", 
                      "GT", "LT", "EQUAL", "SINGLEQUOT", "DOT", "COMMA", 
                      "COMMENT", "WS", "DEFINE", "NAMESPACE", "REF", "DESCRIPTION", 
                      "BEGINS", "ENDS", "WITH", "BUNDLETYPE", "TABLE", "LINEGRAB", 
                      "COLUMN", "AS", "WITH_NAME", "TYPE", "FILEPATTERN", 
                      "SOLRMAPPING", "CONTEXT", "MULTILINE", "SETXMLNAMESPACE", 
                      "NOT", "XML", "JSON", "SKIP_N", "ICON", "NV_PAIR", 
                      "LIST_BASIC", "ALIGNED_BASIC", "XML_BASIC", "CSV_WITHHEADER", 
                      "CSV_NOHEADER", "NULL_DEF", "NS_TYPES", "SOLR", "LOCK", 
                      "CONSTRAIN", "COLDROP", "COLFILL", "COLJOIN", "COLCOPY", 
                      "ADD_CONTEXT", "COLSPLIT", "COLREP", "COLMAP", "COLCALC", 
                      "COLCASE", "COLELSE", "COLEND", "COLWHEN", "COLCOUNT", 
                      "COLPRINT", "FUNCTION", "INT", "DT", "REGEX", "COLCALC_CATCH_ALL", 
                      "QUOTED_LABEL", "SOLRMAPPING_NAME", "SOLRMAPPING_DATATYPE", 
                      "SOLRMAPPING_MULTIVALUED", "SOLRMAPPING_UNIQFLDEF", 
                      "SOLRMAPPING_OMITNORMS", "SOLRMAPPING_STORETV", "SOLRMAPPING_STORETP", 
                      "SOLRMAPPING_STORETO", "COLMETA_SYSID1", "COLMETA_SYSID2", 
                      "COLMETA_SYSID3", "COLMETA_SESSID1", "COLMETA_SESSID2", 
                      "COLMETA_SESSID3", "COLMETA_SESS_NAME", "COLMETA_SESS_ATTR", 
                      "COLMETA_SESS_COUNT", "COLMETA_FILENAME", "COLMETA_TS", 
                      "COLMETA_LINKED", "COLMETA_CONTENT", "COLMETA_FRAGMENT_ID", 
                      "COLMETA_OBSURL", "COLMETA_OBSSIZE", "COLMETA_UPLOADEDBY", 
                      "COLMETA_FACET", "COLMETA_SEVERITY", "COLMETA_UNITS", 
                      "COLMETA_LABEL", "COLMETA_BEGIN_OFFSET", "COLMETA_NAMESPACE", 
                      "COLMETA_TYPE", "ALIGNED_BASIC_L", "ALIGNED_BASIC_R", 
                      "ALIGNED_BASIC_C", "IDENT", "IDENT_DOT", "ZERO", "EMPTY_QUOTE" ];

var ruleNames =  [ "splg", "define", "namespace", "namespace_def", "ns_name", 
                   "ns_type_def", "ns_ref_name", "bundle_type", "ns_ctx", 
                   "begins_with", "ends_with", "file_pattern", "table", 
                   "table_def", "icon_def", "csv_icon_def", "list_basic_icon_def", 
                   "nvpair_icon_def", "aligned_basic_icon_def", "xml_icon_def", 
                   "multiline", "skip_n", "set_xml_ns", "add_context", "constrain", 
                   "column_def", "obj_ref", "data_type", "label_def", "attrib_def", 
                   "colmeta_attrib_name", "colmeta_attrib_value", "as_def", 
                   "with_name_def", "solr_mapping", "solr_mapping_def", 
                   "solr_mapping_attr_name", "solr_mapping_attr_value", 
                   "alignment", "generic_colop_def", "col_op_def", "colcopy", 
                   "colcopy_param", "coljoin", "coljoin_param", "colsplit", 
                   "colsplit_param", "colrep", "colrep_param", "colfill", 
                   "colfill_param", "colmap", "colmap_param", "colcalc", 
                   "colcount", "colcount_param", "coldrop", "coldrop_param", 
                   "colprint", "colprint_param", "colwhen", "colwhen_param", 
                   "colcase", "colcase_when", "colcase_when_nested", "colcase_else" ];

function SplParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SplParser.prototype = Object.create(antlr4.Parser.prototype);
SplParser.prototype.constructor = SplParser;

Object.defineProperty(SplParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SplParser.EOF = antlr4.Token.EOF;
SplParser.Comment = 1;
SplParser.SEMICOLON = 2;
SplParser.COLON = 3;
SplParser.DIVIDE = 4;
SplParser.BACKSLASH = 5;
SplParser.OPENSQUARE = 6;
SplParser.CLOSESQUARE = 7;
SplParser.OPENPARENTHESIS = 8;
SplParser.CLOSEPARENTHESIS = 9;
SplParser.GT = 10;
SplParser.LT = 11;
SplParser.EQUAL = 12;
SplParser.SINGLEQUOT = 13;
SplParser.DOT = 14;
SplParser.COMMA = 15;
SplParser.COMMENT = 16;
SplParser.WS = 17;
SplParser.DEFINE = 18;
SplParser.NAMESPACE = 19;
SplParser.REF = 20;
SplParser.DESCRIPTION = 21;
SplParser.BEGINS = 22;
SplParser.ENDS = 23;
SplParser.WITH = 24;
SplParser.BUNDLETYPE = 25;
SplParser.TABLE = 26;
SplParser.LINEGRAB = 27;
SplParser.COLUMN = 28;
SplParser.AS = 29;
SplParser.WITH_NAME = 30;
SplParser.TYPE = 31;
SplParser.FILEPATTERN = 32;
SplParser.SOLRMAPPING = 33;
SplParser.CONTEXT = 34;
SplParser.MULTILINE = 35;
SplParser.SETXMLNAMESPACE = 36;
SplParser.NOT = 37;
SplParser.XML = 38;
SplParser.JSON = 39;
SplParser.SKIP_N = 40;
SplParser.ICON = 41;
SplParser.NV_PAIR = 42;
SplParser.LIST_BASIC = 43;
SplParser.ALIGNED_BASIC = 44;
SplParser.XML_BASIC = 45;
SplParser.CSV_WITHHEADER = 46;
SplParser.CSV_NOHEADER = 47;
SplParser.NULL_DEF = 48;
SplParser.NS_TYPES = 49;
SplParser.SOLR = 50;
SplParser.LOCK = 51;
SplParser.CONSTRAIN = 52;
SplParser.COLDROP = 53;
SplParser.COLFILL = 54;
SplParser.COLJOIN = 55;
SplParser.COLCOPY = 56;
SplParser.ADD_CONTEXT = 57;
SplParser.COLSPLIT = 58;
SplParser.COLREP = 59;
SplParser.COLMAP = 60;
SplParser.COLCALC = 61;
SplParser.COLCASE = 62;
SplParser.COLELSE = 63;
SplParser.COLEND = 64;
SplParser.COLWHEN = 65;
SplParser.COLCOUNT = 66;
SplParser.COLPRINT = 67;
SplParser.FUNCTION = 68;
SplParser.INT = 69;
SplParser.DT = 70;
SplParser.REGEX = 71;
SplParser.COLCALC_CATCH_ALL = 72;
SplParser.QUOTED_LABEL = 73;
SplParser.SOLRMAPPING_NAME = 74;
SplParser.SOLRMAPPING_DATATYPE = 75;
SplParser.SOLRMAPPING_MULTIVALUED = 76;
SplParser.SOLRMAPPING_UNIQFLDEF = 77;
SplParser.SOLRMAPPING_OMITNORMS = 78;
SplParser.SOLRMAPPING_STORETV = 79;
SplParser.SOLRMAPPING_STORETP = 80;
SplParser.SOLRMAPPING_STORETO = 81;
SplParser.COLMETA_SYSID1 = 82;
SplParser.COLMETA_SYSID2 = 83;
SplParser.COLMETA_SYSID3 = 84;
SplParser.COLMETA_SESSID1 = 85;
SplParser.COLMETA_SESSID2 = 86;
SplParser.COLMETA_SESSID3 = 87;
SplParser.COLMETA_SESS_NAME = 88;
SplParser.COLMETA_SESS_ATTR = 89;
SplParser.COLMETA_SESS_COUNT = 90;
SplParser.COLMETA_FILENAME = 91;
SplParser.COLMETA_TS = 92;
SplParser.COLMETA_LINKED = 93;
SplParser.COLMETA_CONTENT = 94;
SplParser.COLMETA_FRAGMENT_ID = 95;
SplParser.COLMETA_OBSURL = 96;
SplParser.COLMETA_OBSSIZE = 97;
SplParser.COLMETA_UPLOADEDBY = 98;
SplParser.COLMETA_FACET = 99;
SplParser.COLMETA_SEVERITY = 100;
SplParser.COLMETA_UNITS = 101;
SplParser.COLMETA_LABEL = 102;
SplParser.COLMETA_BEGIN_OFFSET = 103;
SplParser.COLMETA_NAMESPACE = 104;
SplParser.COLMETA_TYPE = 105;
SplParser.ALIGNED_BASIC_L = 106;
SplParser.ALIGNED_BASIC_R = 107;
SplParser.ALIGNED_BASIC_C = 108;
SplParser.IDENT = 109;
SplParser.IDENT_DOT = 110;
SplParser.ZERO = 111;
SplParser.EMPTY_QUOTE = 112;

SplParser.RULE_splg = 0;
SplParser.RULE_define = 1;
SplParser.RULE_namespace = 2;
SplParser.RULE_namespace_def = 3;
SplParser.RULE_ns_name = 4;
SplParser.RULE_ns_type_def = 5;
SplParser.RULE_ns_ref_name = 6;
SplParser.RULE_bundle_type = 7;
SplParser.RULE_ns_ctx = 8;
SplParser.RULE_begins_with = 9;
SplParser.RULE_ends_with = 10;
SplParser.RULE_file_pattern = 11;
SplParser.RULE_table = 12;
SplParser.RULE_table_def = 13;
SplParser.RULE_icon_def = 14;
SplParser.RULE_csv_icon_def = 15;
SplParser.RULE_list_basic_icon_def = 16;
SplParser.RULE_nvpair_icon_def = 17;
SplParser.RULE_aligned_basic_icon_def = 18;
SplParser.RULE_xml_icon_def = 19;
SplParser.RULE_multiline = 20;
SplParser.RULE_skip_n = 21;
SplParser.RULE_set_xml_ns = 22;
SplParser.RULE_add_context = 23;
SplParser.RULE_constrain = 24;
SplParser.RULE_column_def = 25;
SplParser.RULE_obj_ref = 26;
SplParser.RULE_data_type = 27;
SplParser.RULE_label_def = 28;
SplParser.RULE_attrib_def = 29;
SplParser.RULE_colmeta_attrib_name = 30;
SplParser.RULE_colmeta_attrib_value = 31;
SplParser.RULE_as_def = 32;
SplParser.RULE_with_name_def = 33;
SplParser.RULE_solr_mapping = 34;
SplParser.RULE_solr_mapping_def = 35;
SplParser.RULE_solr_mapping_attr_name = 36;
SplParser.RULE_solr_mapping_attr_value = 37;
SplParser.RULE_alignment = 38;
SplParser.RULE_generic_colop_def = 39;
SplParser.RULE_col_op_def = 40;
SplParser.RULE_colcopy = 41;
SplParser.RULE_colcopy_param = 42;
SplParser.RULE_coljoin = 43;
SplParser.RULE_coljoin_param = 44;
SplParser.RULE_colsplit = 45;
SplParser.RULE_colsplit_param = 46;
SplParser.RULE_colrep = 47;
SplParser.RULE_colrep_param = 48;
SplParser.RULE_colfill = 49;
SplParser.RULE_colfill_param = 50;
SplParser.RULE_colmap = 51;
SplParser.RULE_colmap_param = 52;
SplParser.RULE_colcalc = 53;
SplParser.RULE_colcount = 54;
SplParser.RULE_colcount_param = 55;
SplParser.RULE_coldrop = 56;
SplParser.RULE_coldrop_param = 57;
SplParser.RULE_colprint = 58;
SplParser.RULE_colprint_param = 59;
SplParser.RULE_colwhen = 60;
SplParser.RULE_colwhen_param = 61;
SplParser.RULE_colcase = 62;
SplParser.RULE_colcase_when = 63;
SplParser.RULE_colcase_when_nested = 64;
SplParser.RULE_colcase_else = 65;

function SplgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_splg;
    return this;
}

SplgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SplgContext.prototype.constructor = SplgContext;

SplgContext.prototype.EOF = function() {
    return this.getToken(SplParser.EOF, 0);
};

SplgContext.prototype.define = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DefineContext);
    } else {
        return this.getTypedRuleContext(DefineContext,i);
    }
};

SplgContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterSplg(this);
	}
};

SplgContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitSplg(this);
	}
};




SplParser.SplgContext = SplgContext;

SplParser.prototype.splg = function() {

    var localctx = new SplgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SplParser.RULE_splg);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 132;
            this.define();
            this.state = 135; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SplParser.DEFINE);
        this.state = 137;
        this.match(SplParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DefineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_define;
    return this;
}

DefineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefineContext.prototype.constructor = DefineContext;

DefineContext.prototype.namespace = function() {
    return this.getTypedRuleContext(NamespaceContext,0);
};

DefineContext.prototype.table = function() {
    return this.getTypedRuleContext(TableContext,0);
};

DefineContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterDefine(this);
	}
};

DefineContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitDefine(this);
	}
};




SplParser.DefineContext = DefineContext;

SplParser.prototype.define = function() {

    var localctx = new DefineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SplParser.RULE_define);
    try {
        this.state = 141;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 139;
            this.namespace();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 140;
            this.table();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NamespaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_namespace;
    return this;
}

NamespaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamespaceContext.prototype.constructor = NamespaceContext;

NamespaceContext.prototype.namespace_def = function() {
    return this.getTypedRuleContext(Namespace_defContext,0);
};

NamespaceContext.prototype.SEMICOLON = function() {
    return this.getToken(SplParser.SEMICOLON, 0);
};

NamespaceContext.prototype.ns_type_def = function() {
    return this.getTypedRuleContext(Ns_type_defContext,0);
};

NamespaceContext.prototype.bundle_type = function() {
    return this.getTypedRuleContext(Bundle_typeContext,0);
};

NamespaceContext.prototype.begins_with = function() {
    return this.getTypedRuleContext(Begins_withContext,0);
};

NamespaceContext.prototype.ns_ctx = function() {
    return this.getTypedRuleContext(Ns_ctxContext,0);
};

NamespaceContext.prototype.ends_with = function() {
    return this.getTypedRuleContext(Ends_withContext,0);
};

NamespaceContext.prototype.file_pattern = function() {
    return this.getTypedRuleContext(File_patternContext,0);
};

NamespaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterNamespace(this);
	}
};

NamespaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitNamespace(this);
	}
};




SplParser.NamespaceContext = NamespaceContext;

SplParser.prototype.namespace = function() {

    var localctx = new NamespaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SplParser.RULE_namespace);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.namespace_def();
        this.state = 145;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        if(la_===1) {
            this.state = 144;
            this.ns_type_def();

        }
        this.state = 148;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.BUNDLETYPE) {
            this.state = 147;
            this.bundle_type();
        }

        this.state = 151;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.BEGINS) {
            this.state = 150;
            this.begins_with();
        }

        this.state = 154;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.CONTEXT) {
            this.state = 153;
            this.ns_ctx();
        }

        this.state = 157;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.ENDS) {
            this.state = 156;
            this.ends_with();
        }

        this.state = 160;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.FILEPATTERN) {
            this.state = 159;
            this.file_pattern();
        }

        this.state = 162;
        this.match(SplParser.SEMICOLON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Namespace_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_namespace_def;
    return this;
}

Namespace_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Namespace_defContext.prototype.constructor = Namespace_defContext;

Namespace_defContext.prototype.DEFINE = function() {
    return this.getToken(SplParser.DEFINE, 0);
};

Namespace_defContext.prototype.NAMESPACE = function() {
    return this.getToken(SplParser.NAMESPACE, 0);
};

Namespace_defContext.prototype.ns_name = function() {
    return this.getTypedRuleContext(Ns_nameContext,0);
};

Namespace_defContext.prototype.DESCRIPTION = function() {
    return this.getToken(SplParser.DESCRIPTION, 0);
};

Namespace_defContext.prototype.QUOTED_LABEL = function() {
    return this.getToken(SplParser.QUOTED_LABEL, 0);
};

Namespace_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterNamespace_def(this);
	}
};

Namespace_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitNamespace_def(this);
	}
};




SplParser.Namespace_defContext = Namespace_defContext;

SplParser.prototype.namespace_def = function() {

    var localctx = new Namespace_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SplParser.RULE_namespace_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        this.match(SplParser.DEFINE);
        this.state = 165;
        this.match(SplParser.NAMESPACE);
        this.state = 166;
        this.ns_name();
        this.state = 167;
        this.match(SplParser.DESCRIPTION);
        this.state = 168;
        this.match(SplParser.QUOTED_LABEL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Ns_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_ns_name;
    return this;
}

Ns_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ns_nameContext.prototype.constructor = Ns_nameContext;

Ns_nameContext.prototype.IDENT = function() {
    return this.getToken(SplParser.IDENT, 0);
};

Ns_nameContext.prototype.IDENT_DOT = function() {
    return this.getToken(SplParser.IDENT_DOT, 0);
};

Ns_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterNs_name(this);
	}
};

Ns_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitNs_name(this);
	}
};




SplParser.Ns_nameContext = Ns_nameContext;

SplParser.prototype.ns_name = function() {

    var localctx = new Ns_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SplParser.RULE_ns_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        _la = this._input.LA(1);
        if(!(_la===SplParser.IDENT || _la===SplParser.IDENT_DOT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Ns_type_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_ns_type_def;
    return this;
}

Ns_type_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ns_type_defContext.prototype.constructor = Ns_type_defContext;

Ns_type_defContext.prototype.TYPE = function() {
    return this.getToken(SplParser.TYPE, 0);
};

Ns_type_defContext.prototype.NS_TYPES = function() {
    return this.getToken(SplParser.NS_TYPES, 0);
};

Ns_type_defContext.prototype.REF = function() {
    return this.getToken(SplParser.REF, 0);
};

Ns_type_defContext.prototype.ns_ref_name = function() {
    return this.getTypedRuleContext(Ns_ref_nameContext,0);
};

Ns_type_defContext.prototype.LOCK = function() {
    return this.getToken(SplParser.LOCK, 0);
};

Ns_type_defContext.prototype.SOLR = function() {
    return this.getToken(SplParser.SOLR, 0);
};

Ns_type_defContext.prototype.XML = function() {
    return this.getToken(SplParser.XML, 0);
};

Ns_type_defContext.prototype.JSON = function() {
    return this.getToken(SplParser.JSON, 0);
};

Ns_type_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterNs_type_def(this);
	}
};

Ns_type_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitNs_type_def(this);
	}
};




SplParser.Ns_type_defContext = Ns_type_defContext;

SplParser.prototype.ns_type_def = function() {

    var localctx = new Ns_type_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SplParser.RULE_ns_type_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.TYPE) {
            this.state = 172;
            this.match(SplParser.TYPE);
            this.state = 173;
            this.match(SplParser.NS_TYPES);
        }

        this.state = 178;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.REF) {
            this.state = 176;
            this.match(SplParser.REF);
            this.state = 177;
            this.ns_ref_name();
        }

        this.state = 181;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.LOCK) {
            this.state = 180;
            this.match(SplParser.LOCK);
        }

        this.state = 184;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.SOLR) {
            this.state = 183;
            this.match(SplParser.SOLR);
        }

        this.state = 187;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.XML) {
            this.state = 186;
            this.match(SplParser.XML);
        }

        this.state = 190;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.JSON) {
            this.state = 189;
            this.match(SplParser.JSON);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Ns_ref_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_ns_ref_name;
    return this;
}

Ns_ref_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ns_ref_nameContext.prototype.constructor = Ns_ref_nameContext;

Ns_ref_nameContext.prototype.IDENT = function() {
    return this.getToken(SplParser.IDENT, 0);
};

Ns_ref_nameContext.prototype.IDENT_DOT = function() {
    return this.getToken(SplParser.IDENT_DOT, 0);
};

Ns_ref_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterNs_ref_name(this);
	}
};

Ns_ref_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitNs_ref_name(this);
	}
};




SplParser.Ns_ref_nameContext = Ns_ref_nameContext;

SplParser.prototype.ns_ref_name = function() {

    var localctx = new Ns_ref_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SplParser.RULE_ns_ref_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        _la = this._input.LA(1);
        if(!(_la===SplParser.IDENT || _la===SplParser.IDENT_DOT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Bundle_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_bundle_type;
    return this;
}

Bundle_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Bundle_typeContext.prototype.constructor = Bundle_typeContext;

Bundle_typeContext.prototype.BUNDLETYPE = function() {
    return this.getToken(SplParser.BUNDLETYPE, 0);
};

Bundle_typeContext.prototype.QUOTED_LABEL = function() {
    return this.getToken(SplParser.QUOTED_LABEL, 0);
};

Bundle_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterBundle_type(this);
	}
};

Bundle_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitBundle_type(this);
	}
};




SplParser.Bundle_typeContext = Bundle_typeContext;

SplParser.prototype.bundle_type = function() {

    var localctx = new Bundle_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SplParser.RULE_bundle_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 194;
        this.match(SplParser.BUNDLETYPE);
        this.state = 195;
        this.match(SplParser.QUOTED_LABEL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Ns_ctxContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_ns_ctx;
    return this;
}

Ns_ctxContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ns_ctxContext.prototype.constructor = Ns_ctxContext;

Ns_ctxContext.prototype.CONTEXT = function() {
    return this.getToken(SplParser.CONTEXT, 0);
};

Ns_ctxContext.prototype.REGEX = function() {
    return this.getToken(SplParser.REGEX, 0);
};

Ns_ctxContext.prototype.AS = function() {
    return this.getToken(SplParser.AS, 0);
};

Ns_ctxContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.IDENT);
    } else {
        return this.getToken(SplParser.IDENT, i);
    }
};


Ns_ctxContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.COMMA);
    } else {
        return this.getToken(SplParser.COMMA, i);
    }
};


Ns_ctxContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterNs_ctx(this);
	}
};

Ns_ctxContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitNs_ctx(this);
	}
};




SplParser.Ns_ctxContext = Ns_ctxContext;

SplParser.prototype.ns_ctx = function() {

    var localctx = new Ns_ctxContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SplParser.RULE_ns_ctx);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        this.match(SplParser.CONTEXT);
        this.state = 198;
        this.match(SplParser.REGEX);
        this.state = 199;
        this.match(SplParser.AS);
        this.state = 200;
        this.match(SplParser.IDENT);
        this.state = 205;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SplParser.COMMA) {
            this.state = 201;
            this.match(SplParser.COMMA);
            this.state = 202;
            this.match(SplParser.IDENT);
            this.state = 207;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Begins_withContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_begins_with;
    return this;
}

Begins_withContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Begins_withContext.prototype.constructor = Begins_withContext;

Begins_withContext.prototype.BEGINS = function() {
    return this.getToken(SplParser.BEGINS, 0);
};

Begins_withContext.prototype.WITH = function() {
    return this.getToken(SplParser.WITH, 0);
};

Begins_withContext.prototype.REGEX = function() {
    return this.getToken(SplParser.REGEX, 0);
};

Begins_withContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterBegins_with(this);
	}
};

Begins_withContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitBegins_with(this);
	}
};




SplParser.Begins_withContext = Begins_withContext;

SplParser.prototype.begins_with = function() {

    var localctx = new Begins_withContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SplParser.RULE_begins_with);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this.match(SplParser.BEGINS);
        this.state = 209;
        this.match(SplParser.WITH);
        this.state = 210;
        this.match(SplParser.REGEX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Ends_withContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_ends_with;
    return this;
}

Ends_withContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ends_withContext.prototype.constructor = Ends_withContext;

Ends_withContext.prototype.ENDS = function() {
    return this.getToken(SplParser.ENDS, 0);
};

Ends_withContext.prototype.WITH = function() {
    return this.getToken(SplParser.WITH, 0);
};

Ends_withContext.prototype.REGEX = function() {
    return this.getToken(SplParser.REGEX, 0);
};

Ends_withContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterEnds_with(this);
	}
};

Ends_withContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitEnds_with(this);
	}
};




SplParser.Ends_withContext = Ends_withContext;

SplParser.prototype.ends_with = function() {

    var localctx = new Ends_withContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SplParser.RULE_ends_with);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        this.match(SplParser.ENDS);
        this.state = 213;
        this.match(SplParser.WITH);
        this.state = 214;
        this.match(SplParser.REGEX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function File_patternContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_file_pattern;
    return this;
}

File_patternContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
File_patternContext.prototype.constructor = File_patternContext;

File_patternContext.prototype.FILEPATTERN = function() {
    return this.getToken(SplParser.FILEPATTERN, 0);
};

File_patternContext.prototype.REGEX = function() {
    return this.getToken(SplParser.REGEX, 0);
};

File_patternContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterFile_pattern(this);
	}
};

File_patternContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitFile_pattern(this);
	}
};




SplParser.File_patternContext = File_patternContext;

SplParser.prototype.file_pattern = function() {

    var localctx = new File_patternContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SplParser.RULE_file_pattern);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 216;
        this.match(SplParser.FILEPATTERN);
        this.state = 217;
        this.match(SplParser.REGEX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_table;
    return this;
}

TableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TableContext.prototype.constructor = TableContext;

TableContext.prototype.table_def = function() {
    return this.getTypedRuleContext(Table_defContext,0);
};

TableContext.prototype.icon_def = function() {
    return this.getTypedRuleContext(Icon_defContext,0);
};

TableContext.prototype.add_context = function() {
    return this.getTypedRuleContext(Add_contextContext,0);
};

TableContext.prototype.SEMICOLON = function() {
    return this.getToken(SplParser.SEMICOLON, 0);
};

TableContext.prototype.set_xml_ns = function() {
    return this.getTypedRuleContext(Set_xml_nsContext,0);
};

TableContext.prototype.multiline = function() {
    return this.getTypedRuleContext(MultilineContext,0);
};

TableContext.prototype.skip_n = function() {
    return this.getTypedRuleContext(Skip_nContext,0);
};

TableContext.prototype.column_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Column_defContext);
    } else {
        return this.getTypedRuleContext(Column_defContext,i);
    }
};

TableContext.prototype.col_op_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Col_op_defContext);
    } else {
        return this.getTypedRuleContext(Col_op_defContext,i);
    }
};

TableContext.prototype.constrain = function() {
    return this.getTypedRuleContext(ConstrainContext,0);
};

TableContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterTable(this);
	}
};

TableContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitTable(this);
	}
};




SplParser.TableContext = TableContext;

SplParser.prototype.table = function() {

    var localctx = new TableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SplParser.RULE_table);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 219;
        this.table_def();
        this.state = 220;
        this.icon_def();
        this.state = 222;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.SETXMLNAMESPACE) {
            this.state = 221;
            this.set_xml_ns();
        }

        this.state = 225;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.MULTILINE) {
            this.state = 224;
            this.multiline();
        }

        this.state = 228;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.SKIP_N) {
            this.state = 227;
            this.skip_n();
        }

        this.state = 231; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 230;
            this.column_def();
            this.state = 233; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SplParser.COLUMN);
        this.state = 235;
        this.add_context();
        this.state = 239;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (SplParser.COLDROP - 53)) | (1 << (SplParser.COLFILL - 53)) | (1 << (SplParser.COLJOIN - 53)) | (1 << (SplParser.COLCOPY - 53)) | (1 << (SplParser.COLSPLIT - 53)) | (1 << (SplParser.COLREP - 53)) | (1 << (SplParser.COLMAP - 53)) | (1 << (SplParser.COLCASE - 53)) | (1 << (SplParser.COLCOUNT - 53)) | (1 << (SplParser.COLPRINT - 53)) | (1 << (SplParser.COLCALC_CATCH_ALL - 53)))) !== 0)) {
            this.state = 236;
            this.col_op_def();
            this.state = 241;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 243;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.CONSTRAIN) {
            this.state = 242;
            this.constrain();
        }

        this.state = 245;
        this.match(SplParser.SEMICOLON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Table_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_table_def;
    return this;
}

Table_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Table_defContext.prototype.constructor = Table_defContext;

Table_defContext.prototype.DEFINE = function() {
    return this.getToken(SplParser.DEFINE, 0);
};

Table_defContext.prototype.TABLE = function() {
    return this.getToken(SplParser.TABLE, 0);
};

Table_defContext.prototype.IDENT = function() {
    return this.getToken(SplParser.IDENT, 0);
};

Table_defContext.prototype.NAMESPACE = function() {
    return this.getToken(SplParser.NAMESPACE, 0);
};

Table_defContext.prototype.ns_name = function() {
    return this.getTypedRuleContext(Ns_nameContext,0);
};

Table_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterTable_def(this);
	}
};

Table_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitTable_def(this);
	}
};




SplParser.Table_defContext = Table_defContext;

SplParser.prototype.table_def = function() {

    var localctx = new Table_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SplParser.RULE_table_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 247;
        this.match(SplParser.DEFINE);
        this.state = 248;
        this.match(SplParser.TABLE);
        this.state = 249;
        this.match(SplParser.IDENT);
        this.state = 250;
        this.match(SplParser.NAMESPACE);
        this.state = 251;
        this.ns_name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Icon_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_icon_def;
    return this;
}

Icon_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Icon_defContext.prototype.constructor = Icon_defContext;

Icon_defContext.prototype.ICON = function() {
    return this.getToken(SplParser.ICON, 0);
};

Icon_defContext.prototype.list_basic_icon_def = function() {
    return this.getTypedRuleContext(List_basic_icon_defContext,0);
};

Icon_defContext.prototype.nvpair_icon_def = function() {
    return this.getTypedRuleContext(Nvpair_icon_defContext,0);
};

Icon_defContext.prototype.aligned_basic_icon_def = function() {
    return this.getTypedRuleContext(Aligned_basic_icon_defContext,0);
};

Icon_defContext.prototype.xml_icon_def = function() {
    return this.getTypedRuleContext(Xml_icon_defContext,0);
};

Icon_defContext.prototype.csv_icon_def = function() {
    return this.getTypedRuleContext(Csv_icon_defContext,0);
};

Icon_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterIcon_def(this);
	}
};

Icon_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitIcon_def(this);
	}
};




SplParser.Icon_defContext = Icon_defContext;

SplParser.prototype.icon_def = function() {

    var localctx = new Icon_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SplParser.RULE_icon_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 253;
        this.match(SplParser.ICON);
        this.state = 259;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SplParser.LIST_BASIC:
            this.state = 254;
            this.list_basic_icon_def();
            break;
        case SplParser.NV_PAIR:
            this.state = 255;
            this.nvpair_icon_def();
            break;
        case SplParser.ALIGNED_BASIC:
            this.state = 256;
            this.aligned_basic_icon_def();
            break;
        case SplParser.XML_BASIC:
            this.state = 257;
            this.xml_icon_def();
            break;
        case SplParser.CSV_WITHHEADER:
        case SplParser.CSV_NOHEADER:
            this.state = 258;
            this.csv_icon_def();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Csv_icon_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_csv_icon_def;
    return this;
}

Csv_icon_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Csv_icon_defContext.prototype.constructor = Csv_icon_defContext;

Csv_icon_defContext.prototype.REGEX = function() {
    return this.getToken(SplParser.REGEX, 0);
};

Csv_icon_defContext.prototype.CSV_WITHHEADER = function() {
    return this.getToken(SplParser.CSV_WITHHEADER, 0);
};

Csv_icon_defContext.prototype.CSV_NOHEADER = function() {
    return this.getToken(SplParser.CSV_NOHEADER, 0);
};

Csv_icon_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterCsv_icon_def(this);
	}
};

Csv_icon_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitCsv_icon_def(this);
	}
};




SplParser.Csv_icon_defContext = Csv_icon_defContext;

SplParser.prototype.csv_icon_def = function() {

    var localctx = new Csv_icon_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SplParser.RULE_csv_icon_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 261;
        _la = this._input.LA(1);
        if(!(_la===SplParser.CSV_WITHHEADER || _la===SplParser.CSV_NOHEADER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 262;
        this.match(SplParser.REGEX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function List_basic_icon_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_list_basic_icon_def;
    return this;
}

List_basic_icon_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
List_basic_icon_defContext.prototype.constructor = List_basic_icon_defContext;

List_basic_icon_defContext.prototype.LIST_BASIC = function() {
    return this.getToken(SplParser.LIST_BASIC, 0);
};

List_basic_icon_defContext.prototype.LINEGRAB = function() {
    return this.getToken(SplParser.LINEGRAB, 0);
};

List_basic_icon_defContext.prototype.REGEX = function() {
    return this.getToken(SplParser.REGEX, 0);
};

List_basic_icon_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterList_basic_icon_def(this);
	}
};

List_basic_icon_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitList_basic_icon_def(this);
	}
};




SplParser.List_basic_icon_defContext = List_basic_icon_defContext;

SplParser.prototype.list_basic_icon_def = function() {

    var localctx = new List_basic_icon_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SplParser.RULE_list_basic_icon_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 264;
        this.match(SplParser.LIST_BASIC);
        this.state = 265;
        this.match(SplParser.LINEGRAB);
        this.state = 266;
        this.match(SplParser.REGEX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Nvpair_icon_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_nvpair_icon_def;
    return this;
}

Nvpair_icon_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Nvpair_icon_defContext.prototype.constructor = Nvpair_icon_defContext;

Nvpair_icon_defContext.prototype.NV_PAIR = function() {
    return this.getToken(SplParser.NV_PAIR, 0);
};

Nvpair_icon_defContext.prototype.REGEX = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.REGEX);
    } else {
        return this.getToken(SplParser.REGEX, i);
    }
};


Nvpair_icon_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterNvpair_icon_def(this);
	}
};

Nvpair_icon_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitNvpair_icon_def(this);
	}
};




SplParser.Nvpair_icon_defContext = Nvpair_icon_defContext;

SplParser.prototype.nvpair_icon_def = function() {

    var localctx = new Nvpair_icon_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SplParser.RULE_nvpair_icon_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 268;
        this.match(SplParser.NV_PAIR);
        this.state = 269;
        this.match(SplParser.REGEX);
        this.state = 270;
        this.match(SplParser.REGEX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Aligned_basic_icon_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_aligned_basic_icon_def;
    return this;
}

Aligned_basic_icon_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Aligned_basic_icon_defContext.prototype.constructor = Aligned_basic_icon_defContext;

Aligned_basic_icon_defContext.prototype.ALIGNED_BASIC = function() {
    return this.getToken(SplParser.ALIGNED_BASIC, 0);
};

Aligned_basic_icon_defContext.prototype.QUOTED_LABEL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.QUOTED_LABEL);
    } else {
        return this.getToken(SplParser.QUOTED_LABEL, i);
    }
};


Aligned_basic_icon_defContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.COMMA);
    } else {
        return this.getToken(SplParser.COMMA, i);
    }
};


Aligned_basic_icon_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterAligned_basic_icon_def(this);
	}
};

Aligned_basic_icon_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitAligned_basic_icon_def(this);
	}
};




SplParser.Aligned_basic_icon_defContext = Aligned_basic_icon_defContext;

SplParser.prototype.aligned_basic_icon_def = function() {

    var localctx = new Aligned_basic_icon_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, SplParser.RULE_aligned_basic_icon_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 272;
        this.match(SplParser.ALIGNED_BASIC);
        this.state = 273;
        this.match(SplParser.QUOTED_LABEL);
        this.state = 274;
        this.match(SplParser.COMMA);
        this.state = 275;
        this.match(SplParser.QUOTED_LABEL);
        this.state = 276;
        this.match(SplParser.COMMA);
        this.state = 277;
        this.match(SplParser.QUOTED_LABEL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Xml_icon_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_xml_icon_def;
    return this;
}

Xml_icon_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Xml_icon_defContext.prototype.constructor = Xml_icon_defContext;

Xml_icon_defContext.prototype.XML_BASIC = function() {
    return this.getToken(SplParser.XML_BASIC, 0);
};

Xml_icon_defContext.prototype.REGEX = function() {
    return this.getToken(SplParser.REGEX, 0);
};

Xml_icon_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterXml_icon_def(this);
	}
};

Xml_icon_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitXml_icon_def(this);
	}
};




SplParser.Xml_icon_defContext = Xml_icon_defContext;

SplParser.prototype.xml_icon_def = function() {

    var localctx = new Xml_icon_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, SplParser.RULE_xml_icon_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 279;
        this.match(SplParser.XML_BASIC);
        this.state = 280;
        this.match(SplParser.REGEX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MultilineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_multiline;
    return this;
}

MultilineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultilineContext.prototype.constructor = MultilineContext;

MultilineContext.prototype.MULTILINE = function() {
    return this.getToken(SplParser.MULTILINE, 0);
};

MultilineContext.prototype.REGEX = function() {
    return this.getToken(SplParser.REGEX, 0);
};

MultilineContext.prototype.QUOTED_LABEL = function() {
    return this.getToken(SplParser.QUOTED_LABEL, 0);
};

MultilineContext.prototype.NOT = function() {
    return this.getToken(SplParser.NOT, 0);
};

MultilineContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterMultiline(this);
	}
};

MultilineContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitMultiline(this);
	}
};




SplParser.MultilineContext = MultilineContext;

SplParser.prototype.multiline = function() {

    var localctx = new MultilineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, SplParser.RULE_multiline);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 282;
        this.match(SplParser.MULTILINE);
        this.state = 284;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.NOT) {
            this.state = 283;
            this.match(SplParser.NOT);
        }

        this.state = 286;
        this.match(SplParser.REGEX);
        this.state = 287;
        this.match(SplParser.QUOTED_LABEL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Skip_nContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_skip_n;
    return this;
}

Skip_nContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Skip_nContext.prototype.constructor = Skip_nContext;

Skip_nContext.prototype.SKIP_N = function() {
    return this.getToken(SplParser.SKIP_N, 0);
};

Skip_nContext.prototype.INT = function() {
    return this.getToken(SplParser.INT, 0);
};

Skip_nContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterSkip_n(this);
	}
};

Skip_nContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitSkip_n(this);
	}
};




SplParser.Skip_nContext = Skip_nContext;

SplParser.prototype.skip_n = function() {

    var localctx = new Skip_nContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, SplParser.RULE_skip_n);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 289;
        this.match(SplParser.SKIP_N);
        this.state = 290;
        this.match(SplParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Set_xml_nsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_set_xml_ns;
    return this;
}

Set_xml_nsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Set_xml_nsContext.prototype.constructor = Set_xml_nsContext;

Set_xml_nsContext.prototype.SETXMLNAMESPACE = function() {
    return this.getToken(SplParser.SETXMLNAMESPACE, 0);
};

Set_xml_nsContext.prototype.REGEX = function() {
    return this.getToken(SplParser.REGEX, 0);
};

Set_xml_nsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterSet_xml_ns(this);
	}
};

Set_xml_nsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitSet_xml_ns(this);
	}
};




SplParser.Set_xml_nsContext = Set_xml_nsContext;

SplParser.prototype.set_xml_ns = function() {

    var localctx = new Set_xml_nsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, SplParser.RULE_set_xml_ns);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 292;
        this.match(SplParser.SETXMLNAMESPACE);
        this.state = 293;
        this.match(SplParser.REGEX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Add_contextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_add_context;
    return this;
}

Add_contextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Add_contextContext.prototype.constructor = Add_contextContext;

Add_contextContext.prototype.ADD_CONTEXT = function() {
    return this.getToken(SplParser.ADD_CONTEXT, 0);
};

Add_contextContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SplParser.OPENPARENTHESIS, 0);
};

Add_contextContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.IDENT);
    } else {
        return this.getToken(SplParser.IDENT, i);
    }
};


Add_contextContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SplParser.CLOSEPARENTHESIS, 0);
};

Add_contextContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.COMMA);
    } else {
        return this.getToken(SplParser.COMMA, i);
    }
};


Add_contextContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterAdd_context(this);
	}
};

Add_contextContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitAdd_context(this);
	}
};




SplParser.Add_contextContext = Add_contextContext;

SplParser.prototype.add_context = function() {

    var localctx = new Add_contextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, SplParser.RULE_add_context);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 295;
        this.match(SplParser.ADD_CONTEXT);
        this.state = 296;
        this.match(SplParser.OPENPARENTHESIS);
        this.state = 297;
        this.match(SplParser.IDENT);
        this.state = 302;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SplParser.COMMA) {
            this.state = 298;
            this.match(SplParser.COMMA);

            this.state = 299;
            this.match(SplParser.IDENT);
            this.state = 304;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 305;
        this.match(SplParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstrainContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_constrain;
    return this;
}

ConstrainContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstrainContext.prototype.constructor = ConstrainContext;

ConstrainContext.prototype.CONSTRAIN = function() {
    return this.getToken(SplParser.CONSTRAIN, 0);
};

ConstrainContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SplParser.OPENPARENTHESIS, 0);
};

ConstrainContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SplParser.CLOSEPARENTHESIS, 0);
};

ConstrainContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.IDENT);
    } else {
        return this.getToken(SplParser.IDENT, i);
    }
};


ConstrainContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.COMMA);
    } else {
        return this.getToken(SplParser.COMMA, i);
    }
};


ConstrainContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterConstrain(this);
	}
};

ConstrainContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitConstrain(this);
	}
};




SplParser.ConstrainContext = ConstrainContext;

SplParser.prototype.constrain = function() {

    var localctx = new ConstrainContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, SplParser.RULE_constrain);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 307;
        this.match(SplParser.CONSTRAIN);
        this.state = 308;
        this.match(SplParser.OPENPARENTHESIS);
        this.state = 317;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.IDENT) {
            this.state = 309;
            this.match(SplParser.IDENT);
            this.state = 314;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SplParser.COMMA) {
                this.state = 310;
                this.match(SplParser.COMMA);

                this.state = 311;
                this.match(SplParser.IDENT);
                this.state = 316;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 319;
        this.match(SplParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Column_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_column_def;
    return this;
}

Column_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Column_defContext.prototype.constructor = Column_defContext;

Column_defContext.prototype.COLUMN = function() {
    return this.getToken(SplParser.COLUMN, 0);
};

Column_defContext.prototype.IDENT = function() {
    return this.getToken(SplParser.IDENT, 0);
};

Column_defContext.prototype.data_type = function() {
    return this.getTypedRuleContext(Data_typeContext,0);
};

Column_defContext.prototype.obj_ref = function() {
    return this.getTypedRuleContext(Obj_refContext,0);
};

Column_defContext.prototype.label_def = function() {
    return this.getTypedRuleContext(Label_defContext,0);
};

Column_defContext.prototype.as_def = function() {
    return this.getTypedRuleContext(As_defContext,0);
};

Column_defContext.prototype.alignment = function() {
    return this.getTypedRuleContext(AlignmentContext,0);
};

Column_defContext.prototype.with_name_def = function() {
    return this.getTypedRuleContext(With_name_defContext,0);
};

Column_defContext.prototype.solr_mapping = function() {
    return this.getTypedRuleContext(Solr_mappingContext,0);
};

Column_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColumn_def(this);
	}
};

Column_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColumn_def(this);
	}
};




SplParser.Column_defContext = Column_defContext;

SplParser.prototype.column_def = function() {

    var localctx = new Column_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, SplParser.RULE_column_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 321;
        this.match(SplParser.COLUMN);
        this.state = 322;
        this.match(SplParser.IDENT);
        this.state = 324;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.OPENPARENTHESIS) {
            this.state = 323;
            this.obj_ref();
        }

        this.state = 326;
        this.data_type();
        this.state = 328;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.LT) {
            this.state = 327;
            this.label_def();
        }

        this.state = 331;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.AS) {
            this.state = 330;
            this.as_def();
        }

        this.state = 334;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 106)) & ~0x1f) == 0 && ((1 << (_la - 106)) & ((1 << (SplParser.ALIGNED_BASIC_L - 106)) | (1 << (SplParser.ALIGNED_BASIC_R - 106)) | (1 << (SplParser.ALIGNED_BASIC_C - 106)))) !== 0)) {
            this.state = 333;
            this.alignment();
        }

        this.state = 337;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.WITH_NAME) {
            this.state = 336;
            this.with_name_def();
        }

        this.state = 340;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.WITH) {
            this.state = 339;
            this.solr_mapping();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Obj_refContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_obj_ref;
    return this;
}

Obj_refContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Obj_refContext.prototype.constructor = Obj_refContext;

Obj_refContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SplParser.OPENPARENTHESIS, 0);
};

Obj_refContext.prototype.IDENT_DOT = function() {
    return this.getToken(SplParser.IDENT_DOT, 0);
};

Obj_refContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SplParser.CLOSEPARENTHESIS, 0);
};

Obj_refContext.prototype.COLON = function() {
    return this.getToken(SplParser.COLON, 0);
};

Obj_refContext.prototype.IDENT = function() {
    return this.getToken(SplParser.IDENT, 0);
};

Obj_refContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterObj_ref(this);
	}
};

Obj_refContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitObj_ref(this);
	}
};




SplParser.Obj_refContext = Obj_refContext;

SplParser.prototype.obj_ref = function() {

    var localctx = new Obj_refContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, SplParser.RULE_obj_ref);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 342;
        this.match(SplParser.OPENPARENTHESIS);
        this.state = 343;
        this.match(SplParser.IDENT_DOT);
        this.state = 346;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.COLON) {
            this.state = 344;
            this.match(SplParser.COLON);
            this.state = 345;
            this.match(SplParser.IDENT);
        }

        this.state = 348;
        this.match(SplParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Data_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_data_type;
    return this;
}

Data_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Data_typeContext.prototype.constructor = Data_typeContext;

Data_typeContext.prototype.OPENSQUARE = function() {
    return this.getToken(SplParser.OPENSQUARE, 0);
};

Data_typeContext.prototype.DT = function() {
    return this.getToken(SplParser.DT, 0);
};

Data_typeContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SplParser.OPENPARENTHESIS, 0);
};

Data_typeContext.prototype.INT = function() {
    return this.getToken(SplParser.INT, 0);
};

Data_typeContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SplParser.CLOSEPARENTHESIS, 0);
};

Data_typeContext.prototype.COLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.COLON);
    } else {
        return this.getToken(SplParser.COLON, i);
    }
};


Data_typeContext.prototype.NULL_DEF = function() {
    return this.getToken(SplParser.NULL_DEF, 0);
};

Data_typeContext.prototype.CLOSESQUARE = function() {
    return this.getToken(SplParser.CLOSESQUARE, 0);
};

Data_typeContext.prototype.QUOTED_LABEL = function() {
    return this.getToken(SplParser.QUOTED_LABEL, 0);
};

Data_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterData_type(this);
	}
};

Data_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitData_type(this);
	}
};




SplParser.Data_typeContext = Data_typeContext;

SplParser.prototype.data_type = function() {

    var localctx = new Data_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, SplParser.RULE_data_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 350;
        this.match(SplParser.OPENSQUARE);
        this.state = 351;
        this.match(SplParser.DT);
        this.state = 352;
        this.match(SplParser.OPENPARENTHESIS);
        this.state = 353;
        this.match(SplParser.INT);
        this.state = 354;
        this.match(SplParser.CLOSEPARENTHESIS);
        this.state = 355;
        this.match(SplParser.COLON);
        this.state = 356;
        this.match(SplParser.NULL_DEF);
        this.state = 359;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SplParser.COLON) {
            this.state = 357;
            this.match(SplParser.COLON);
            this.state = 358;
            this.match(SplParser.QUOTED_LABEL);
        }

        this.state = 361;
        this.match(SplParser.CLOSESQUARE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Label_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_label_def;
    return this;
}

Label_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Label_defContext.prototype.constructor = Label_defContext;

Label_defContext.prototype.LT = function() {
    return this.getToken(SplParser.LT, 0);
};

Label_defContext.prototype.attrib_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Attrib_defContext);
    } else {
        return this.getTypedRuleContext(Attrib_defContext,i);
    }
};

Label_defContext.prototype.GT = function() {
    return this.getToken(SplParser.GT, 0);
};

Label_defContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.COMMA);
    } else {
        return this.getToken(SplParser.COMMA, i);
    }
};


Label_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterLabel_def(this);
	}
};

Label_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitLabel_def(this);
	}
};




SplParser.Label_defContext = Label_defContext;

SplParser.prototype.label_def = function() {

    var localctx = new Label_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, SplParser.RULE_label_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 363;
        this.match(SplParser.LT);
        this.state = 364;
        this.attrib_def();
        this.state = 369;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SplParser.COMMA) {
            this.state = 365;
            this.match(SplParser.COMMA);
            this.state = 366;
            this.attrib_def();
            this.state = 371;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 372;
        this.match(SplParser.GT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Attrib_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_attrib_def;
    return this;
}

Attrib_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Attrib_defContext.prototype.constructor = Attrib_defContext;

Attrib_defContext.prototype.colmeta_attrib_name = function() {
    return this.getTypedRuleContext(Colmeta_attrib_nameContext,0);
};

Attrib_defContext.prototype.colmeta_attrib_value = function() {
    return this.getTypedRuleContext(Colmeta_attrib_valueContext,0);
};

Attrib_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterAttrib_def(this);
	}
};

Attrib_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitAttrib_def(this);
	}
};




SplParser.Attrib_defContext = Attrib_defContext;

SplParser.prototype.attrib_def = function() {

    var localctx = new Attrib_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, SplParser.RULE_attrib_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 374;
        this.colmeta_attrib_name();
        this.state = 375;
        this.colmeta_attrib_value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colmeta_attrib_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_colmeta_attrib_name;
    return this;
}

Colmeta_attrib_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colmeta_attrib_nameContext.prototype.constructor = Colmeta_attrib_nameContext;

Colmeta_attrib_nameContext.prototype.COLMETA_LABEL = function() {
    return this.getToken(SplParser.COLMETA_LABEL, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_SYSID1 = function() {
    return this.getToken(SplParser.COLMETA_SYSID1, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_SYSID2 = function() {
    return this.getToken(SplParser.COLMETA_SYSID2, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_SYSID3 = function() {
    return this.getToken(SplParser.COLMETA_SYSID3, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_SESSID1 = function() {
    return this.getToken(SplParser.COLMETA_SESSID1, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_SESSID2 = function() {
    return this.getToken(SplParser.COLMETA_SESSID2, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_SESSID3 = function() {
    return this.getToken(SplParser.COLMETA_SESSID3, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_SESS_NAME = function() {
    return this.getToken(SplParser.COLMETA_SESS_NAME, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_SESS_ATTR = function() {
    return this.getToken(SplParser.COLMETA_SESS_ATTR, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_SESS_COUNT = function() {
    return this.getToken(SplParser.COLMETA_SESS_COUNT, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_FILENAME = function() {
    return this.getToken(SplParser.COLMETA_FILENAME, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_CONTENT = function() {
    return this.getToken(SplParser.COLMETA_CONTENT, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_FRAGMENT_ID = function() {
    return this.getToken(SplParser.COLMETA_FRAGMENT_ID, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_OBSURL = function() {
    return this.getToken(SplParser.COLMETA_OBSURL, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_OBSSIZE = function() {
    return this.getToken(SplParser.COLMETA_OBSSIZE, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_UPLOADEDBY = function() {
    return this.getToken(SplParser.COLMETA_UPLOADEDBY, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_FACET = function() {
    return this.getToken(SplParser.COLMETA_FACET, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_SEVERITY = function() {
    return this.getToken(SplParser.COLMETA_SEVERITY, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_UNITS = function() {
    return this.getToken(SplParser.COLMETA_UNITS, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_BEGIN_OFFSET = function() {
    return this.getToken(SplParser.COLMETA_BEGIN_OFFSET, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_NAMESPACE = function() {
    return this.getToken(SplParser.COLMETA_NAMESPACE, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_TYPE = function() {
    return this.getToken(SplParser.COLMETA_TYPE, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_TS = function() {
    return this.getToken(SplParser.COLMETA_TS, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_LINKED = function() {
    return this.getToken(SplParser.COLMETA_LINKED, 0);
};

Colmeta_attrib_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColmeta_attrib_name(this);
	}
};

Colmeta_attrib_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColmeta_attrib_name(this);
	}
};




SplParser.Colmeta_attrib_nameContext = Colmeta_attrib_nameContext;

SplParser.prototype.colmeta_attrib_name = function() {

    var localctx = new Colmeta_attrib_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, SplParser.RULE_colmeta_attrib_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 402;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SplParser.COLMETA_LABEL:
            this.state = 377;
            this.match(SplParser.COLMETA_LABEL);
            break;
        case SplParser.COLMETA_SYSID1:
            this.state = 378;
            this.match(SplParser.COLMETA_SYSID1);
            break;
        case SplParser.COLMETA_SYSID2:
            this.state = 379;
            this.match(SplParser.COLMETA_SYSID2);
            break;
        case SplParser.COLMETA_SYSID3:
            this.state = 380;
            this.match(SplParser.COLMETA_SYSID3);
            break;
        case SplParser.COLMETA_SESSID1:
            this.state = 381;
            this.match(SplParser.COLMETA_SESSID1);
            break;
        case SplParser.COLMETA_SESSID2:
            this.state = 382;
            this.match(SplParser.COLMETA_SESSID2);
            break;
        case SplParser.COLMETA_SESSID3:
            this.state = 383;
            this.match(SplParser.COLMETA_SESSID3);
            break;
        case SplParser.COLMETA_SESS_NAME:
            this.state = 384;
            this.match(SplParser.COLMETA_SESS_NAME);
            break;
        case SplParser.COLMETA_SESS_ATTR:
            this.state = 385;
            this.match(SplParser.COLMETA_SESS_ATTR);
            break;
        case SplParser.COLMETA_SESS_COUNT:
            this.state = 386;
            this.match(SplParser.COLMETA_SESS_COUNT);
            break;
        case SplParser.COLMETA_FILENAME:
            this.state = 387;
            this.match(SplParser.COLMETA_FILENAME);
            break;
        case SplParser.COLMETA_CONTENT:
            this.state = 388;
            this.match(SplParser.COLMETA_CONTENT);
            break;
        case SplParser.COLMETA_FRAGMENT_ID:
            this.state = 389;
            this.match(SplParser.COLMETA_FRAGMENT_ID);
            break;
        case SplParser.COLMETA_OBSURL:
            this.state = 390;
            this.match(SplParser.COLMETA_OBSURL);
            break;
        case SplParser.COLMETA_OBSSIZE:
            this.state = 391;
            this.match(SplParser.COLMETA_OBSSIZE);
            break;
        case SplParser.COLMETA_UPLOADEDBY:
            this.state = 392;
            this.match(SplParser.COLMETA_UPLOADEDBY);
            break;
        case SplParser.COLMETA_FACET:
            this.state = 393;
            this.match(SplParser.COLMETA_FACET);
            break;
        case SplParser.COLMETA_SEVERITY:
            this.state = 394;
            this.match(SplParser.COLMETA_SEVERITY);
            break;
        case SplParser.COLMETA_UNITS:
            this.state = 395;
            this.match(SplParser.COLMETA_UNITS);
            break;
        case SplParser.COLMETA_BEGIN_OFFSET:
            this.state = 396;
            this.match(SplParser.COLMETA_BEGIN_OFFSET);
            break;
        case SplParser.COLMETA_NAMESPACE:
            this.state = 397;
            this.match(SplParser.COLMETA_NAMESPACE);
            break;
        case SplParser.COLMETA_TYPE:
            this.state = 398;
            this.match(SplParser.COLMETA_TYPE);
            break;
        case SplParser.COLMETA_TS:
            this.state = 399;
            this.match(SplParser.COLMETA_TS);
            break;
        case SplParser.COLMETA_LINKED:
            this.state = 400;
            this.match(SplParser.COLMETA_LINKED);
            break;
        case SplParser.INT:
        case SplParser.QUOTED_LABEL:
        case SplParser.IDENT:
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colmeta_attrib_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_colmeta_attrib_value;
    return this;
}

Colmeta_attrib_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colmeta_attrib_valueContext.prototype.constructor = Colmeta_attrib_valueContext;

Colmeta_attrib_valueContext.prototype.QUOTED_LABEL = function() {
    return this.getToken(SplParser.QUOTED_LABEL, 0);
};

Colmeta_attrib_valueContext.prototype.IDENT = function() {
    return this.getToken(SplParser.IDENT, 0);
};

Colmeta_attrib_valueContext.prototype.INT = function() {
    return this.getToken(SplParser.INT, 0);
};

Colmeta_attrib_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColmeta_attrib_value(this);
	}
};

Colmeta_attrib_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColmeta_attrib_value(this);
	}
};




SplParser.Colmeta_attrib_valueContext = Colmeta_attrib_valueContext;

SplParser.prototype.colmeta_attrib_value = function() {

    var localctx = new Colmeta_attrib_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, SplParser.RULE_colmeta_attrib_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 404;
        _la = this._input.LA(1);
        if(!(_la===SplParser.INT || _la===SplParser.QUOTED_LABEL || _la===SplParser.IDENT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function As_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_as_def;
    return this;
}

As_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
As_defContext.prototype.constructor = As_defContext;

As_defContext.prototype.AS = function() {
    return this.getToken(SplParser.AS, 0);
};

As_defContext.prototype.INT = function() {
    return this.getToken(SplParser.INT, 0);
};

As_defContext.prototype.QUOTED_LABEL = function() {
    return this.getToken(SplParser.QUOTED_LABEL, 0);
};

As_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterAs_def(this);
	}
};

As_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitAs_def(this);
	}
};




SplParser.As_defContext = As_defContext;

SplParser.prototype.as_def = function() {

    var localctx = new As_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, SplParser.RULE_as_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 406;
        this.match(SplParser.AS);
        this.state = 407;
        _la = this._input.LA(1);
        if(!(_la===SplParser.INT || _la===SplParser.QUOTED_LABEL)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function With_name_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_with_name_def;
    return this;
}

With_name_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
With_name_defContext.prototype.constructor = With_name_defContext;

With_name_defContext.prototype.WITH_NAME = function() {
    return this.getToken(SplParser.WITH_NAME, 0);
};

With_name_defContext.prototype.QUOTED_LABEL = function() {
    return this.getToken(SplParser.QUOTED_LABEL, 0);
};

With_name_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterWith_name_def(this);
	}
};

With_name_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitWith_name_def(this);
	}
};




SplParser.With_name_defContext = With_name_defContext;

SplParser.prototype.with_name_def = function() {

    var localctx = new With_name_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, SplParser.RULE_with_name_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 409;
        this.match(SplParser.WITH_NAME);
        this.state = 410;
        this.match(SplParser.QUOTED_LABEL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Solr_mappingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_solr_mapping;
    return this;
}

Solr_mappingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Solr_mappingContext.prototype.constructor = Solr_mappingContext;

Solr_mappingContext.prototype.WITH = function() {
    return this.getToken(SplParser.WITH, 0);
};

Solr_mappingContext.prototype.SOLRMAPPING = function() {
    return this.getToken(SplParser.SOLRMAPPING, 0);
};

Solr_mappingContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SplParser.OPENPARENTHESIS, 0);
};

Solr_mappingContext.prototype.solr_mapping_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Solr_mapping_defContext);
    } else {
        return this.getTypedRuleContext(Solr_mapping_defContext,i);
    }
};

Solr_mappingContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SplParser.CLOSEPARENTHESIS, 0);
};

Solr_mappingContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.COMMA);
    } else {
        return this.getToken(SplParser.COMMA, i);
    }
};


Solr_mappingContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterSolr_mapping(this);
	}
};

Solr_mappingContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitSolr_mapping(this);
	}
};




SplParser.Solr_mappingContext = Solr_mappingContext;

SplParser.prototype.solr_mapping = function() {

    var localctx = new Solr_mappingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, SplParser.RULE_solr_mapping);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 412;
        this.match(SplParser.WITH);
        this.state = 413;
        this.match(SplParser.SOLRMAPPING);
        this.state = 414;
        this.match(SplParser.OPENPARENTHESIS);
        this.state = 415;
        this.solr_mapping_def();
        this.state = 420;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SplParser.COMMA) {
            this.state = 416;
            this.match(SplParser.COMMA);
            this.state = 417;
            this.solr_mapping_def();
            this.state = 422;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 423;
        this.match(SplParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Solr_mapping_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_solr_mapping_def;
    return this;
}

Solr_mapping_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Solr_mapping_defContext.prototype.constructor = Solr_mapping_defContext;

Solr_mapping_defContext.prototype.solr_mapping_attr_name = function() {
    return this.getTypedRuleContext(Solr_mapping_attr_nameContext,0);
};

Solr_mapping_defContext.prototype.solr_mapping_attr_value = function() {
    return this.getTypedRuleContext(Solr_mapping_attr_valueContext,0);
};

Solr_mapping_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterSolr_mapping_def(this);
	}
};

Solr_mapping_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitSolr_mapping_def(this);
	}
};




SplParser.Solr_mapping_defContext = Solr_mapping_defContext;

SplParser.prototype.solr_mapping_def = function() {

    var localctx = new Solr_mapping_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, SplParser.RULE_solr_mapping_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 425;
        this.solr_mapping_attr_name();
        this.state = 426;
        this.solr_mapping_attr_value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Solr_mapping_attr_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_solr_mapping_attr_name;
    return this;
}

Solr_mapping_attr_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Solr_mapping_attr_nameContext.prototype.constructor = Solr_mapping_attr_nameContext;

Solr_mapping_attr_nameContext.prototype.SOLRMAPPING_NAME = function() {
    return this.getToken(SplParser.SOLRMAPPING_NAME, 0);
};

Solr_mapping_attr_nameContext.prototype.SOLRMAPPING_DATATYPE = function() {
    return this.getToken(SplParser.SOLRMAPPING_DATATYPE, 0);
};

Solr_mapping_attr_nameContext.prototype.SOLRMAPPING_UNIQFLDEF = function() {
    return this.getToken(SplParser.SOLRMAPPING_UNIQFLDEF, 0);
};

Solr_mapping_attr_nameContext.prototype.SOLRMAPPING_MULTIVALUED = function() {
    return this.getToken(SplParser.SOLRMAPPING_MULTIVALUED, 0);
};

Solr_mapping_attr_nameContext.prototype.SOLRMAPPING_OMITNORMS = function() {
    return this.getToken(SplParser.SOLRMAPPING_OMITNORMS, 0);
};

Solr_mapping_attr_nameContext.prototype.SOLRMAPPING_STORETV = function() {
    return this.getToken(SplParser.SOLRMAPPING_STORETV, 0);
};

Solr_mapping_attr_nameContext.prototype.SOLRMAPPING_STORETP = function() {
    return this.getToken(SplParser.SOLRMAPPING_STORETP, 0);
};

Solr_mapping_attr_nameContext.prototype.SOLRMAPPING_STORETO = function() {
    return this.getToken(SplParser.SOLRMAPPING_STORETO, 0);
};

Solr_mapping_attr_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterSolr_mapping_attr_name(this);
	}
};

Solr_mapping_attr_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitSolr_mapping_attr_name(this);
	}
};




SplParser.Solr_mapping_attr_nameContext = Solr_mapping_attr_nameContext;

SplParser.prototype.solr_mapping_attr_name = function() {

    var localctx = new Solr_mapping_attr_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, SplParser.RULE_solr_mapping_attr_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 428;
        _la = this._input.LA(1);
        if(!(((((_la - 74)) & ~0x1f) == 0 && ((1 << (_la - 74)) & ((1 << (SplParser.SOLRMAPPING_NAME - 74)) | (1 << (SplParser.SOLRMAPPING_DATATYPE - 74)) | (1 << (SplParser.SOLRMAPPING_MULTIVALUED - 74)) | (1 << (SplParser.SOLRMAPPING_UNIQFLDEF - 74)) | (1 << (SplParser.SOLRMAPPING_OMITNORMS - 74)) | (1 << (SplParser.SOLRMAPPING_STORETV - 74)) | (1 << (SplParser.SOLRMAPPING_STORETP - 74)) | (1 << (SplParser.SOLRMAPPING_STORETO - 74)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Solr_mapping_attr_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_solr_mapping_attr_value;
    return this;
}

Solr_mapping_attr_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Solr_mapping_attr_valueContext.prototype.constructor = Solr_mapping_attr_valueContext;

Solr_mapping_attr_valueContext.prototype.QUOTED_LABEL = function() {
    return this.getToken(SplParser.QUOTED_LABEL, 0);
};

Solr_mapping_attr_valueContext.prototype.IDENT = function() {
    return this.getToken(SplParser.IDENT, 0);
};

Solr_mapping_attr_valueContext.prototype.INT = function() {
    return this.getToken(SplParser.INT, 0);
};

Solr_mapping_attr_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterSolr_mapping_attr_value(this);
	}
};

Solr_mapping_attr_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitSolr_mapping_attr_value(this);
	}
};




SplParser.Solr_mapping_attr_valueContext = Solr_mapping_attr_valueContext;

SplParser.prototype.solr_mapping_attr_value = function() {

    var localctx = new Solr_mapping_attr_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, SplParser.RULE_solr_mapping_attr_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 430;
        _la = this._input.LA(1);
        if(!(_la===SplParser.INT || _la===SplParser.QUOTED_LABEL || _la===SplParser.IDENT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AlignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_alignment;
    return this;
}

AlignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AlignmentContext.prototype.constructor = AlignmentContext;

AlignmentContext.prototype.ALIGNED_BASIC_L = function() {
    return this.getToken(SplParser.ALIGNED_BASIC_L, 0);
};

AlignmentContext.prototype.ALIGNED_BASIC_R = function() {
    return this.getToken(SplParser.ALIGNED_BASIC_R, 0);
};

AlignmentContext.prototype.ALIGNED_BASIC_C = function() {
    return this.getToken(SplParser.ALIGNED_BASIC_C, 0);
};

AlignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterAlignment(this);
	}
};

AlignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitAlignment(this);
	}
};




SplParser.AlignmentContext = AlignmentContext;

SplParser.prototype.alignment = function() {

    var localctx = new AlignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, SplParser.RULE_alignment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 432;
        _la = this._input.LA(1);
        if(!(((((_la - 106)) & ~0x1f) == 0 && ((1 << (_la - 106)) & ((1 << (SplParser.ALIGNED_BASIC_L - 106)) | (1 << (SplParser.ALIGNED_BASIC_R - 106)) | (1 << (SplParser.ALIGNED_BASIC_C - 106)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Generic_colop_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_generic_colop_def;
    return this;
}

Generic_colop_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Generic_colop_defContext.prototype.constructor = Generic_colop_defContext;

Generic_colop_defContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.IDENT);
    } else {
        return this.getToken(SplParser.IDENT, i);
    }
};


Generic_colop_defContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SplParser.OPENPARENTHESIS, 0);
};

Generic_colop_defContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SplParser.CLOSEPARENTHESIS, 0);
};

Generic_colop_defContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.COMMA);
    } else {
        return this.getToken(SplParser.COMMA, i);
    }
};


Generic_colop_defContext.prototype.QUOTED_LABEL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.QUOTED_LABEL);
    } else {
        return this.getToken(SplParser.QUOTED_LABEL, i);
    }
};


Generic_colop_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterGeneric_colop_def(this);
	}
};

Generic_colop_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitGeneric_colop_def(this);
	}
};




SplParser.Generic_colop_defContext = Generic_colop_defContext;

SplParser.prototype.generic_colop_def = function() {

    var localctx = new Generic_colop_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, SplParser.RULE_generic_colop_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 434;
        this.match(SplParser.IDENT);
        this.state = 435;
        this.match(SplParser.OPENPARENTHESIS);
        this.state = 436;
        this.match(SplParser.IDENT);
        this.state = 439; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 437;
            this.match(SplParser.COMMA);
            this.state = 438;
            _la = this._input.LA(1);
            if(!(_la===SplParser.QUOTED_LABEL || _la===SplParser.IDENT)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 441; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SplParser.COMMA);
        this.state = 443;
        this.match(SplParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Col_op_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_col_op_def;
    return this;
}

Col_op_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Col_op_defContext.prototype.constructor = Col_op_defContext;

Col_op_defContext.prototype.colcopy = function() {
    return this.getTypedRuleContext(ColcopyContext,0);
};

Col_op_defContext.prototype.colcount = function() {
    return this.getTypedRuleContext(ColcountContext,0);
};

Col_op_defContext.prototype.coljoin = function() {
    return this.getTypedRuleContext(ColjoinContext,0);
};

Col_op_defContext.prototype.colcalc = function() {
    return this.getTypedRuleContext(ColcalcContext,0);
};

Col_op_defContext.prototype.colsplit = function() {
    return this.getTypedRuleContext(ColsplitContext,0);
};

Col_op_defContext.prototype.colrep = function() {
    return this.getTypedRuleContext(ColrepContext,0);
};

Col_op_defContext.prototype.colfill = function() {
    return this.getTypedRuleContext(ColfillContext,0);
};

Col_op_defContext.prototype.colmap = function() {
    return this.getTypedRuleContext(ColmapContext,0);
};

Col_op_defContext.prototype.coldrop = function() {
    return this.getTypedRuleContext(ColdropContext,0);
};

Col_op_defContext.prototype.colprint = function() {
    return this.getTypedRuleContext(ColprintContext,0);
};

Col_op_defContext.prototype.colcase = function() {
    return this.getTypedRuleContext(ColcaseContext,0);
};

Col_op_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterCol_op_def(this);
	}
};

Col_op_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitCol_op_def(this);
	}
};




SplParser.Col_op_defContext = Col_op_defContext;

SplParser.prototype.col_op_def = function() {

    var localctx = new Col_op_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, SplParser.RULE_col_op_def);
    try {
        this.state = 456;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SplParser.COLCOPY:
            this.enterOuterAlt(localctx, 1);
            this.state = 445;
            this.colcopy();
            break;
        case SplParser.COLCOUNT:
            this.enterOuterAlt(localctx, 2);
            this.state = 446;
            this.colcount();
            break;
        case SplParser.COLJOIN:
            this.enterOuterAlt(localctx, 3);
            this.state = 447;
            this.coljoin();
            break;
        case SplParser.COLCALC_CATCH_ALL:
            this.enterOuterAlt(localctx, 4);
            this.state = 448;
            this.colcalc();
            break;
        case SplParser.COLSPLIT:
            this.enterOuterAlt(localctx, 5);
            this.state = 449;
            this.colsplit();
            break;
        case SplParser.COLREP:
            this.enterOuterAlt(localctx, 6);
            this.state = 450;
            this.colrep();
            break;
        case SplParser.COLFILL:
            this.enterOuterAlt(localctx, 7);
            this.state = 451;
            this.colfill();
            break;
        case SplParser.COLMAP:
            this.enterOuterAlt(localctx, 8);
            this.state = 452;
            this.colmap();
            break;
        case SplParser.COLDROP:
            this.enterOuterAlt(localctx, 9);
            this.state = 453;
            this.coldrop();
            break;
        case SplParser.COLPRINT:
            this.enterOuterAlt(localctx, 10);
            this.state = 454;
            this.colprint();
            break;
        case SplParser.COLCASE:
            this.enterOuterAlt(localctx, 11);
            this.state = 455;
            this.colcase();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColcopyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_colcopy;
    return this;
}

ColcopyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColcopyContext.prototype.constructor = ColcopyContext;

ColcopyContext.prototype.COLCOPY = function() {
    return this.getToken(SplParser.COLCOPY, 0);
};

ColcopyContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SplParser.OPENPARENTHESIS, 0);
};

ColcopyContext.prototype.colcopy_param = function() {
    return this.getTypedRuleContext(Colcopy_paramContext,0);
};

ColcopyContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SplParser.CLOSEPARENTHESIS, 0);
};

ColcopyContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColcopy(this);
	}
};

ColcopyContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColcopy(this);
	}
};




SplParser.ColcopyContext = ColcopyContext;

SplParser.prototype.colcopy = function() {

    var localctx = new ColcopyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, SplParser.RULE_colcopy);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 458;
        this.match(SplParser.COLCOPY);
        this.state = 459;
        this.match(SplParser.OPENPARENTHESIS);
        this.state = 460;
        this.colcopy_param();
        this.state = 461;
        this.match(SplParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colcopy_paramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_colcopy_param;
    return this;
}

Colcopy_paramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colcopy_paramContext.prototype.constructor = Colcopy_paramContext;

Colcopy_paramContext.prototype.COMMA = function() {
    return this.getToken(SplParser.COMMA, 0);
};

Colcopy_paramContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.IDENT);
    } else {
        return this.getToken(SplParser.IDENT, i);
    }
};


Colcopy_paramContext.prototype.QUOTED_LABEL = function() {
    return this.getToken(SplParser.QUOTED_LABEL, 0);
};

Colcopy_paramContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColcopy_param(this);
	}
};

Colcopy_paramContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColcopy_param(this);
	}
};




SplParser.Colcopy_paramContext = Colcopy_paramContext;

SplParser.prototype.colcopy_param = function() {

    var localctx = new Colcopy_paramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, SplParser.RULE_colcopy_param);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 463;
        _la = this._input.LA(1);
        if(!(_la===SplParser.QUOTED_LABEL || _la===SplParser.IDENT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 464;
        this.match(SplParser.COMMA);
        this.state = 465;
        this.match(SplParser.IDENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColjoinContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_coljoin;
    return this;
}

ColjoinContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColjoinContext.prototype.constructor = ColjoinContext;

ColjoinContext.prototype.COLJOIN = function() {
    return this.getToken(SplParser.COLJOIN, 0);
};

ColjoinContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SplParser.OPENPARENTHESIS, 0);
};

ColjoinContext.prototype.coljoin_param = function() {
    return this.getTypedRuleContext(Coljoin_paramContext,0);
};

ColjoinContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SplParser.CLOSEPARENTHESIS, 0);
};

ColjoinContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColjoin(this);
	}
};

ColjoinContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColjoin(this);
	}
};




SplParser.ColjoinContext = ColjoinContext;

SplParser.prototype.coljoin = function() {

    var localctx = new ColjoinContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, SplParser.RULE_coljoin);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 467;
        this.match(SplParser.COLJOIN);
        this.state = 468;
        this.match(SplParser.OPENPARENTHESIS);
        this.state = 469;
        this.coljoin_param();
        this.state = 470;
        this.match(SplParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Coljoin_paramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_coljoin_param;
    return this;
}

Coljoin_paramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Coljoin_paramContext.prototype.constructor = Coljoin_paramContext;

Coljoin_paramContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.IDENT);
    } else {
        return this.getToken(SplParser.IDENT, i);
    }
};


Coljoin_paramContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.COMMA);
    } else {
        return this.getToken(SplParser.COMMA, i);
    }
};


Coljoin_paramContext.prototype.QUOTED_LABEL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.QUOTED_LABEL);
    } else {
        return this.getToken(SplParser.QUOTED_LABEL, i);
    }
};


Coljoin_paramContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColjoin_param(this);
	}
};

Coljoin_paramContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColjoin_param(this);
	}
};




SplParser.Coljoin_paramContext = Coljoin_paramContext;

SplParser.prototype.coljoin_param = function() {

    var localctx = new Coljoin_paramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, SplParser.RULE_coljoin_param);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 472;
        this.match(SplParser.IDENT);
        this.state = 475; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 473;
            this.match(SplParser.COMMA);
            this.state = 474;
            _la = this._input.LA(1);
            if(!(_la===SplParser.QUOTED_LABEL || _la===SplParser.IDENT)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 477; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SplParser.COMMA);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColsplitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_colsplit;
    return this;
}

ColsplitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColsplitContext.prototype.constructor = ColsplitContext;

ColsplitContext.prototype.COLSPLIT = function() {
    return this.getToken(SplParser.COLSPLIT, 0);
};

ColsplitContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SplParser.OPENPARENTHESIS, 0);
};

ColsplitContext.prototype.colsplit_param = function() {
    return this.getTypedRuleContext(Colsplit_paramContext,0);
};

ColsplitContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SplParser.CLOSEPARENTHESIS, 0);
};

ColsplitContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColsplit(this);
	}
};

ColsplitContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColsplit(this);
	}
};




SplParser.ColsplitContext = ColsplitContext;

SplParser.prototype.colsplit = function() {

    var localctx = new ColsplitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, SplParser.RULE_colsplit);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 479;
        this.match(SplParser.COLSPLIT);
        this.state = 480;
        this.match(SplParser.OPENPARENTHESIS);
        this.state = 481;
        this.colsplit_param();
        this.state = 482;
        this.match(SplParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colsplit_paramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_colsplit_param;
    return this;
}

Colsplit_paramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colsplit_paramContext.prototype.constructor = Colsplit_paramContext;

Colsplit_paramContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.IDENT);
    } else {
        return this.getToken(SplParser.IDENT, i);
    }
};


Colsplit_paramContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.COMMA);
    } else {
        return this.getToken(SplParser.COMMA, i);
    }
};


Colsplit_paramContext.prototype.REGEX = function() {
    return this.getToken(SplParser.REGEX, 0);
};

Colsplit_paramContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColsplit_param(this);
	}
};

Colsplit_paramContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColsplit_param(this);
	}
};




SplParser.Colsplit_paramContext = Colsplit_paramContext;

SplParser.prototype.colsplit_param = function() {

    var localctx = new Colsplit_paramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, SplParser.RULE_colsplit_param);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 484;
        this.match(SplParser.IDENT);
        this.state = 485;
        this.match(SplParser.COMMA);
        this.state = 486;
        this.match(SplParser.REGEX);
        this.state = 489; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 487;
            this.match(SplParser.COMMA);

            this.state = 488;
            this.match(SplParser.IDENT);
            this.state = 491; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SplParser.COMMA);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColrepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_colrep;
    return this;
}

ColrepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColrepContext.prototype.constructor = ColrepContext;

ColrepContext.prototype.COLREP = function() {
    return this.getToken(SplParser.COLREP, 0);
};

ColrepContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SplParser.OPENPARENTHESIS, 0);
};

ColrepContext.prototype.colrep_param = function() {
    return this.getTypedRuleContext(Colrep_paramContext,0);
};

ColrepContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SplParser.CLOSEPARENTHESIS, 0);
};

ColrepContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColrep(this);
	}
};

ColrepContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColrep(this);
	}
};




SplParser.ColrepContext = ColrepContext;

SplParser.prototype.colrep = function() {

    var localctx = new ColrepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, SplParser.RULE_colrep);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 493;
        this.match(SplParser.COLREP);
        this.state = 494;
        this.match(SplParser.OPENPARENTHESIS);
        this.state = 495;
        this.colrep_param();
        this.state = 496;
        this.match(SplParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colrep_paramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_colrep_param;
    return this;
}

Colrep_paramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colrep_paramContext.prototype.constructor = Colrep_paramContext;

Colrep_paramContext.prototype.REGEX = function() {
    return this.getToken(SplParser.REGEX, 0);
};

Colrep_paramContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.COMMA);
    } else {
        return this.getToken(SplParser.COMMA, i);
    }
};


Colrep_paramContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.IDENT);
    } else {
        return this.getToken(SplParser.IDENT, i);
    }
};


Colrep_paramContext.prototype.QUOTED_LABEL = function() {
    return this.getToken(SplParser.QUOTED_LABEL, 0);
};

Colrep_paramContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColrep_param(this);
	}
};

Colrep_paramContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColrep_param(this);
	}
};




SplParser.Colrep_paramContext = Colrep_paramContext;

SplParser.prototype.colrep_param = function() {

    var localctx = new Colrep_paramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, SplParser.RULE_colrep_param);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 498;
        this.match(SplParser.REGEX);
        this.state = 499;
        this.match(SplParser.COMMA);
        this.state = 500;
        _la = this._input.LA(1);
        if(!(_la===SplParser.QUOTED_LABEL || _la===SplParser.IDENT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 501;
        this.match(SplParser.COMMA);
        this.state = 502;
        this.match(SplParser.IDENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColfillContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_colfill;
    return this;
}

ColfillContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColfillContext.prototype.constructor = ColfillContext;

ColfillContext.prototype.COLFILL = function() {
    return this.getToken(SplParser.COLFILL, 0);
};

ColfillContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SplParser.OPENPARENTHESIS, 0);
};

ColfillContext.prototype.colfill_param = function() {
    return this.getTypedRuleContext(Colfill_paramContext,0);
};

ColfillContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SplParser.CLOSEPARENTHESIS, 0);
};

ColfillContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColfill(this);
	}
};

ColfillContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColfill(this);
	}
};




SplParser.ColfillContext = ColfillContext;

SplParser.prototype.colfill = function() {

    var localctx = new ColfillContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, SplParser.RULE_colfill);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 504;
        this.match(SplParser.COLFILL);
        this.state = 505;
        this.match(SplParser.OPENPARENTHESIS);
        this.state = 506;
        this.colfill_param();
        this.state = 507;
        this.match(SplParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colfill_paramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_colfill_param;
    return this;
}

Colfill_paramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colfill_paramContext.prototype.constructor = Colfill_paramContext;

Colfill_paramContext.prototype.IDENT = function() {
    return this.getToken(SplParser.IDENT, 0);
};

Colfill_paramContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColfill_param(this);
	}
};

Colfill_paramContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColfill_param(this);
	}
};




SplParser.Colfill_paramContext = Colfill_paramContext;

SplParser.prototype.colfill_param = function() {

    var localctx = new Colfill_paramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, SplParser.RULE_colfill_param);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 509;
        this.match(SplParser.IDENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColmapContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_colmap;
    return this;
}

ColmapContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColmapContext.prototype.constructor = ColmapContext;

ColmapContext.prototype.COLMAP = function() {
    return this.getToken(SplParser.COLMAP, 0);
};

ColmapContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SplParser.OPENPARENTHESIS, 0);
};

ColmapContext.prototype.colmap_param = function() {
    return this.getTypedRuleContext(Colmap_paramContext,0);
};

ColmapContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SplParser.CLOSEPARENTHESIS, 0);
};

ColmapContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColmap(this);
	}
};

ColmapContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColmap(this);
	}
};




SplParser.ColmapContext = ColmapContext;

SplParser.prototype.colmap = function() {

    var localctx = new ColmapContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, SplParser.RULE_colmap);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 511;
        this.match(SplParser.COLMAP);
        this.state = 512;
        this.match(SplParser.OPENPARENTHESIS);
        this.state = 513;
        this.colmap_param();
        this.state = 514;
        this.match(SplParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colmap_paramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_colmap_param;
    return this;
}

Colmap_paramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colmap_paramContext.prototype.constructor = Colmap_paramContext;

Colmap_paramContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.IDENT);
    } else {
        return this.getToken(SplParser.IDENT, i);
    }
};


Colmap_paramContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.COMMA);
    } else {
        return this.getToken(SplParser.COMMA, i);
    }
};


Colmap_paramContext.prototype.REGEX = function() {
    return this.getToken(SplParser.REGEX, 0);
};

Colmap_paramContext.prototype.QUOTED_LABEL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.QUOTED_LABEL);
    } else {
        return this.getToken(SplParser.QUOTED_LABEL, i);
    }
};


Colmap_paramContext.prototype.ZERO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.ZERO);
    } else {
        return this.getToken(SplParser.ZERO, i);
    }
};


Colmap_paramContext.prototype.INT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.INT);
    } else {
        return this.getToken(SplParser.INT, i);
    }
};


Colmap_paramContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColmap_param(this);
	}
};

Colmap_paramContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColmap_param(this);
	}
};




SplParser.Colmap_paramContext = Colmap_paramContext;

SplParser.prototype.colmap_param = function() {

    var localctx = new Colmap_paramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, SplParser.RULE_colmap_param);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 516;
        this.match(SplParser.IDENT);
        this.state = 517;
        this.match(SplParser.COMMA);
        this.state = 518;
        this.match(SplParser.IDENT);
        this.state = 519;
        this.match(SplParser.COMMA);
        this.state = 520;
        _la = this._input.LA(1);
        if(!(_la===SplParser.REGEX || _la===SplParser.QUOTED_LABEL)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 523; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 521;
            this.match(SplParser.COMMA);
            this.state = 522;
            _la = this._input.LA(1);
            if(!(_la===SplParser.INT || _la===SplParser.QUOTED_LABEL || _la===SplParser.IDENT || _la===SplParser.ZERO)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 525; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SplParser.COMMA);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColcalcContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_colcalc;
    return this;
}

ColcalcContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColcalcContext.prototype.constructor = ColcalcContext;

ColcalcContext.prototype.COLCALC_CATCH_ALL = function() {
    return this.getToken(SplParser.COLCALC_CATCH_ALL, 0);
};

ColcalcContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColcalc(this);
	}
};

ColcalcContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColcalc(this);
	}
};




SplParser.ColcalcContext = ColcalcContext;

SplParser.prototype.colcalc = function() {

    var localctx = new ColcalcContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, SplParser.RULE_colcalc);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 527;
        this.match(SplParser.COLCALC_CATCH_ALL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColcountContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_colcount;
    return this;
}

ColcountContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColcountContext.prototype.constructor = ColcountContext;

ColcountContext.prototype.COLCOUNT = function() {
    return this.getToken(SplParser.COLCOUNT, 0);
};

ColcountContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SplParser.OPENPARENTHESIS, 0);
};

ColcountContext.prototype.colcount_param = function() {
    return this.getTypedRuleContext(Colcount_paramContext,0);
};

ColcountContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SplParser.CLOSEPARENTHESIS, 0);
};

ColcountContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColcount(this);
	}
};

ColcountContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColcount(this);
	}
};




SplParser.ColcountContext = ColcountContext;

SplParser.prototype.colcount = function() {

    var localctx = new ColcountContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, SplParser.RULE_colcount);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 529;
        this.match(SplParser.COLCOUNT);
        this.state = 530;
        this.match(SplParser.OPENPARENTHESIS);
        this.state = 531;
        this.colcount_param();
        this.state = 532;
        this.match(SplParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colcount_paramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_colcount_param;
    return this;
}

Colcount_paramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colcount_paramContext.prototype.constructor = Colcount_paramContext;

Colcount_paramContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.IDENT);
    } else {
        return this.getToken(SplParser.IDENT, i);
    }
};


Colcount_paramContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SplParser.COMMA);
    } else {
        return this.getToken(SplParser.COMMA, i);
    }
};


Colcount_paramContext.prototype.REGEX = function() {
    return this.getToken(SplParser.REGEX, 0);
};

Colcount_paramContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColcount_param(this);
	}
};

Colcount_paramContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColcount_param(this);
	}
};




SplParser.Colcount_paramContext = Colcount_paramContext;

SplParser.prototype.colcount_param = function() {

    var localctx = new Colcount_paramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, SplParser.RULE_colcount_param);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 534;
        this.match(SplParser.IDENT);
        this.state = 535;
        this.match(SplParser.COMMA);
        this.state = 536;
        this.match(SplParser.REGEX);
        this.state = 537;
        this.match(SplParser.COMMA);
        this.state = 538;
        this.match(SplParser.IDENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColdropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_coldrop;
    return this;
}

ColdropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColdropContext.prototype.constructor = ColdropContext;

ColdropContext.prototype.COLDROP = function() {
    return this.getToken(SplParser.COLDROP, 0);
};

ColdropContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SplParser.OPENPARENTHESIS, 0);
};

ColdropContext.prototype.coldrop_param = function() {
    return this.getTypedRuleContext(Coldrop_paramContext,0);
};

ColdropContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SplParser.CLOSEPARENTHESIS, 0);
};

ColdropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColdrop(this);
	}
};

ColdropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColdrop(this);
	}
};




SplParser.ColdropContext = ColdropContext;

SplParser.prototype.coldrop = function() {

    var localctx = new ColdropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 112, SplParser.RULE_coldrop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 540;
        this.match(SplParser.COLDROP);
        this.state = 541;
        this.match(SplParser.OPENPARENTHESIS);
        this.state = 542;
        this.coldrop_param();
        this.state = 543;
        this.match(SplParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Coldrop_paramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_coldrop_param;
    return this;
}

Coldrop_paramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Coldrop_paramContext.prototype.constructor = Coldrop_paramContext;

Coldrop_paramContext.prototype.IDENT = function() {
    return this.getToken(SplParser.IDENT, 0);
};

Coldrop_paramContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColdrop_param(this);
	}
};

Coldrop_paramContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColdrop_param(this);
	}
};




SplParser.Coldrop_paramContext = Coldrop_paramContext;

SplParser.prototype.coldrop_param = function() {

    var localctx = new Coldrop_paramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 114, SplParser.RULE_coldrop_param);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 545;
        this.match(SplParser.IDENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColprintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_colprint;
    return this;
}

ColprintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColprintContext.prototype.constructor = ColprintContext;

ColprintContext.prototype.COLPRINT = function() {
    return this.getToken(SplParser.COLPRINT, 0);
};

ColprintContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SplParser.OPENPARENTHESIS, 0);
};

ColprintContext.prototype.colprint_param = function() {
    return this.getTypedRuleContext(Colprint_paramContext,0);
};

ColprintContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SplParser.CLOSEPARENTHESIS, 0);
};

ColprintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColprint(this);
	}
};

ColprintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColprint(this);
	}
};




SplParser.ColprintContext = ColprintContext;

SplParser.prototype.colprint = function() {

    var localctx = new ColprintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 116, SplParser.RULE_colprint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 547;
        this.match(SplParser.COLPRINT);
        this.state = 548;
        this.match(SplParser.OPENPARENTHESIS);
        this.state = 549;
        this.colprint_param();
        this.state = 550;
        this.match(SplParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colprint_paramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_colprint_param;
    return this;
}

Colprint_paramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colprint_paramContext.prototype.constructor = Colprint_paramContext;

Colprint_paramContext.prototype.IDENT = function() {
    return this.getToken(SplParser.IDENT, 0);
};

Colprint_paramContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColprint_param(this);
	}
};

Colprint_paramContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColprint_param(this);
	}
};




SplParser.Colprint_paramContext = Colprint_paramContext;

SplParser.prototype.colprint_param = function() {

    var localctx = new Colprint_paramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 118, SplParser.RULE_colprint_param);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 552;
        this.match(SplParser.IDENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColwhenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_colwhen;
    return this;
}

ColwhenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColwhenContext.prototype.constructor = ColwhenContext;

ColwhenContext.prototype.COLWHEN = function() {
    return this.getToken(SplParser.COLWHEN, 0);
};

ColwhenContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SplParser.OPENPARENTHESIS, 0);
};

ColwhenContext.prototype.colwhen_param = function() {
    return this.getTypedRuleContext(Colwhen_paramContext,0);
};

ColwhenContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SplParser.CLOSEPARENTHESIS, 0);
};

ColwhenContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColwhen(this);
	}
};

ColwhenContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColwhen(this);
	}
};




SplParser.ColwhenContext = ColwhenContext;

SplParser.prototype.colwhen = function() {

    var localctx = new ColwhenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 120, SplParser.RULE_colwhen);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 554;
        this.match(SplParser.COLWHEN);
        this.state = 555;
        this.match(SplParser.OPENPARENTHESIS);
        this.state = 556;
        this.colwhen_param();
        this.state = 557;
        this.match(SplParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colwhen_paramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_colwhen_param;
    return this;
}

Colwhen_paramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colwhen_paramContext.prototype.constructor = Colwhen_paramContext;

Colwhen_paramContext.prototype.IDENT = function() {
    return this.getToken(SplParser.IDENT, 0);
};

Colwhen_paramContext.prototype.COMMA = function() {
    return this.getToken(SplParser.COMMA, 0);
};

Colwhen_paramContext.prototype.REGEX = function() {
    return this.getToken(SplParser.REGEX, 0);
};

Colwhen_paramContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColwhen_param(this);
	}
};

Colwhen_paramContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColwhen_param(this);
	}
};




SplParser.Colwhen_paramContext = Colwhen_paramContext;

SplParser.prototype.colwhen_param = function() {

    var localctx = new Colwhen_paramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 122, SplParser.RULE_colwhen_param);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 559;
        this.match(SplParser.IDENT);
        this.state = 560;
        this.match(SplParser.COMMA);
        this.state = 561;
        this.match(SplParser.REGEX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColcaseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_colcase;
    return this;
}

ColcaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColcaseContext.prototype.constructor = ColcaseContext;

ColcaseContext.prototype.COLCASE = function() {
    return this.getToken(SplParser.COLCASE, 0);
};

ColcaseContext.prototype.colcase_when = function() {
    return this.getTypedRuleContext(Colcase_whenContext,0);
};

ColcaseContext.prototype.COLELSE = function() {
    return this.getToken(SplParser.COLELSE, 0);
};

ColcaseContext.prototype.colcase_else = function() {
    return this.getTypedRuleContext(Colcase_elseContext,0);
};

ColcaseContext.prototype.COLEND = function() {
    return this.getToken(SplParser.COLEND, 0);
};

ColcaseContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColcase(this);
	}
};

ColcaseContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColcase(this);
	}
};




SplParser.ColcaseContext = ColcaseContext;

SplParser.prototype.colcase = function() {

    var localctx = new ColcaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 124, SplParser.RULE_colcase);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 563;
        this.match(SplParser.COLCASE);
        this.state = 564;
        this.colcase_when();
        this.state = 565;
        this.match(SplParser.COLELSE);
        this.state = 566;
        this.colcase_else();
        this.state = 567;
        this.match(SplParser.COLEND);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colcase_whenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_colcase_when;
    return this;
}

Colcase_whenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colcase_whenContext.prototype.constructor = Colcase_whenContext;

Colcase_whenContext.prototype.colcase_when_nested = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Colcase_when_nestedContext);
    } else {
        return this.getTypedRuleContext(Colcase_when_nestedContext,i);
    }
};

Colcase_whenContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColcase_when(this);
	}
};

Colcase_whenContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColcase_when(this);
	}
};




SplParser.Colcase_whenContext = Colcase_whenContext;

SplParser.prototype.colcase_when = function() {

    var localctx = new Colcase_whenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 126, SplParser.RULE_colcase_when);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 570; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 569;
            this.colcase_when_nested();
            this.state = 572; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SplParser.COLWHEN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colcase_when_nestedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_colcase_when_nested;
    return this;
}

Colcase_when_nestedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colcase_when_nestedContext.prototype.constructor = Colcase_when_nestedContext;

Colcase_when_nestedContext.prototype.colwhen = function() {
    return this.getTypedRuleContext(ColwhenContext,0);
};

Colcase_when_nestedContext.prototype.col_op_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Col_op_defContext);
    } else {
        return this.getTypedRuleContext(Col_op_defContext,i);
    }
};

Colcase_when_nestedContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColcase_when_nested(this);
	}
};

Colcase_when_nestedContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColcase_when_nested(this);
	}
};




SplParser.Colcase_when_nestedContext = Colcase_when_nestedContext;

SplParser.prototype.colcase_when_nested = function() {

    var localctx = new Colcase_when_nestedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 128, SplParser.RULE_colcase_when_nested);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 574;
        this.colwhen();
        this.state = 576; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 575;
            this.col_op_def();
            this.state = 578; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (SplParser.COLDROP - 53)) | (1 << (SplParser.COLFILL - 53)) | (1 << (SplParser.COLJOIN - 53)) | (1 << (SplParser.COLCOPY - 53)) | (1 << (SplParser.COLSPLIT - 53)) | (1 << (SplParser.COLREP - 53)) | (1 << (SplParser.COLMAP - 53)) | (1 << (SplParser.COLCASE - 53)) | (1 << (SplParser.COLCOUNT - 53)) | (1 << (SplParser.COLPRINT - 53)) | (1 << (SplParser.COLCALC_CATCH_ALL - 53)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colcase_elseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SplParser.RULE_colcase_else;
    return this;
}

Colcase_elseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colcase_elseContext.prototype.constructor = Colcase_elseContext;

Colcase_elseContext.prototype.col_op_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Col_op_defContext);
    } else {
        return this.getTypedRuleContext(Col_op_defContext,i);
    }
};

Colcase_elseContext.prototype.enterRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.enterColcase_else(this);
	}
};

Colcase_elseContext.prototype.exitRule = function(listener) {
    if(listener instanceof SplListener ) {
        listener.exitColcase_else(this);
	}
};




SplParser.Colcase_elseContext = Colcase_elseContext;

SplParser.prototype.colcase_else = function() {

    var localctx = new Colcase_elseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 130, SplParser.RULE_colcase_else);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 583;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (SplParser.COLDROP - 53)) | (1 << (SplParser.COLFILL - 53)) | (1 << (SplParser.COLJOIN - 53)) | (1 << (SplParser.COLCOPY - 53)) | (1 << (SplParser.COLSPLIT - 53)) | (1 << (SplParser.COLREP - 53)) | (1 << (SplParser.COLMAP - 53)) | (1 << (SplParser.COLCASE - 53)) | (1 << (SplParser.COLCOUNT - 53)) | (1 << (SplParser.COLPRINT - 53)) | (1 << (SplParser.COLCALC_CATCH_ALL - 53)))) !== 0)) {
            this.state = 580;
            this.col_op_def();
            this.state = 585;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.SplParser = SplParser;
