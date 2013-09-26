// Alt style

var person = new Object();

person.firstName = "John";
person.lastName = "Doe";

person.sayHi = function() {
    return 'Hi There';
};

console.log(person, person.sayHi());

// New style

var person = {
    firstName : 'John',
    lastName : 'Doe',
    sayHi : function() {
        return 'Hi There';
    }
};

console.log(person, person.sayHi());

//Why New Style:
// - besser to ready
// - perform

var createPerson = function(firstName, lastName) {
    return {
      firstName : firstName,
      lastName : lastName,
      sayHi : function() {
          return 'Hi There'
      }
    };
}


var joneDoe = {
    firstName : 'John',
    lastName : 'Doe',
    sayHi : function() {
        return 'Hi There';
    }
};
console.log('joneDoe: ',joneDoe);
var janeDoe = {
    firstName : 'Jane',
    lastName : 'Doe',
    sayHi : function() {
        return 'Hey there';
    }
}

console.log('janeDoe: ',janeDoe);


var createPerson = function(firstName, lastName) {
    return {
      firstName : firstName,
      lastName : lastName,
      sayHi : function() {
          return 'Hi There'
      }
    };
}

var johnDoe = createPerson('John', 'Doe');
var janeDoe = createPerson('Jane', 'Doe');

console.log('johnDoe: ',johnDoe);
console.log('janeDoe: ',janeDoe);


