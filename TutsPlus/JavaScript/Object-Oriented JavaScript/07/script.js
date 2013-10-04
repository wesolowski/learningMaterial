

var createPerson = function(firstName, lastName) {
    var person = {
        firstName : firstName,
        lastName : lastName
    };

    Object.defineProperty(person, 'fullName', {
        get : function() {
            return this.firstName + " " + this.lastName;
        },
        configurable : true
    });

    return person;
}

// var createEmployee = function(firstName, lastName, position) {
//     var person = {
//         firstName : firstName,
//         lastName : lastName,
//         position : position
//     };

//     return person;
// }

var createEmployee = function(firstName, lastName, position) {
    var person = createPerson(firstName, lastName);

    person.position = position

    var fullName = Object.getOwnPropertyDescriptor(person, 'fullName'); //parent function

    console.log('fullName.get:', fullName.get );
    console.log('fullName.writable:', fullName.writable );
    console.log('fullName.configurable:', fullName.configurable );
    console.log('fullName.enumberable:', fullName.enumberable );

    var fullNameFunction = fullName.get.bind(person);

    Object.defineProperty(person, 'fullName', {
        get : function() {
            return fullNameFunction + ", " + this.position;
        },
        enumberable : true,
        configurable : true
    });

    return person;
}

// var johnDoe = createPerson( 'John', 'Doe');
var johnDoe = createEmployee( 'John', 'Doe', 'Manager' );



var o, d;

o = { get foo() { return 17; } };
d = Object.getOwnPropertyDescriptor(o, "foo");
console.log(d, d.foo);
// d is { configurable: true, enumerable: true, get: /*the getter function*/, set: undefined }

o = { bar: 42 };
d = Object.getOwnPropertyDescriptor(o, "bar");
console.log(d);
// d is { configurable: true, enumerable: true, value: 42, writable: true }

o = {};
Object.defineProperty(o, "baz", { value: 8675309, writable: false, enumerable: false });
d = Object.getOwnPropertyDescriptor(o, "baz");
console.log(d);
// d is { value: 8675309, writable: false, enumerable: false, configurable: false }

