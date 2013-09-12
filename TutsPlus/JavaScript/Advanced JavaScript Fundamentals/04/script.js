// 1
var calculator = {

    calculate: function(x,y,fn) {
        return fn(x,y);
    }

};

var sum = function(x,y){
        return x + y;
    },
    diff = function(x,y){
        return x - y;
    };

var sumResult = calculator.calculate(1,2, sum),
   diffResult = calculator.calculate(1,2, diff);

console.log('sumResult', sumResult);
console.log('diffResult', diffResult);

console.log('---------------------');
//2 Array Loops

var fruit = ['apples', 'oranges', 'bananas', 'grapes'];

var index = fruit.indexOf('oranges');
    index2 = fruit.lastIndexOf('oranges');
console.log('index', index);
console.log('index2', index2);


function isString(value, index, array) {
    return typeof value === "string";
}
var bResult, aResult;

bResult = fruit.every(isString);
console.log(fruit,'every Elemenen is a String:' , bResult );

fruit = ['apples', 'oranges', 'bananas', 'grapes', 1];
bResult = fruit.every(isString);
console.log(fruit, 'every Elemenen is a String:' , bResult );



function isLenghtOfOne(value, index, array){
    return value.lenght === 1;
}
bResult = fruit.every(isLenghtOfOne);
console.log(fruit, 'isLenghtOfOne:' , bResult );

function startWithG(value, index, array) {
    return value[0] === "g";
}

bResult = fruit.some(startWithG);
console.log(fruit, 'startWithG:' , bResult );

function startWithAorB(value, index, array) {
    return value[0] === "a" || value[0] === "b";
}

aResult = fruit.filter(startWithAorB);
console.log(fruit, 'startWithAorB:' , aResult );

function doSomething(value, index, array) {
    console.log('foreach(value);', value);
}

fruit.forEach(doSomething);


function doSomething2(value, index, array) {
    return 'i like ' + value;
}

var aResult = fruit.map(doSomething2);
console.log('Map| new Array value ', aResult);