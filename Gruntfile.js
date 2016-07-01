module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
  js: {
    files: ['library/js/*.js'],
    tasks: ['concat:js', 'uglify:js'],
  },
  css: {
    files: ['library/less/*.less'],
    tasks: ['less:style'],
  },
  php : {
    files: ['**/*.php'],
  },
  options: {
      livereload: true,
      spawn: false
  }
}

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Register the default tasks.
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('default', 'compass');
};



browserSync: {
  files: {
    src : [
      'assets/css/*.css',
      'assets/img/*',
      'assets/js/*.js',
      '**/*.html'
    ],
  },
  options: {
    watchTask: true
  }
},