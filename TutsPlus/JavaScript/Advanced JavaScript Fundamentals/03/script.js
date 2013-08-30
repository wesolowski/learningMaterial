//function

doSomething( 'hello, world', 2);
// doSomethingElse(); //error - function is not definiert

//load before js script
function doSomething()
{
    var length = arguments.length;
    console.log('halle function declaration');
    console.log('this: ',this);
    console.log('length: ',length);
    console.log('arguments[0]: ',arguments[0]);
    console.log('callee: ',arguments.callee);
}

function doSomethingTwo(test)
{
    arguments.callee(); //recusive
    console.log('callee: ',arguments.callee);
}


var doSomethingElse = function()
{
    console.log('halle function expression');
}

//closure

function doSomethingTree(arg1) {

    var variableOne = 'asdf';

    return function() {
        console.log(arg1, variableOne);
    };
}

var fn = doSomethingTree( 'hello, closure' )
var fn2 = doSomethingTree( 'hello, closure 2' )

fn();
fn2();
fn();


fn = null;



