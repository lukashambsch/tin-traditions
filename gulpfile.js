var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var filter = require('gulp-filter');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var mainBowerFiles = require('main-bower-files');

var src = {
  'js': ['client/js/**/*.js', '!client/js/lb-services.js']
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
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('bundle.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dist.js))
}

function buildBower () {
  gulp.src(mainBowerFiles())
    .pipe(uglify())
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest(dist.vendor))
}
