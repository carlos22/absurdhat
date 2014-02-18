module.exports = function (grunt) {
    /**
     * Load tasks
     */
    grunt.loadNpmTasks('grunt-template');
    grunt.loadNpmTasks('grunt-browserify');

    /**
     * Grunt config
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        template: {
            processLoader: {
                options: {
                    data: {
                        mixins: [{
                            pluginName: 'none',
                            name: 'none'
                        }]
                    }
                },
                files: {
                    'loader.js': ['loader.js.tpl']
                }
            }
        },
        browserify: {
            dist: {
                files: {
                    'build/absurdhat.js': ['index.js']
                },
                options: {
                    standalone: 'absurdhat'
                }
            }
        }
    });

    /**
     * Register tasks
     */
    grunt.registerTask('build', function () {
        var mixinCfg = grunt.file.readJSON('mixins.json');
        grunt.config.set('template.processLoader.options.data', mixinCfg);
        grunt.task.run('template:processLoader');
    });

    grunt.registerTask('default', ['build', 'browserify']);
};
