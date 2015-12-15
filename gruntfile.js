module.exports = function( grunt ) {

	// Project configuration.
	grunt.initConfig( {
		pkg: grunt.file.readJSON( "package.json" ),

		clean: [ "build" ],

		concat: {
			build: {
				src: [ "src/**/*.js" ],
				dest: "build/<%= pkg.filenameBase %>-<%= pkg.version %>.js"
			}
		},

		connect: {
			server: {
				options: {
					port: 9000,
					base: "./"
				}
			}
		},

		jshint: {
			src: "src/**/*.js",
			options: {
				camelcase: true,
				curly: true,
				eqeqeq: true,
				eqnull: true,
				newcap: true,
				quotmark: "double"
			}
		},

		yuidoc: {
			compile: {
				name: "<%= pkg.name %>",
				description: "<%= pkg.description %>",
				version: "<%= pkg.version %>",
				url: "<%= pkg.homepage %>",
				options: {
					extension: ".js",
					paths: "src/",
					outdir: "docs/"
				}
			}
		},

		uglify: {
			build: {
				files: {
					"build/<%= pkg.filenameBase %>-<%= pkg.version %>.min.js":
						["<%= pkg.main %>**/*.js"]
				}
			}
		}
	});

	grunt.loadNpmTasks( "grunt-contrib-clean" );
	grunt.loadNpmTasks( "grunt-contrib-concat" );
	grunt.loadNpmTasks( "grunt-contrib-connect" );
	grunt.loadNpmTasks( "grunt-contrib-jshint" );
	grunt.loadNpmTasks( "grunt-contrib-uglify" );
	grunt.loadNpmTasks( "grunt-contrib-yuidoc" );

	grunt.registerTask( "default", [
		"jshint",
		"clean",
		"concat:build",
		"uglify:build"
		]);

	grunt.registerTask( "full", [
		"default",
		"yuidoc:compile"
		]);

	grunt.registerTask( "serve", [
		"connect:server:keepalive"
		]);
};
