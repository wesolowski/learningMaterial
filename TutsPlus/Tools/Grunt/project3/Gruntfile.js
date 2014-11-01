'use strict';

module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        jshint: {
            client: {
                options: {
                    curly: true,
                    eqeqeq: true,
                    immed: true,
                    latedef: true,
                    newcap: true,
                    noarg: true,
                    sub: true,
                    undef: true,
                    unused: true,
                    boss: true,
                    eqnull: true,
                    node: true,
                    globals: {
                        'Backbone' : true,
                        'console' : true
                    }
                },
                src: ['public/app.js']
            },
            server: {
                options: {
                    curly: true,
                    eqeqeq: true,
                    immed: true,
                    latedef: true,
                    newcap: true,
                    noarg: true,
                    sub: true,
                    undef: true,
                    unused: true,
                    boss: true,
                    eqnull: true,
                    node: true,
                    globals: {
                        'require' : true,
                        '__dirname' : true,
                        'console' : true
                    }
                },
                src: ['server.js']
            }
        }
    });
    grunt.registerTask("server", "", function() {
        var dane = this.async();
        require("./server");
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint:client', 'jshint:server', 'server']);
};
