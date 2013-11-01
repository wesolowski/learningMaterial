// Person Model
var Person = Backbone.Model.extend({

    defaults : {
        name: 'John Doe',
        age: 30,
        occupation: 'worker'
    }

});

//A List of People
var PeopleCollection = Backbone.Collection.extend({

    model: Person

});


// The View for a Person
var PersonView = Backbone.View.extend({

    tagName: 'li',

    template: _.template( $('#personTemplate').html() ),

    initialize: function() {
        this.render();

    },

    render: function() {
        this.$el.html( this.template( this.model.toJSON() ) );
    }

});

var person = new Person;
var personView = new PersonView({ model: person});

// var peopleCollection = new PeopleCollection;
// console.log( peopleCollection );

// peopleCollection.add(person);
// console.log( peopleCollection );
// console.log( peopleCollection.toJSON() );


var person2 = new Person({ name: 'Rafal Wesolowski', age: 28 });
var personView2 = new PersonView({ model: person2});

// peopleCollection.add(person2);
// console.log( peopleCollection );
// console.log( peopleCollection.toJSON() );

var peopleCollection = new PeopleCollection([
    person, person2
]);
console.log( peopleCollection.toJSON() );

var peopleCollection2 = new PeopleCollection([
    {
        name: 'Rafal Wesolowski',
        age: 28
    },
    {
        name: 'Jane Doe',
        age: 35,
        occupation: 'web designer'
    },
    {
        name: 'Sally Doe',
        age: 29,
        occupation: 'graphic designer'
    }
]);
console.log( peopleCollection2, peopleCollection2.toJSON() );

var model = peopleCollection2.at(0);
console.log(model);
console.log(model.get('name'));
console.log(model.toJSON());