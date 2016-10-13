const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const minifyCss = require('gulp-minify-css');
const concat = require('gulp-concat');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const del = require('del');
const runSequence = require('run-sequence');

//编译并压缩js
gulp.task('convertJS', function () {
  return gulp.src('app/js/*.js')
    .pipe(babel({
      presets: [ 'es2015' ]
    }))
    //.pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})

//合并并压缩css
gulp.task('convertCSS', function(){
  return gulp.src('app/css/*.css')
    .pipe(concat('main.css'))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename(function(path){
      path.basename += '.min';
    }))
    .pipe(gulp.dest('dist/css'));
})

//删除dist文件夹
gulp.task('clean', function (callback) {
  return del([ './dist/**' ],callback);
});

// browserify
gulp.task("browserify",function () {
  var b = browserify({
    entries: "dist/js/util.js"
  });

  return b.bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("./"));
});

gulp.task('start', function(){
  runSequence('clean',['convertJS','convertCSS'],'browserify');
});



