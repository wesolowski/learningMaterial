//This not a Object:
// - String
// - Number
// - Boolean
// - Undefined
// - Null

//This a Object:
// - Object
// - Array
// - Function
// - Date
// - RegExp

// - Dom..

console.log("hello".length);
console.log(new String("hello").length);

var obj = new String('hello');
console.log('typeof obj: ',typeof obj);
console.log('typeof "string": ',typeof "string");
console.log('typeof String("hello"): ',typeof String('hello'));
console.log('typeof obj.valueOf(): ',typeof obj.valueOf());

console.log('-------------');

var num = new Number(10);
console.log('typeof num:',typeof num);
console.log('typeof 10:',typeof 10);
console.log('typeof Number(10):',typeof Number(10));
console.log('typeof num.valueOf():',typeof num.valueOf());

console.log('-------------');

var sum = num + 10;
console.log('sum:', sum);
console.log('typeof sum:', typeof sum);
console.log('typeof num:', typeof num);

console.log('-------------');

var num = 10;
num.property = 'hello';

console.log('num.property1:',num.property);

num = new Number(10);
num.property = 'hello';
console.log('num.property2:',num.property);
