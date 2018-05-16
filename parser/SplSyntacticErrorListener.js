const antlr4 = require('antlr4/index');
const ErrorListener = require('antlr4/error/index');

const DiagnosticMessage = require('./DiagnosticMessage').DiagnosticMessage;

SplSyntacticErrorListener = function() {
    ErrorListener.ErrorListener.call(this);
    this.diagnostics = [];
    return this;
}

SplSyntacticErrorListener.prototype = Object.create(ErrorListener.ErrorListener.prototype);
SplSyntacticErrorListener.prototype.constructor = SplSyntacticErrorListener;

SplSyntacticErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
    if(offendingSymbol == null)
        this.diagnostics.push(new DiagnosticMessage(msg, line - 1, charPositionInLine, "", 1));
    else
        this.diagnostics.push(new DiagnosticMessage(msg, line - 1, charPositionInLine, offendingSymbol.text, 1));
};

exports.SplSyntacticErrorListener = SplSyntacticErrorListener;