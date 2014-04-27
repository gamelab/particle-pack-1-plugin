module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    BASE_PATH: '',
    DEVELOPMENT_PATH: '',

    yuidoc: {
            compile: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                url: '<%= pkg.homepage %>',
                options: {
                    extension: '.js',                               
                    paths: '<%= DEVELOPMENT_PATH %>' + 'src/',
                    outdir: '<%= BASE_PATH %>' + 'docs/'
                }
            }
        },

    uglify: {
            build: {
                files: {
                'particle-pack-1-<%= pkg.version %>.min.js': ['<%= pkg.main %>']
            }
        }
    },
 
    concat: {
          build: {
            src:['src/*'],
            dest: '<%= pkg.name %>-<%= pkg.version %>.js'
          }
    }

 });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-yuidoc');
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  grunt.registerTask("default", ["uglify:build","concat:build"]);
  grunt.registerTask("full", ["concat:build","uglify:build","yuidoc:compile"]);
  
};