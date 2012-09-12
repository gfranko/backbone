module.exports = function(grunt) {

  var min = {};
  [
    'Collection',
    'Events',
    'Model',
    'Router',
    'Sync',
    'View'
  ].forEach(function(name) {
    min[name] = {
      src: 'customBuild/js/Backbone.' + name + '.js',
      dest: 'customBuild/js/Backbone.' + name + '.min.js'
    };
  });

  grunt.initConfig({
    qunit: {
      index: 'test/index.html'
    },
    min: min
  });

  grunt.registerTask('default', 'min');

};
