exports.description = "Sets up an Express and Backbone application";
exports.template = function(grunt, init, done) {

    init.process({}, [
        init.prompt('name'),
        init.prompt('description'),
        init.prompt('version'),
        init.prompt('licenses', 'MIT'),
        init.prompt('author_name'),
        init.prompt('author_url'),
    ], function( err, props) {

        var files = init.filesToCopy(props);
        init.addLicenseFiles(files, props.licenses);
        // console.log(files);
        init.copyAndProcess(files, props);

        init.writePackageJSON('package.json', {
            name: props.name,
            version: props.version,
            description: props.description,
            author: {
                name: props.author_name,
                url: props.author_url
            },
            scripts: {
                start: "nodemon server.js"
            },
            dependencies: {
                "express": "latest",
                "jade"   : "latest"
            },
            devDependencies: {
                'grunt'                 : 'latest',
                'grunt-contrib-jshint'  : '~0.6.0',
                'grunt-contrib-qunit'   : '~0.2.0',
                'grunt-contrib-concat'  : '~0.3.0',
                'grunt-contrib-uglify'  : '~0.2.0',
                'grunt-contrib-watch'   : '~0.4.0',
                'grunt-contrib-clean'   : '~0.4.0',
                'nodemon'               : 'latest'
            }
        });

        done();
    });
};