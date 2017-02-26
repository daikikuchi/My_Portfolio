module.exports = function(grunt) {

  grunt.config.merge({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 330,
            suffix: '',
            quality: 50
          }]
        },
        files: [{
          expand: true,
          src: ['family.jpg'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', [
    'responsive_images'
  ]);

};
