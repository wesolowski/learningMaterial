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

// memory clear bei Closuer
fn = null;


// var i = 0;


// function nameGem() {
//     var name = "customName" + i;
//     i = i + 1;
//     return name;
// }

// var name = nameGem(),
//     name2 = nameGem();

// console.log(name, name2);

var utility = (function() {

    var i = 0;

    return{

        nameGem : function() {
            var name = "customName" + i;
            i = i + 1;
            return name;
        }
    }

}());


    var name = utility.nameGem(),
        name2 = utility.nameGem();

    console.log(name, name2);

