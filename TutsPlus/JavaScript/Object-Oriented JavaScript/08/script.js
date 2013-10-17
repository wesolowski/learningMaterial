// DataTypes give as better Perform:
// - memory size
// - execute time


var Person = function(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;

    // this.sayHi = function() {
    //     // return 'Hi there.';
    //     return 'Hi there.' + firstName; // now firstName ist Private ,
    //                                     // but firstName is now in Mememory and this is only for that Function
    // };

    this.sayHello = function() {
        // return 'Hi there.';
        return 'Hi there.';
    };

    // this.sayHi = function( ) {
    //     return 'My name is ' + this.
    // }




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


// Person.prototype.sayHi = function() {
    // return 'Hi there';
// }


var johnDoe = new Person( 'Jonh', 'Doe' );
console.log('johnDoe instanceof Person', johnDoe instanceof Person);
console.log('({}) instanceof Person', ({}) instanceof Person);
console.log('johnDoe.hasOwnProperty("sayHi")', johnDoe.hasOwnProperty('sayHi'));
console.log('johnDoe.hasOwnProperty("sayHello")', johnDoe.hasOwnProperty('sayHello'));

console.log('Person.prototype.sayHi.call(johnDoe)', Person.prototype.sayHi.call(johnDoe));
