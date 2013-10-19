console.log('--------------');
console.log('Script1.js:');
console.log('--------------');

var person = {
    firstName : 'John',
    lastName : 'Doe'
};

Object.defineProperty(person, 'fullName', {
    get : function() {
        return this.firstName + " " + this.lastName;
    }
});

var employee = Object.create( person );
console.log("employee: ", employee);
console.log("person.hasOwnProperty('fullName'): ", person.hasOwnProperty('fullName'));
console.log("employee.fullName: ", employee.fullName);
console.log("employee.hasOwnProperty('fullName'): ", employee.hasOwnProperty('fullName'));

console.log("employee.__proto__ === person: ", employee.__proto__ === person );


person.sayHi = function() {
    return 'Hi there';
}
console.log("1 employee.sayHi(): ", employee.sayHi() );

employee.sayHi = function() {
    return 'Hi there. My name is ' + this.fullName;
}
console.log("2 employee.sayHi(): ", employee.sayHi() );
console.log("person.sayHi(): ", person.sayHi() );

employee.sayHi = function() {
    return this.__proto__.sayHi.call(this) + '.My name is ' + this.fullName;
}
console.log("3 employee.sayHi(): ", employee.sayHi() );


var employee2 = Object.create( person,{
    sayHi : {
        value: function() {
            return this.__proto__.sayHi.call(this) + '.My name is ' + this.fullName;
        },
        writable : false,
        enumerable : true
    }
});

console.log("employee2.sayHi(): ", employee2.sayHi() );

