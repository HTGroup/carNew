/**
 * Gruntfile
 *
 * This Node script is executed when you run `grunt` or `sails lift`.
 * It's purpose is to load the Grunt tasks in your project's `tasks`
 * folder, and allow you to add and remove tasks as you see fit.
 * For more information on how this works, check out the `README.md`
 * file that was generated in your `tasks` folder.
 *
 * WARNING:
 * Unless you know what you're doing, you shouldn't change this file.
 * Check out the `tasks` directory instead.
 */

module.exports = function(grunt) {

    grunt.initConfig({
        coffee: {
            controllers: {
                expand: true,
                flatten: true,
                cwd: 'coffee/backend/controllers',
                src: ['*.coffee'],
                dest: 'api/controllers',
                ext: '.js'
            },
            models: {
                expand: true,
                flatten: true,
                cwd: 'coffee/backend/models',
                src: ['*.coffee'],
                dest: 'api/models',
                ext: '.js'
            },
            policies: {
                expand: true,
                flatten: true,
                cwd: 'coffee/backend/policies',
                src: ['*.coffee'],
                dest: 'api/policies',
                ext: '.js'
            },
            site: {
                expand: true,
                flatten: true,
                cwd: 'coffee/frontend/site',
                src: ['*.coffee'],
                dest: 'assets/site',
                ext: '.js'
            }
        },
        watch:{
            options:{
                livereload: true
            },
            scripts:{
                files: ['coffee/backend/controllers/*.coffee', 'coffee/backend/models/*.coffee', 'coffee/backend/policies/*.coffee', 'coffee/frontend/site/*.coffee'],
                tasks: ['newer:coffee:controllers','newer:coffee:models','newer:coffee:policies','newer:coffee:site']
            }
        },
        concat:{
            dist:{
                src:["assets/site/*.js"],
                dest: 'assets/site/min/site.js'
            }
        },
        uglify:{
            dist:{
                files:{
                    'assets/site/min/site.min.js':['assets/site/min/site.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-forever');
    grunt.loadNpmTasks('grunt-newer');

    grunt.registerTask('default', ['coffee:controllers','coffee:models','coffee:policies','coffee:site','concat','uglify', 'watch']);

};
