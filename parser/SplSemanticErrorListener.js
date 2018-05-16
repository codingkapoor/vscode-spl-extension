const antlr4 = require('antlr4/index');
const ErrorListener = require('antlr4/error/index');

const DiagnosticMessage = require('./DiagnosticMessage').DiagnosticMessage;

SplSemanticErrorListener = function() {
    ErrorListener.ErrorListener.call(this);
    this.diagnostics = [];
    return this;
}

SplSemanticErrorListener.prototype = Object.create(ErrorListener.ErrorListener.prototype);
SplSemanticErrorListener.prototype.constructor = SplSemanticErrorListener;

SplSemanticErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
    if(offendingSymbol == null)
        this.diagnostics.push(new DiagnosticMessage(msg, line - 1, charPositionInLine, "", 0));
    else
        this.diagnostics.push(new DiagnosticMessage(msg, line - 1, charPositionInLine, offendingSymbol.text, offendingSymbol.stop - offendingSymbol.start + 1));
};

exports.SplSemanticErrorListener = SplSemanticErrorListener;
