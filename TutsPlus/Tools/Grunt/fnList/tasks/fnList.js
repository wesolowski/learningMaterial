/*
 * grunt-fnList
 * https://github.com/wesolowski/learningMaterial
 *
 * Copyright (c) 2014 Rafal Wesolowski
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    grunt.registerMultiTask('fnList', 'Listst the function in JS Files.', function() {

        var re = /function (\w*)? ?(\(.*\))/g;

        this.files[0].src.forEach(function(file) {
            var text = grunt.file.read(file);
            var unnamedFns = 0;
            var namedFns = 0;
            var fns = [];
            var result;

            while ( (result = re.exec(text)) !== null) {
                if(result[1] === undefined) {
                    unnamedFns++;
                } else {
                    namedFns++;
                    fns.push(result[1] + result[2]);
                }
            }

            grunt.log.subhead("Functions in " + file);
            grunt.log.writeln("# " + unnamedFns + " Unnamed Functions");
            grunt.log.writeln("# " + namedFns + " Named Functions");
            grunt.util.recurse(fns, function(fn) {
                grunt.log.ok(fn);
            });


        });
    });

};
