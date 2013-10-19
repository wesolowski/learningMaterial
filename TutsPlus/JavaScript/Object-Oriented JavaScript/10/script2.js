console.log('--------------');
console.log('Script2.js:');
console.log('--------------');

var Person = function(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;

};

Object.defineProperties(Person.prototype, {
    sayHi : {
        value: function() {
            return 'Hi there';
        },
        enumerable : true
    },
    fullName : {
        get : function() {
            return this.firstName + " " + this.lastName;
        },
        enumerable : true
    }
});

var Employee = function(firstName, lastName, position) {
    Person.call(this, firstName, lastName);


    this.position = position;

}

var johnDoe = new Employee( 'John', 'Doe', 'Manager' );

console.log(johnDoe, johnDoe.firstName, johnDoe.fullName);

Employee.prototype  = Object.create(Person.prototype);

var johnDoe2 = new Employee( 'John', 'Doe2', 'Manager' );
console.log(johnDoe2, johnDoe2.firstName, johnDoe2.fullName);



Employee.prototype  = Object.create(Person.prototype, {
    sayHi : {
        value: function() {
            return Person.prototype.sayHi.call(this) + ' My Name ist ' + this.fullName;
        },
        enumerable : true
    },
    fullName : {
        get : (function() {
            var desc = Object.getOwnPropertyDescriptor(
                Person.prototype, 'fullName'
            ).get;
            return function() {
                return desc.call(this) + " " + this.position;
            }

        }()),
        // get : function() {
        //     var desc = Object.getOwnPropertyDescriptor(
        //         Person.prototype, 'fullName'
        //     );
        //     return desc.get.call(this) + " " + this.position;
        // },
        enumerable : true
    }
});

var johnDoe3 = new Employee( 'John', 'Doe3', 'Manager' );
console.log(johnDoe3, johnDoe3.firstName, johnDoe3.fullName);