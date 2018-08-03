var gulp = require('gulp');
var scss = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var minCss = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');



//压缩js
gulp.task("uglify", function() {
    gulp.src("./src/js/**/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("build/js"))
})

//压缩scss

gulp.task('scssTask', function() {
    gulp.src('./src/scss/*.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android>=4.0']
        }))
        .pipe(scss())
        .pipe(minCss())
        .pipe(gulp.dest('./src/css'))
})



//监听
gulp.task('watch', function() {
    gulp.watch('./src/scss/*.scss', ['scssTask'])
})