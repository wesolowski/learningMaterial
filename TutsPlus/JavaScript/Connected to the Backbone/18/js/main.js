(function() {

    window.App = {
        Models: {},
        Collections : {},
        Views: {},
        Router: {}

    };
    var vent = _.extend({}, Backbone.Events);

    console.log(vent);

    App.Views.Appointment = Backbone.View.extend({

        initialize: function() {
            vent.on( 'appointment:show', this.showAppointment, this );
        },

        show: function() {
            console.log('showing the appointment');
        }

    });

    App.Router = Backbone.Router.extend({

        routes: {
            '' : 'index',
            'appointment/:id' : 'showAppointment',
        },

        index: function() {
            console.log('hi there from the index page');
        },

        showAppointment: function( appointmentId ){
            console.log(appointmentId);
            vent.trigger('appointment:show', appointmentId);
        }

    });
    new App.Views.Appointment;
    new App.Router;
    Backbone.history.start();


})();