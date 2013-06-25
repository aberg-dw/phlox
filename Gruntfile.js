/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    less: {
      dev:{
        options:{
          yuicompress: false
        },
        files: {
          "build/dev/phlox.css": "src/phlox.less",
          "build/dev/phlox-responsive.css": "src/phlox-responsive.less"
        }
      },
      dist:{
        options:{
          yuicompress: true
        },
        files: {
          "build/dist/phlox.css": "src/phlox.less",
          "build/dist/phlox-responsive.css": "src/phlox-responsive.less"
        }
      }
    },

    connect: {
      uses_defaults: {}
    },

    open : {
      dev : {
        path: 'http://localhost:8000/build/dev/test-full.html'
      }
    },

    watch: {
      options: {
        livereload: true
      },
      html:{
        files: ['build/dev/*.html']
      },
      css: {
        files: 'src/**/*.less',
        tasks: ['less:dev']
      },
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['connect', 'open', 'watch']);

};
