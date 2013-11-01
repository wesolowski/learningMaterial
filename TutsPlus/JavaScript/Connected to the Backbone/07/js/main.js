
var Person = Backbone.Model.extend({

    defaults : {
        name: 'John Doe',
        age: 30,
        occupation: 'worker'
    }

});


var PersonView = Backbone.View.extend({

    tagName: 'li',

    template: _.template( $('#personTemplate').html() ),

    // template: '#personTemplate',

    initialize: function() {
        this.render();

    },

    render: function() {
        // var template = _.template( $(this.template).html() );
        this.$el.html( this.template( this.model.toJSON() ) );
    }

});

var person = new Person;
var personView = new PersonView({ model: person});

console.log( personView.el );
$(document.body).append( personView.el );

var person2 = new Person({ name: 'Rafal Wesolowski', age: 28 });
var personView2 = new PersonView({ model: person2});

console.log( personView2.el );
$(document.body).append( personView2.el );

var personArray = [personView, personView2 ];
console.log( personArray );