var createPerson = function(firstName, lastName) {
    var person = {};
    
    Object.defineProperty(person, "firstName", {
        value : firstName, 
        writable : false
    });
    
    Object.defineProperty(person, "lastName", {
        value : lastName, 
        writable : true
    });
    
    return person;
}

var person = createPerson('John', 'Doe' );


console.log(person.firstName);
person.firstName = 'Jeremy';
console.log(person.firstName);


console.log(person.lastName);
person.lastName = 'Donat';
console.log(person.lastName);

createPerson = person = null;
console.log('--------------------');

var createPerson = function(firstName, lastName) {
    var person = {};
    
    Object.defineProperties(person, {
        firstName : {
            value : firstName,
            writable : true
        },
        lastName : {
            value : lastName,
            writable : true
        },
        fullName : {
            get : function() {
                return this.firstName + " " + this.lastName;
            },
            set : function(value) {
                this.firstName = value;
            }
        }        
    });
    
    
    return person;
}


var person = createPerson('John', 'Doe' );


console.log(person.firstName);
person.firstName = 'Jeremy';

console.log(person.fullName);

person.fullName = 'Rafal';
console.log(person.fullName);


createPerson = person = null;
console.log('--------------------');

var createPerson = function(firstName, lastName) {
    var person = {};
    
    Object.defineProperties(person, {
        firstName : {
            value : firstName
        },
        lastName : {
            value : lastName
        },
        fullName : {
            get : function() {
                return this.firstName + " " + this.lastName;
            },
            configurable : true
        }        
    });
    
    
    return person;
}


var person = createPerson('John', 'Doe' );


console.log(person.firstName);
person.firstName = 'Jeremy';

console.log(person.fullName);

person.fullName = 'Rafal';
console.log(person.fullName);

Object.defineProperty(person, 'fullName',{
    get : function() {
        return this.lastName + ', ' + this.firstName
    }
});

console.log(person.fullName);

createPerson = person = null;
console.log('--------------------');

var createPerson = function(firstName, lastName) {
    var person = {};
    
    Object.defineProperties(person, {
        firstName : {
            value : firstName,
            enumerable : true
        },
        lastName : {
            value : lastName,
            enumerable : true
        },
        fullName : {
            get : function() {
                return this.firstName + " " + this.lastName;
            },
            enumerable : true
        }        
    });
    
    
    return person;
}

var person = createPerson('John', 'Doe' );

console.log(person.fullName);

//Object.key(person);
