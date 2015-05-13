module.exports = function(grunt) {
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        copy: {
            main: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "bootstrap/dist/css/bootstrap.min.css",
                    "bootstrap/dist/css/bootstrap.css.map",
                    "bootstrap/dist/js/bootstrap.js",
                    "bootstrap/dist/js/bootstrap.min.js",
                    "jquery/dist/jquery.min.js",
                    "jquery/dist/jquery.min.map"
                ],
                "dest": 'server/public/scripts/'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    //Default Tasks
    grunt.registerTask('default', ['copy']);

};