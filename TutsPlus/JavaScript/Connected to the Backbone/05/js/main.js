
var Person = Backbone.Model.extend({

    defaults : {
        name: 'John Doe',
        age: 30,
        occupation: 'worker'
    }

});



var PersonView = Backbone.View.extend({



});

var personView = new PersonView;

console.log('personView: ',personView);
console.log('personView.el: ',personView.el);
console.log('personView.$el: ',personView.$el);

var PersonView2 = Backbone.View.extend({

    tagName: 'li',

    className: 'Person',

    id: 'somePerson'

});

var personView2 = new PersonView2;

console.log('personView2: ',personView2);
console.log('personView2.el: ',personView2.el);
console.log('personView2.$el: ',personView2.$el);

console.log('-----------------------');

var PersonView3 = Backbone.View.extend({

    tagName: 'li',

    initialize: function() {
        console.log('hi There');
        console.log(this.model);
        this.render();
    },

    render: function() {
        //anti-pattern
        this.$el.html( this.model.get('name') + ' (' + this.model.get('age') + ') ');
    }

});
var person = new Person;
var personView3 = new PersonView3({ model: person});
// personView3.render();
console.log('personView3.el with render: ',personView3.el);
