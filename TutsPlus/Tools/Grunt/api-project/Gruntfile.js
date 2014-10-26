module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');


    grunt.initConfig({
        config: {
            name: "Rafal"
        },
        jshint: {
            options: {
                eqeqeq: true
            }
        },
    });


    grunt.registerTask("logs", function() {
        grunt.log.subhead('All the Logs');

        grunt.log.write("no linebreak after this");
        grunt.log.writeln("linebreak after this");

        grunt.log.error("this is an error");
        grunt.log.errorlns("This is an error. This is an error. This is an error. This is an error. This is an error.This is an error.This is an error. This is an error. This is an error. This is an error.");

        grunt.log.ok("everything's fine");
        grunt.log.oklns("Everything's fine. Everything's fine. Everything's fine. Everything's fine. Everything's fine. Everything's fine. Everything's fine. Everything's fine. Everything's fine. Everything's fine. Everything's fine.");
    });

    grunt.registerTask("config", function() {
        grunt.log.ok( grunt.config.get(["config", "name"]) );
        grunt.log.writeln( grunt.config.get("jshint.options.eqeqeq") );

        grunt.config("jshint.options.undef", false);
        console.log( grunt.config.get("jshint.options") );
    });

    grunt.registerTask("errors", function() {
        grunt.log.writeln("first line");
        grunt.fail.warn("second line");
        grunt.log.writeln("third line");
        grunt.fail.fatal("fourth line");
        grunt.log.writeln("fifth line"); // no to see
    });

    grunt.registerTask("files", function() {
        var str = grunt.file.read("package.json");
        // grunt.log.writeln(str);

        var json = grunt.file.readJSON("package.json");
        // console.log(json.devDependencies);

        var yaml = grunt.file.readYAML("data.yml");
        // console.log(yaml);

        grunt.file.write("somefile.txt", "this is a message");
        grunt.file.copy("somefile.txt", "other.txt");
        grunt.file.delete("other.txt");

        grunt.file.mkdir("newDir");

        grunt.file.recurse("src", function(file) {
            grunt.log.ok(file);
        });
    });
};