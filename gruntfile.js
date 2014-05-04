
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    
    yuidoc: {
            compile: {
                name: 'generator-kiwiplugin',
                description: 'Yeoman generator',
                version: '0.0.0',
                url: '',
                options: {
                    extension: '.js',                               
                    paths: 'src/',
                    outdir: 'docs/'
                }
            }
        },

    uglify: {
            build: {
                files: {
                'particlePack1-0.0.0.min.js': ['app/index.js']
            }
        }
    },
 
    concat: {
          build: {
            src:['src/*'],
            dest: 'generator-kiwiplugin-0.0.0.js'
          }
    },
    
    connect: {
      server: {
        options: {
          port: 9000,
          base: './'
        }
      }
    }
 });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-yuidoc');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  
  grunt.registerTask("default", [
    "uglify:build",
    "concat:build"
    ]);
  
  grunt.registerTask("full", [
    "concat:build",
    "uglify:build",
    "yuidoc:compile"
    ]);

  grunt.registerTask('serve', [
    'connect:server:keepalive'
    ]);

  
  

};