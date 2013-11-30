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
            title: ''
        },

        urlRoot: 'index.php/tasks'

    });
    var task = new App.Models.Task();
    task.set('title', 'Finish video');
    task.save();
    task.set('completed', 1);
    task.save();

    // task.fetch();
    // task.destroy();

})();