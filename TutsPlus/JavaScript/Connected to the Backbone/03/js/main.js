
// Person.prototype.work = function() {
//     return this.name + ' is working';
// }

// var person = new Person({
//     name : 'Rafal',
//     age : 28,
//     occupation : 'web developer'
// });

var Person = Backbone.Model.extend({

    defaults : {
        name: 'John Doe',
        age: 30,
        occupation: 'worker'
    },
    work: function() {
        return this.get('name') + ' is working';
    }

});

var person = new Person;
console.log("person: ",person);
console.log("person.get('name'): ",person.get('name'));
console.log("person.get('age'): ",person.get('age'));
console.log("person.get('occupation'): ",person.get('occupation'));
console.log("person.work(): ",person.work());

console.log('---------------------');

var person2 = new Person({name : 'Rafal Wesolowski', age: 28});
console.log("person2: ",person2);
console.log("person2.get('name'): ",person2.get('name'));
console.log("person2.get('age'): ",person2.get('age'));
console.log("person2.get('occupation'): ",person2.get('occupation'));
console.log("person2.work(): ",person2.work());

console.log("person2.toJSON() :", person2.toJSON() );
person2.set('occupation', 'Web Developer');
console.log("person2.toJSON() :", person2.toJSON() );

person2.set({
    name: 'John Doe',
    age: 25,
    occupation: 'CEO'
});
console.log("person2.toJSON() :", person2.toJSON() );
