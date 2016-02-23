module.exports = {
  options: {
      livereload: '<%= connect.options.livereload %>'
  },
  angular: {
      files: ['src/**/{,*/}*.js', 'src/img/{,*/}**'],
      tasks: ['clean:angular', 'copy:angular'],
      options: {
        livereload: true
      }
  },
  less: {
    files: ['src/css/less/{,*/}**'],
    tasks: ['recess:less', 'copy:html'],
    options: {
      livereload: true
    }
  },
  tpl: {
    files: [
      'src/*.html', 'src/tpl/{,*/}*.html', 'src/tpl/blocks/{,*/}*.html'
    ],
    tasks: ['build:tpl'],
    options: {
      livereload: true
    }
  }
}
