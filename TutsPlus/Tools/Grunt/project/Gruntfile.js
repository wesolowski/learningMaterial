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
        },

        coffee: {
            options: {
                bare: false,
                join: false,
                seperator: ";"
            },
            target: {
                expand: true,
                cwd: 'src/',
                src: '*.coffee',
                dest: "lib/",
                ext: ".js"
            }
        },

        nodeunit: {
            target: 'test/*_test.js'
        },

        clean: {
            target: ['dist', 'lib']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask("default", ['jshint', 'concat', 'uglify']);
    grunt.registerTask("reboot", ['clean', 'default']);
};