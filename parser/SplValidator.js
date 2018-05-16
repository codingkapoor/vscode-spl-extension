const antlr4 = require('antlr4/index');

const SplLexer = require('./generated/SplLexer').SplLexer;
const SplParser = require('./generated/SplParser').SplParser;
const SplListener = require('./generated/SplListener').SplListener;

const SplSyntacticErrorListener = require('./SplSyntacticErrorListener').SplSyntacticErrorListener;
const SplSemanticErrorListener = require('./SplSemanticErrorListener').SplSemanticErrorListener;

function doValidation(text) {
    var is = new antlr4.InputStream(text);
    var lexer = new SplLexer(is);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new SplParser(tokens);
       
    parser.buildParseTrees = true;

    var syntacticErrorListener = new SplSyntacticErrorListener();
    var semanticErrorListener = new SplSemanticErrorListener();

    lexer.removeErrorListeners();
    lexer.addErrorListener(syntacticErrorListener);

    parser.removeErrorListeners();
    parser.addErrorListener(semanticErrorListener);

    var tree = parser.splg();
    
    var parserListener = new SplListener();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(parserListener, tree);

    return {
        syntacticErrors: syntacticErrorListener.diagnostics,
        semanticErrors: semanticErrorListener.diagnostics
    };
}

exports.doValidation = doValidation;
