//Work only in V 0.9.x
var Person = Backbone.Model.extend({

    defaults : {
        name: 'John Doe',
        age: 30,
        occupation: 'worker',

    },

    validate: function(attrs, options) {
        if ( attrs.age < 0 ) {
            return 'Age must be positive, stupid.';
        }

        if ( ! attrs.name ) {
            return 'Every person must have a name, fool.';
        }
    },

    work: function() {
        return this.get('name') + ' is working';
    }

});

var person = new Person;
person.on('error', function(model, error){
    console.log(error);
});
person.set('age', -31);


person = null;
// Work in 1.1
var Person = Backbone.Model.extend({

    defaults : {
        name: 'John Doe',
        age: 30,
        occupation: 'worker',

    },

    validate: function(attrs, options) {
        if ( attrs.age < 0 ) {
            return 'Age must be positive, stupid.';
        }

        if ( ! attrs.name ) {
            return 'Every person must have a name, fool.';
        }
    },

    initialize : function(){
        this.on("invalid",function(model,error){
            console.log(error);
        });
    },

    work: function() {
        return this.get('name') + ' is working';
    }

});

var person = new Person;
person.set('age', -31);
person.save();


// V. 1.1 vs 0.9.x
// http://backbonejs.org/#upgrading
// Model validation is now only enforced by default in save — not in set unless the {validate:true} option is passed. Model validation now fires an "invalid" event instead of "error".

// http://stackoverflow.com/questions/14426155/backbone-validate-does-not-work
// var Man = Backbone.Model.extend({
//     initialize : function(){
//         this.on("invalid",function(model,error){
//             alert(error);
//         });
//     },
//     validate : function(attrs, options){
//         if (attrs.age < 18){
//             return 'below 18';
//         }
//     }
// });

// var man = new Man({name : 'qian', age : 12});
// console.log(man) // Returns an object with invalid attributes

// // But we'll use only valid objects.
// // Also we'll get the error message in alert, if validation fails.
// if(man.isValid()){
//     alert( man.get('name') );
// }

// var man = new Man({name : 'qian', age : 19});
// if(man.isValid()){
//     alert( man.get('name') );
// }