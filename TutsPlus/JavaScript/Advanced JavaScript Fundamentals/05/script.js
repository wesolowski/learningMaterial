

var personFirstObj = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

// ---- Bad ----
var personFirstObj2 = {
    firstName: 'Jane',
    lastName: 'Doe',
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
}


function createPerson(firstName, lastName){
    return {
        firstName: firstName,
        lastName: lastName,
        getFullName: function() {
            return this.firstName + " " + this.lastName;
        },
        greet: function(person) {
            var sResult;
            if( typeof person.getFullName !== 'undefined')
            {
                sResult = 'Hello, ' + person.getFullName();
            }
            else
            {
                sResult = 'Hello, there!';
            }
            return sResult;
        }
    };
}

var person = createPerson('John', 'Doe'),
    person2 = createPerson('Jane', 'Doe');

console.log('person:', person);
console.log('person2:', person2);

console.log('greet1:', person.greet(person2));
console.log('greet2:', person.greet({}));
// console.log('greet2:', person.greet({getFullName: 'This is String'})); // Error


console.log('------------------------');

person = null;
person2 = null;

var Person = function(firstName, lastName){
    // if( this === window )
    // {
    //     return new Person(firstName, lastName); // person = Person('John', 'Doe') -> to -> person = new Person('John', 'Doe'),
    // }
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function() {
        return this.firstName + " " + this.lastName;
    };
    this.greet = function(person) {
        var sResult;
        if( person instanceof Person)
        {
            sResult = 'Hello, ' + person.getFullName();
        }
        else
        {
            sResult = 'Hello, there!';
        }
        return sResult;
    };
};


var person = new Person('John', 'Doe'),
    person2 = new Person('Jane', 'Doe');

console.log('person:', person);
console.log('person2:', person2);

console.log('greet1:', person.greet(person2));
console.log('greet2:', person.greet({}));
console.log('greet2:', person.greet({getFullName: 'This is String'}));

console.log('------------------------');
// 3 prototype is faster (CPU)

person = null;
person2 = null;

var Person = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
};

Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
};

Person.prototype.greet = function(person) {
    var sResult;
    if( person instanceof Person)
    {
        sResult = 'Hello, ' + person.getFullName();
    }
    else
    {
        sResult = 'Hello, there!';
    }
    return sResult;
};


var person = new Person('John', 'Doe'),
    person2 = new Person('Jane', 'Doe');

console.log('person:', person);
console.log('person2:', person2);

console.log('greet1:', person.greet(person2));
console.log('greet2:', person.greet({}));
console.log('greet2:', person.greet({getFullName: 'This is String'}));



