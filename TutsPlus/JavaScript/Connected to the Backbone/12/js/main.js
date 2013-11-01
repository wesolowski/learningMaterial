
// (function() {

//     window.App = {
//         Models: {},
//         Collections : {},
//         Views: {}

//     };

//     window.template = function( id ) {
//         return _.template( $('#'+id).html() );
//     };

//     App.Models.Task = Backbone.Model.extend({});

//     App.Views.Task = Backbone.View.extend({

//         tagName: 'li',

//         render: function() {
//             this.$el.html( this.model.get('title') );
//             return this
//         }

//     });


//     var task = new App.Models.Task({
//         title: 'Go to the store',
//         priotity: 4
//     })

//     var taskView = new App.Views.Task({ model: task });

//     console.log(taskView.render().el);
// })();



(function() {

    window.App = {
        Models: {},
        Collections : {},
        Views: {}

    };

    window.template = function( id ) {
        return _.template( $('#'+id).html() );
    };

    App.Models.Task = Backbone.Model.extend({});

    App.Collections.Tasks = Backbone.Collection.extend({
        model: App.Models.Task
    });

    App.Views.Tasks = Backbone.View.extend({
        tagName: 'ul',

        render: function() {
            this.collection.each(this.addOne, this);
            return this;
        },

        addOne: function( task ) {
            // creating a new child view
            var taskView = new App.Views.Task({ model: task });

            // append to the root element
            this.$el.append( taskView.render().el );
        }
    });

    App.Views.Task = Backbone.View.extend({

        tagName: 'li',

        template: template('taskTemplate'),

        events: {
            // 'click' : 'showAlert'
            // 'click span' : 'showAlert'
            'click .edit': 'editTask'
        },

        editTask: function() {
            // console.log('You are editing the task.');
            // console.log(this.model);
            console.log(this.model.toJSON());
            var newTaskTitle = prompt('What would you like to change the text to?', this.model.get('title'));
            this.model.set('title', newTaskTitle);
            console.log(this.model.toJSON());

        },
        // showAlert: function() {
        //     console.log('You clicked me!');
        // },

        render: function() {

            // console.log(this.template(this.model.toJSON()));
            // this.$el.html( this.model.get('title') );

            var template = this.template( this.model.toJSON() );
            this.$el.html( template );
            return this;
        }

    });


    var tasksCollection = new App.Collections.Tasks([
        {
            title: 'Go to the store',
            priotity: 4
        },
        {
            title: 'Go to the mall',
            priotity: 3
        },
        {
            title: 'Get to work',
            priotity: 5
        }
    ]);

    var tasksView = new App.Views.Tasks({ collection: tasksCollection });
    tasksView.render();
    // console.log(tasksView.el);
    $('.tasks').html(tasksView.el);


})();