(function() {

    window.App = {
        Models: {},
        Collections : {},
        Views: {},
        Router: {}

    };


    App.Models.Task = Backbone.Model.extend({

        defaults: {
            title: '',
            completed: 0,
            id: ''
        },

        urlRoot: 'tasks'

    });


})();
    var task = new App.Models.Task({ id: 1 });
    task.fetch();