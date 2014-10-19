module.exports = function (grunt) {

    grunt.initConfig({
        uglify: {
            options: {
                mangle: true,
                compress: true,
                sourceMap: "dist/application.map",
                banner: "/* Rafal Wesolowski 2014 */\n"
            },
            target: {
                src: "dist/application.js",
                dest: "dist/application.min.js"
            },
        },

        jshint: {
            options: {
                jshintrc: ".jshintrc"
                // eqeqeq: true,
                // curly: true,
                // undef: true
                // // , unused: true
            },
            target: {
                src: "src/*.js"
            }
        },

        concat: {
            options: {
                seperator: ":"
            },
            target: {
                src: ["src/application.js", "src/util.js"],
                dest: "dist/application.js"
            }
        },

        watch: {
            scripts: {
                files: ['src/*.js'],
                tasks: ['jshint']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("default", ['jshint', 'concat', 'uglify'])
};