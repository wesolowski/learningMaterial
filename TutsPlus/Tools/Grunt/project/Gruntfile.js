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
                src: "src/application.js",
                dest: "dist/application.min.js"
            },
            util: {
                src: "src/util.js",
                dest: "dist/util.min.js"
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};