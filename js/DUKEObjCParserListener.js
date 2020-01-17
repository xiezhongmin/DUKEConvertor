
var ObjectiveCParserListener = require('./parser/antlrLib/ObjectiveCParserListener').ObjectiveCParserListener

// var c = require('./DUKEGrammerNode')
// var DUKECommonNode = c.DUKECommonNode,
	//DUKEClassNode = c.DUKEClassNode,
    //DUKERootNode = c.DUKERootNode

var jsScript = ''
var DUKEObjCParserListener = function(cb) {
	ObjectiveCParserListener.call(this);
    this.callback = cb;

    //this.rootNode = new DUKERootNode();

	//Original Objective-C Script
	this.ocScript = '';
    jsScript = '';
	return this;
}

DUKEObjCParserListener.prototype = Object.create(ObjectiveCParserListener.prototype);

var DUKELogContext = function(ctx) {
    jsScript += ctx.start.text;
    jsScript += '\n';
    jsScript += ctx.stop.text;
    jsScript += '\n';
    console.log(ctx.start.text);
    console.log(ctx.stop.text);
    console.log('=======');
}

DUKEObjCParserListener.prototype.buildSource = function()
{
	this.callback(jsScript);
}

DUKEObjCParserListener.prototype.addStrContext = function(stop) {
	// var strContext = new JPCommonContext(this.ocScript.substring(this.currContext.currIdx, stop))
	// this.currContext.setNext(strContext);
	// return strContext;
}

// Override
// Enter a parse tree produced by ObjectiveCParser#translationUnit.
ObjectiveCParserListener.prototype.enterTranslationUnit = function(ctx) {
    console.log('start')
    this.ocScript = ctx.start.source[1].strdata;
};

// Exit a parse tree produced by ObjectiveCParser#translationUnit.
ObjectiveCParserListener.prototype.exitTranslationUnit = function(ctx) {
    console.log('end');
    this.buildSource();
};


// Enter a parse tree produced by ObjectiveCParser#externalDeclaration.
ObjectiveCParserListener.prototype.enterExternalDeclaration = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#externalDeclaration.
ObjectiveCParserListener.prototype.exitExternalDeclaration = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#topLevelFunctionDefinition.
ObjectiveCParserListener.prototype.enterTopLevelFunctionDefinition = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#topLevelFunctionDefinition.
ObjectiveCParserListener.prototype.exitTopLevelFunctionDefinition = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#importDeclaration.
ObjectiveCParserListener.prototype.enterImportDeclaration = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#importDeclaration.
ObjectiveCParserListener.prototype.exitImportDeclaration = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#classInterface.
ObjectiveCParserListener.prototype.enterClassInterface = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#classInterface.
ObjectiveCParserListener.prototype.exitClassInterface = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#categoryInterface.
ObjectiveCParserListener.prototype.enterCategoryInterface = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#categoryInterface.
ObjectiveCParserListener.prototype.exitCategoryInterface = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#classImplementation.
ObjectiveCParserListener.prototype.enterClassImplementation = function(ctx) {
    DUKELogContext(ctx);
    
	var className = ctx.children[1].start.text;
    // var classNode = this.rootNode.enterClass(className);
    console.log('enter class')
};

