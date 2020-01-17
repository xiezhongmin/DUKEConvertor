var DUKEConvertor = function() {

}

var antlr4 = require('./parser/antlr4/index');
var ObjCLexer = require('./parser/antlrLib/ObjectiveCLexer').ObjectiveCLexer;
var ObjCParser = require('./parser/antlrLib/ObjectiveCParser').ObjectiveCParser;
var ConsoleErrorListener = require('./parser/antlr4/error/ErrorListener').ConsoleErrorListener.INSTANCE;
var DUKEObjCParserListener = require('./DUKEObjCParserListener').DUKEObjCParserListener;

DUKEConvertor.Convert = function(content, callback) {
    var chars = new antlr4.InputStream(content);
    var lexer = new ObjCLexer(chars);

    lexer.addErrorListener(ConsoleErrorListener);

    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new ObjCParser(tokens);

    parser.addErrorListener(ConsoleErrorListener);
    parser.buildParseTrees = true;
    
    var tree = parser.translationUnit();

    var listener = new DUKEObjCParserListener(function(tree) {
        console.log('parse final!!!!');
        callback(tree);
    });

    try {
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    } catch(e) {
        console.log('listener error')
        console.log(e)
    }
}

exports.DUKEConvertor = DUKEConvertor;