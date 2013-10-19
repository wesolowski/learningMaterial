
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




Employee.prototype  = Object.create(Person.prototype, {
    /* sayHi : {
        value: function() {
            return Person.prototype.sayHi.call(this) + ' My Name ist ' + this.fullName;
        },
        enumerable : true
    },*/
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

var johnDoe = new Employee( 'John', 'Doe3', 'Manager' );
console.log(johnDoe, johnDoe.firstName, johnDoe.fullName);

console.log(johnDoe.__proto__.__proto__.sayHi === johnDoe.sayHi);
console.log(johnDoe.toString());
console.log(Object.prototype);
console.log(johnDoe.__proto__.__proto__.__proto__.toString === Object.prototype.toString );
console.log(johnDoe.__proto__.__proto__.__proto__.hasOwnProperty('toString') );


if( johnDoe.hasOwnProperty('toString') )
{
    //execute
}
else if( john.Doe.__proto__.hasOwnProperty('toString') )
{
    //execute
}
//...

