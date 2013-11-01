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

// View for all people
var PeopleView = Backbone.View.extend({

    tagName: 'ul',

    initialize: function() {
        console.log(this.collection);
    },

    render: function() {
        // filter through all items in a collection
        // for each, create a new PersonView
        // append to root element

        this.collection.each( function(person){
            // console.log(person);
            var personView = new PersonView({ model: person });
            // console.log(personView);
            console.log(this);
            // console.log(this.$el.append(personView.el));
            this.$el.append(personView.render().el);
        }, this);

        return this;
    }
});


// The View for a Person
var PersonView = Backbone.View.extend({

    tagName: 'li',

    template: _.template( $('#personTemplate').html() ),

    // initialize: function() {
    //     this.render();
    // },

    render: function() {
       this.$el.html( this.template( this.model.toJSON() ) );
       return this;
    }

});


var peopleCollection = new PeopleCollection([
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

var peopleView = new PeopleView({ collection: peopleCollection });
$(document.body).append(peopleView.render().el);