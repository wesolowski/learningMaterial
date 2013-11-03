(function() {

    window.App = {
        Models: {},
        Collections : {},
        Views: {},
        Router: {}

    };


    App.Models.Task = Backbone.Model.extend({

        defaults: {
            completed: 0,
            id: '',
            title: ''
        },

        urlRoot: 'tasks'

    });
    var task = new App.Models.Task({ id: 2 });
    task.fetch();
    task.destroy();

})();