// Exit a parse tree produced by ObjectiveCParser#classImplementation.
ObjectiveCParserListener.prototype.exitClassImplementation = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#categoryImplementation.
ObjectiveCParserListener.prototype.enterCategoryImplementation = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#categoryImplementation.
ObjectiveCParserListener.prototype.exitCategoryImplementation = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#protocolDeclaration.
ObjectiveCParserListener.prototype.enterProtocolDeclaration = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#protocolDeclaration.
ObjectiveCParserListener.prototype.exitProtocolDeclaration = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#protocolDeclarationList.
ObjectiveCParserListener.prototype.enterProtocolDeclarationList = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#protocolDeclarationList.
ObjectiveCParserListener.prototype.exitProtocolDeclarationList = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#classDeclarationList.
ObjectiveCParserListener.prototype.enterClassDeclarationList = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#classDeclarationList.
ObjectiveCParserListener.prototype.exitClassDeclarationList = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#classList.
ObjectiveCParserListener.prototype.enterClassList = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#classList.
ObjectiveCParserListener.prototype.exitClassList = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#protocolReferenceList.
ObjectiveCParserListener.prototype.enterProtocolReferenceList = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#protocolReferenceList.
ObjectiveCParserListener.prototype.exitProtocolReferenceList = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#protocolList.
ObjectiveCParserListener.prototype.enterProtocolList = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#protocolList.
ObjectiveCParserListener.prototype.exitProtocolList = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#propertyDeclaration.
ObjectiveCParserListener.prototype.enterPropertyDeclaration = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#propertyDeclaration.
ObjectiveCParserListener.prototype.exitPropertyDeclaration = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#propertyAttributesList.
ObjectiveCParserListener.prototype.enterPropertyAttributesList = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#propertyAttributesList.
ObjectiveCParserListener.prototype.exitPropertyAttributesList = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#propertyAttribute.
ObjectiveCParserListener.prototype.enterPropertyAttribute = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#propertyAttribute.
ObjectiveCParserListener.prototype.exitPropertyAttribute = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#className.
ObjectiveCParserListener.prototype.enterClassName = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#className.
ObjectiveCParserListener.prototype.exitClassName = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#superclassName.
ObjectiveCParserListener.prototype.enterSuperclassName = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#superclassName.
ObjectiveCParserListener.prototype.exitSuperclassName = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#categoryName.
ObjectiveCParserListener.prototype.enterCategoryName = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#categoryName.
ObjectiveCParserListener.prototype.exitCategoryName = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#protocolName.
ObjectiveCParserListener.prototype.enterProtocolName = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#protocolName.
ObjectiveCParserListener.prototype.exitProtocolName = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#instanceVariables.
ObjectiveCParserListener.prototype.enterInstanceVariables = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#instanceVariables.
ObjectiveCParserListener.prototype.exitInstanceVariables = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#visibilitySpecification.
ObjectiveCParserListener.prototype.enterVisibilitySpecification = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#visibilitySpecification.
ObjectiveCParserListener.prototype.exitVisibilitySpecification = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#interfaceDeclarationList.
ObjectiveCParserListener.prototype.enterInterfaceDeclarationList = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#interfaceDeclarationList.
ObjectiveCParserListener.prototype.exitInterfaceDeclarationList = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#interfaceDeclarationListItem.
ObjectiveCParserListener.prototype.enterInterfaceDeclarationListItem = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#interfaceDeclarationListItem.
ObjectiveCParserListener.prototype.exitInterfaceDeclarationListItem = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#classMethodDeclaration.
ObjectiveCParserListener.prototype.enterClassMethodDeclaration = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#classMethodDeclaration.
ObjectiveCParserListener.prototype.exitClassMethodDeclaration = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#instanceMethodDeclaration.
ObjectiveCParserListener.prototype.enterInstanceMethodDeclaration = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#instanceMethodDeclaration.
ObjectiveCParserListener.prototype.exitInstanceMethodDeclaration = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#methodDeclaration.
ObjectiveCParserListener.prototype.enterMethodDeclaration = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#methodDeclaration.
ObjectiveCParserListener.prototype.exitMethodDeclaration = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#implementationDefinitionList.
ObjectiveCParserListener.prototype.enterImplementationDefinitionList = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#implementationDefinitionList.
ObjectiveCParserListener.prototype.exitImplementationDefinitionList = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#implementationDefinitionListItem.
ObjectiveCParserListener.prototype.enterImplementationDefinitionListItem = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#implementationDefinitionListItem.
ObjectiveCParserListener.prototype.exitImplementationDefinitionListItem = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#classMethodDefinition.
ObjectiveCParserListener.prototype.enterClassMethodDefinition = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#classMethodDefinition.
ObjectiveCParserListener.prototype.exitClassMethodDefinition = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#instanceMethodDefinition.
ObjectiveCParserListener.prototype.enterInstanceMethodDefinition = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#instanceMethodDefinition.
ObjectiveCParserListener.prototype.exitInstanceMethodDefinition = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#methodDefinition.
ObjectiveCParserListener.prototype.enterMethodDefinition = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#methodDefinition.
ObjectiveCParserListener.prototype.exitMethodDefinition = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#methodSelector.
ObjectiveCParserListener.prototype.enterMethodSelector = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#methodSelector.
ObjectiveCParserListener.prototype.exitMethodSelector = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#keywordDeclarator.
ObjectiveCParserListener.prototype.enterKeywordDeclarator = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#keywordDeclarator.
ObjectiveCParserListener.prototype.exitKeywordDeclarator = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#selector.
ObjectiveCParserListener.prototype.enterSelector = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#selector.
ObjectiveCParserListener.prototype.exitSelector = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#methodType.
ObjectiveCParserListener.prototype.enterMethodType = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#methodType.
ObjectiveCParserListener.prototype.exitMethodType = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#propertyImplementation.
ObjectiveCParserListener.prototype.enterPropertyImplementation = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#propertyImplementation.
ObjectiveCParserListener.prototype.exitPropertyImplementation = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#propertySynthesizeList.
ObjectiveCParserListener.prototype.enterPropertySynthesizeList = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#propertySynthesizeList.
ObjectiveCParserListener.prototype.exitPropertySynthesizeList = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#propertySynthesizeItem.
ObjectiveCParserListener.prototype.enterPropertySynthesizeItem = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#propertySynthesizeItem.
ObjectiveCParserListener.prototype.exitPropertySynthesizeItem = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#blockType.
ObjectiveCParserListener.prototype.enterBlockType = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#blockType.
ObjectiveCParserListener.prototype.exitBlockType = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#genericsSpecifier.
ObjectiveCParserListener.prototype.enterGenericsSpecifier = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#genericsSpecifier.
ObjectiveCParserListener.prototype.exitGenericsSpecifier = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#signedUnsigned.
ObjectiveCParserListener.prototype.enterSignedUnsigned = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#signedUnsigned.
ObjectiveCParserListener.prototype.exitSignedUnsigned = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#protocolQualifier.
ObjectiveCParserListener.prototype.enterProtocolQualifier = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#protocolQualifier.
ObjectiveCParserListener.prototype.exitProtocolQualifier = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#primaryExpression.
ObjectiveCParserListener.prototype.enterPrimaryExpression = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#primaryExpression.
ObjectiveCParserListener.prototype.exitPrimaryExpression = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#structExpression.
ObjectiveCParserListener.prototype.enterStructExpression = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#structExpression.
ObjectiveCParserListener.prototype.exitStructExpression = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#structPair.
ObjectiveCParserListener.prototype.enterStructPair = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#structPair.
ObjectiveCParserListener.prototype.exitStructPair = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#vaArgExpression.
ObjectiveCParserListener.prototype.enterVaArgExpression = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#vaArgExpression.
ObjectiveCParserListener.prototype.exitVaArgExpression = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#dictionaryExpression.
ObjectiveCParserListener.prototype.enterDictionaryExpression = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#dictionaryExpression.
ObjectiveCParserListener.prototype.exitDictionaryExpression = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#dictionaryPair.
ObjectiveCParserListener.prototype.enterDictionaryPair = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#dictionaryPair.
ObjectiveCParserListener.prototype.exitDictionaryPair = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#arrayExpression.
ObjectiveCParserListener.prototype.enterArrayExpression = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#arrayExpression.
ObjectiveCParserListener.prototype.exitArrayExpression = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#boxExpression.
ObjectiveCParserListener.prototype.enterBoxExpression = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#boxExpression.
ObjectiveCParserListener.prototype.exitBoxExpression = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#blockParameters.
ObjectiveCParserListener.prototype.enterBlockParameters = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#blockParameters.
ObjectiveCParserListener.prototype.exitBlockParameters = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#blockExpression.
ObjectiveCParserListener.prototype.enterBlockExpression = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#blockExpression.
ObjectiveCParserListener.prototype.exitBlockExpression = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#messageExpression.
ObjectiveCParserListener.prototype.enterMessageExpression = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#messageExpression.
ObjectiveCParserListener.prototype.exitMessageExpression = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#receiver.
ObjectiveCParserListener.prototype.enterReceiver = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#receiver.
ObjectiveCParserListener.prototype.exitReceiver = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#messageSelector.
ObjectiveCParserListener.prototype.enterMessageSelector = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#messageSelector.
ObjectiveCParserListener.prototype.exitMessageSelector = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#keywordArgument.
ObjectiveCParserListener.prototype.enterKeywordArgument = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#keywordArgument.
ObjectiveCParserListener.prototype.exitKeywordArgument = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#selectorExpression.
ObjectiveCParserListener.prototype.enterSelectorExpression = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#selectorExpression.
ObjectiveCParserListener.prototype.exitSelectorExpression = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#selectorName.
ObjectiveCParserListener.prototype.enterSelectorName = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#selectorName.
ObjectiveCParserListener.prototype.exitSelectorName = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#protocolExpression.
ObjectiveCParserListener.prototype.enterProtocolExpression = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#protocolExpression.
ObjectiveCParserListener.prototype.exitProtocolExpression = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#encodeExpression.
ObjectiveCParserListener.prototype.enterEncodeExpression = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#encodeExpression.
ObjectiveCParserListener.prototype.exitEncodeExpression = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#typeVariableDeclarator.
ObjectiveCParserListener.prototype.enterTypeVariableDeclarator = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#typeVariableDeclarator.
ObjectiveCParserListener.prototype.exitTypeVariableDeclarator = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#tryStatement.
ObjectiveCParserListener.prototype.enterTryStatement = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#tryStatement.
ObjectiveCParserListener.prototype.exitTryStatement = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#catchStatement.
ObjectiveCParserListener.prototype.enterCatchStatement = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#catchStatement.
ObjectiveCParserListener.prototype.exitCatchStatement = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#finallyStatement.
ObjectiveCParserListener.prototype.enterFinallyStatement = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#finallyStatement.
ObjectiveCParserListener.prototype.exitFinallyStatement = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#throwStatement.
ObjectiveCParserListener.prototype.enterThrowStatement = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#throwStatement.
ObjectiveCParserListener.prototype.exitThrowStatement = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#tryBlock.
ObjectiveCParserListener.prototype.enterTryBlock = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#tryBlock.
ObjectiveCParserListener.prototype.exitTryBlock = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#synchronizedStatement.
ObjectiveCParserListener.prototype.enterSynchronizedStatement = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#synchronizedStatement.
ObjectiveCParserListener.prototype.exitSynchronizedStatement = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#autoreleaseStatement.
ObjectiveCParserListener.prototype.enterAutoreleaseStatement = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#autoreleaseStatement.
ObjectiveCParserListener.prototype.exitAutoreleaseStatement = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#functionDefinition.
ObjectiveCParserListener.prototype.enterFunctionDefinition = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#functionDefinition.
ObjectiveCParserListener.prototype.exitFunctionDefinition = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#functionSignature.
ObjectiveCParserListener.prototype.enterFunctionSignature = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#functionSignature.
ObjectiveCParserListener.prototype.exitFunctionSignature = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#declaration.
ObjectiveCParserListener.prototype.enterDeclaration = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#declaration.
ObjectiveCParserListener.prototype.exitDeclaration = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#declarationSpecifier.
ObjectiveCParserListener.prototype.enterDeclarationSpecifier = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#declarationSpecifier.
ObjectiveCParserListener.prototype.exitDeclarationSpecifier = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#initDeclaratorList.
ObjectiveCParserListener.prototype.enterInitDeclaratorList = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#initDeclaratorList.
ObjectiveCParserListener.prototype.exitInitDeclaratorList = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#initDeclarator.
ObjectiveCParserListener.prototype.enterInitDeclarator = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#initDeclarator.
ObjectiveCParserListener.prototype.exitInitDeclarator = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#structOrUnionSpecifier.
ObjectiveCParserListener.prototype.enterStructOrUnionSpecifier = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#structOrUnionSpecifier.
ObjectiveCParserListener.prototype.exitStructOrUnionSpecifier = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#structDeclaration.
ObjectiveCParserListener.prototype.enterStructDeclaration = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#structDeclaration.
ObjectiveCParserListener.prototype.exitStructDeclaration = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#specifierQualifierList.
ObjectiveCParserListener.prototype.enterSpecifierQualifierList = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#specifierQualifierList.
ObjectiveCParserListener.prototype.exitSpecifierQualifierList = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#arcBehaviourSpecifier.
ObjectiveCParserListener.prototype.enterArcBehaviourSpecifier = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#arcBehaviourSpecifier.
ObjectiveCParserListener.prototype.exitArcBehaviourSpecifier = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#storageClassSpecifier.
ObjectiveCParserListener.prototype.enterStorageClassSpecifier = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#storageClassSpecifier.
ObjectiveCParserListener.prototype.exitStorageClassSpecifier = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#typeofTypeSpecifier.
ObjectiveCParserListener.prototype.enterTypeofTypeSpecifier = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#typeofTypeSpecifier.
ObjectiveCParserListener.prototype.exitTypeofTypeSpecifier = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#typeSpecifier.
ObjectiveCParserListener.prototype.enterTypeSpecifier = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#typeSpecifier.
ObjectiveCParserListener.prototype.exitTypeSpecifier = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#typeQualifier.
ObjectiveCParserListener.prototype.enterTypeQualifier = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#typeQualifier.
ObjectiveCParserListener.prototype.exitTypeQualifier = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#classNameGeneric.
ObjectiveCParserListener.prototype.enterClassNameGeneric = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#classNameGeneric.
ObjectiveCParserListener.prototype.exitClassNameGeneric = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#structDeclaratorList.
ObjectiveCParserListener.prototype.enterStructDeclaratorList = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#structDeclaratorList.
ObjectiveCParserListener.prototype.exitStructDeclaratorList = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#structDeclarator.
ObjectiveCParserListener.prototype.enterStructDeclarator = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#structDeclarator.
ObjectiveCParserListener.prototype.exitStructDeclarator = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#enumSpecifier.
ObjectiveCParserListener.prototype.enterEnumSpecifier = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#enumSpecifier.
ObjectiveCParserListener.prototype.exitEnumSpecifier = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#enumeratorList.
ObjectiveCParserListener.prototype.enterEnumeratorList = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#enumeratorList.
ObjectiveCParserListener.prototype.exitEnumeratorList = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#enumerator.
ObjectiveCParserListener.prototype.enterEnumerator = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#enumerator.
ObjectiveCParserListener.prototype.exitEnumerator = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#directDeclarator.
ObjectiveCParserListener.prototype.enterDirectDeclarator = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#directDeclarator.
ObjectiveCParserListener.prototype.exitDirectDeclarator = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#declaratorSuffix.
ObjectiveCParserListener.prototype.enterDeclaratorSuffix = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#declaratorSuffix.
ObjectiveCParserListener.prototype.exitDeclaratorSuffix = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#declarator.
ObjectiveCParserListener.prototype.enterDeclarator = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#declarator.
ObjectiveCParserListener.prototype.exitDeclarator = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#pointer.
ObjectiveCParserListener.prototype.enterPointer = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#pointer.
ObjectiveCParserListener.prototype.exitPointer = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#macros.
ObjectiveCParserListener.prototype.enterMacros = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#macros.
ObjectiveCParserListener.prototype.exitMacros = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#initializer.
ObjectiveCParserListener.prototype.enterInitializer = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#initializer.
ObjectiveCParserListener.prototype.exitInitializer = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#initializer_list.
ObjectiveCParserListener.prototype.enterInitializer_list = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#initializer_list.
ObjectiveCParserListener.prototype.exitInitializer_list = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#designation.
ObjectiveCParserListener.prototype.enterDesignation = function(ctx) {
};

