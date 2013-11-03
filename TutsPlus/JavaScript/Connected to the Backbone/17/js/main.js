(function() {

    window.App = {
        Models: {},
        Collections : {},
        Views: {},
        Router: {}

    };


    App.Router = Backbone.Router.extend({

        routes: {
            '' : 'index',
            'show/:id' : 'show',
            'download/*filename' : 'download',
            'search/:query' : 'search',
            '*other' :  'default'
        },

        index: function() {
            console.log('hi there from the index page');
        },

        show: function( id ) {
            console.log('show route for id of ' +  id);

        },

        download: function( filename ) {
            console.log('downlaod: ' +  filename);

        },

        search: function( query ){

        },

        default: function(other) {
            console.log('Hmmm. not sure what you need here?');
        }

    });

    new App.Router;
    Backbone.history.start();


})();