module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/*.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    // imagemin
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: 'src/images/',
            src: ['**/*.png'],
            // Could also match cwd line above. i.e. project-directory/img/
            dest: 'build/img/',
            ext: '.png'
          }
        ]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: './src/images/',
            src: ['**/*.jpg'],
            // Could also match cwd. i.e. project-directory/img/
            dest: 'build/img/',
            ext: '.jpg'
          }
        ]
      }
    },

    sass: {
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: './src/sass/',
          src: ['*.sass'],
          dest: './src/css/',
          ext: '.css'
        }]
      }
    },

    cssmin: {
      dist: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>  */'
        },
        files: {
          'build/<%= pkg.name %>.min.css': ['src/css/**/*.css']
        }
      }
    },

    htmlmin: {                                     // Task
      parts: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: 'parts/',
          src: '**/*.html',
          dest: 'build/parts/'
        }]
      },
      index: {                                       // Another target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          './index.html': './main.html'
        }
      }
    },



    watch: {
      files: 'src/**/*.*',
      tasks: ['default']
    },

    browserSync: {
      bsFiles: {
        src : 'build/**/*.css'
      },
      options: {
        server: {
          baseDir: "./"
        }
      }
    },

    serve: {
      options: {
        port: 9000
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Load the plugin that provides the "imagemin" task.
  //http://blog.grayghostvisuals.com/grunt/image-optimization/
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.loadNpmTasks('grunt-serve');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'cssmin', 'htmlmin']);
  // imagemin task(s)
  grunt.registerTask('image', ['imagemin']);
  grunt.registerTask('imagepng', ['imagemin:png']); // only .png files
  grunt.registerTask('imagejpg', ['imagemin:jpg']);// only .jpg files
  // css task(s)
  grunt.registerTask('validateBootstrap', ['bootlint']);
  grunt.registerTask('css', ['sass', 'cssmin']);

  grunt.registerTask('html', ['htmlmin']);



};