// Exit a parse tree produced by ObjectiveCParser#designation.
ObjectiveCParserListener.prototype.exitDesignation = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#designator.
ObjectiveCParserListener.prototype.enterDesignator = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#designator.
ObjectiveCParserListener.prototype.exitDesignator = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#typeName.
ObjectiveCParserListener.prototype.enterTypeName = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#typeName.
ObjectiveCParserListener.prototype.exitTypeName = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#abstractDeclarator.
ObjectiveCParserListener.prototype.enterAbstractDeclarator = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#abstractDeclarator.
ObjectiveCParserListener.prototype.exitAbstractDeclarator = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#abstractDeclaratorSuffix.
ObjectiveCParserListener.prototype.enterAbstractDeclaratorSuffix = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#abstractDeclaratorSuffix.
ObjectiveCParserListener.prototype.exitAbstractDeclaratorSuffix = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#parameterDeclarationList.
ObjectiveCParserListener.prototype.enterParameterDeclarationList = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#parameterDeclarationList.
ObjectiveCParserListener.prototype.exitParameterDeclarationList = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#parameterDeclaration.
ObjectiveCParserListener.prototype.enterParameterDeclaration = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#parameterDeclaration.
ObjectiveCParserListener.prototype.exitParameterDeclaration = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#statementList.
ObjectiveCParserListener.prototype.enterStatementList = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#statementList.
ObjectiveCParserListener.prototype.exitStatementList = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#statement.
ObjectiveCParserListener.prototype.enterStatement = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#statement.
ObjectiveCParserListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#labeledStatement.
ObjectiveCParserListener.prototype.enterLabeledStatement = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#labeledStatement.
ObjectiveCParserListener.prototype.exitLabeledStatement = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#compoundStatement.
ObjectiveCParserListener.prototype.enterCompoundStatement = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#compoundStatement.
ObjectiveCParserListener.prototype.exitCompoundStatement = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#selectionStatement.
ObjectiveCParserListener.prototype.enterSelectionStatement = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#selectionStatement.
ObjectiveCParserListener.prototype.exitSelectionStatement = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#forInStatement.
ObjectiveCParserListener.prototype.enterForInStatement = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#forInStatement.
ObjectiveCParserListener.prototype.exitForInStatement = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#forStatement.
ObjectiveCParserListener.prototype.enterForStatement = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#forStatement.
ObjectiveCParserListener.prototype.exitForStatement = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#whileStatement.
ObjectiveCParserListener.prototype.enterWhileStatement = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#whileStatement.
ObjectiveCParserListener.prototype.exitWhileStatement = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#doStatement.
ObjectiveCParserListener.prototype.enterDoStatement = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#doStatement.
ObjectiveCParserListener.prototype.exitDoStatement = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#iterationStatement.
ObjectiveCParserListener.prototype.enterIterationStatement = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#iterationStatement.
ObjectiveCParserListener.prototype.exitIterationStatement = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#jumpStatement.
ObjectiveCParserListener.prototype.enterJumpStatement = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#jumpStatement.
ObjectiveCParserListener.prototype.exitJumpStatement = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#expression.
ObjectiveCParserListener.prototype.enterExpression = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#expression.
ObjectiveCParserListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#assignmentExpression.
ObjectiveCParserListener.prototype.enterAssignmentExpression = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#assignmentExpression.
ObjectiveCParserListener.prototype.exitAssignmentExpression = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#conditionalExpression.
ObjectiveCParserListener.prototype.enterConditionalExpression = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#conditionalExpression.
ObjectiveCParserListener.prototype.exitConditionalExpression = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#binaryExpression.
ObjectiveCParserListener.prototype.enterBinaryExpression = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#binaryExpression.
ObjectiveCParserListener.prototype.exitBinaryExpression = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#castExpression.
ObjectiveCParserListener.prototype.enterCastExpression = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#castExpression.
ObjectiveCParserListener.prototype.exitCastExpression = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#assignmentOperator.
ObjectiveCParserListener.prototype.enterAssignmentOperator = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#assignmentOperator.
ObjectiveCParserListener.prototype.exitAssignmentOperator = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#constantExpression.
ObjectiveCParserListener.prototype.enterConstantExpression = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#constantExpression.
ObjectiveCParserListener.prototype.exitConstantExpression = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#unaryExpression.
ObjectiveCParserListener.prototype.enterUnaryExpression = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#unaryExpression.
ObjectiveCParserListener.prototype.exitUnaryExpression = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#unaryOperator.
ObjectiveCParserListener.prototype.enterUnaryOperator = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#unaryOperator.
ObjectiveCParserListener.prototype.exitUnaryOperator = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#postfixExpression.
ObjectiveCParserListener.prototype.enterPostfixExpression = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#postfixExpression.
ObjectiveCParserListener.prototype.exitPostfixExpression = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#dataMemberAccess.
ObjectiveCParserListener.prototype.enterDataMemberAccess = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#dataMemberAccess.
ObjectiveCParserListener.prototype.exitDataMemberAccess = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#argumentExpressionList.
ObjectiveCParserListener.prototype.enterArgumentExpressionList = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#argumentExpressionList.
ObjectiveCParserListener.prototype.exitArgumentExpressionList = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#constant.
ObjectiveCParserListener.prototype.enterConstant = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#constant.
ObjectiveCParserListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#stringLiteral.
ObjectiveCParserListener.prototype.enterStringLiteral = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#stringLiteral.
ObjectiveCParserListener.prototype.exitStringLiteral = function(ctx) {
};


// Enter a parse tree produced by ObjectiveCParser#identifier.
ObjectiveCParserListener.prototype.enterIdentifier = function(ctx) {
    DUKELogContext(ctx);
};

// Exit a parse tree produced by ObjectiveCParser#identifier.
ObjectiveCParserListener.prototype.exitIdentifier = function(ctx) {
};


exports.DUKEObjCParserListener = DUKEObjCParserListener;