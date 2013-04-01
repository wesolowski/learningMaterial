var globalVar = "This is a global variable.";

var globalFunction = function(paramOne) {
    var localVar = "This is a local variable.";

    var localFunction = function() {
        console.log('localFunction1', localVar);

        var localVar = "hello, world!";
        
        console.log('localFunction2', localVar);
    };
    
    localFunction();
    console.log('globalFunction',localVar);
};

globalFunction(2);

