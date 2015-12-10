var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var filter = require('gulp-filter');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var bower = require('main-bower-files');

var src = {
  'js': ['client/js/**/*.js']
};

var publishdir = 'client/build';
var dist = {
  js: publishdir,
  vendor: publishdir
};

gulp.task('default', function () {
  console.log('test');
});

gulp.task('js', buildJs);

gulp.task('watch', function () {
  gulp.watch(src.js, ['js']);
});

gulp.task('bower', buildBower);

function buildJs () {
  gulp.src(src.js)
    .pipe(jshint())
    .pipe(sourcemaps.init())
      .pipe(concat('bundle.min.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dist.js))
}

function buildBower () {
  var jsFilter = filter('**/*.js', {restore: true});
  var cssFilter = filter('**/*.css');
  return gulp.src(bower())
    .pipe(jsFilter)
    .pipe(concat('vendor.js'))
    .pipe(jsFilter.restore)
    .pipe(gulp.dest(dist.vendor))
}
