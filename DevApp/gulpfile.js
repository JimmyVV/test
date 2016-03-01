var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    prefix = require('gulp-autoprefixer'),
    postcss = require('gulp-postcss'),
    autoprefix = require('autoprefixer'),
    flexpost = require('postcss-flexboxfixer'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'), //合并
    webpack = require('gulp-webpack'), //webpack处理流文件
    config = require('./webpack.config'), //webpack的配置文件
    uglify = require('gulp-uglify'), //压缩
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    group = require('gulp-group-files');


gulp.task('webpack', () => {
    gulp.watch('app/**/*.js',function(event){
        gulp.src('app/**/*.js')
        .pipe(webpack(config))
        .pipe(gulp.dest('./app/dist'));
    })
})

gulp.task('watch', function() {
    gulp.watch('app/styles/**/*.scss', ['sass'])
})
gulp.task('sass', () => {
    var processors = [ //这里就是中间件
        //已经require("autoprefixer");
        autoprefix({
            browsers: ['last 3 Safari versions', "last 2 Explorer versions", 'last 2 Explorer versions', "iOS 5"],
            cascade: true,
            remove: true
        }),
        flexpost
    ];
    return gulp.src("app/styles/scss/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        // .pipe(uglify())
        .pipe(gulp.dest('app/styles'));
});
gulp.task('sync', function() {
    var files = [
        'app/**/*.html',
        'app/styles/**/*.css',
        'app/img/**/*.png',
        'app/dist/**/*.js'
    ];
    browserSync.init(files, {
        server: {
            baseDir: './app'
        }
    });
});

gulp.task('babel', function() {
    // gulp.watch(['app/js/entry/upload.js'], function() {
    return gulp.src(['app/js/entry/**/*.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('../js/entry'));


});

gulp.task('eslint', function() {
    return gulp.src(['app/js/entry/upload.js'])
        .pipe(eslint({
            "parser": "babel-eslint",
            "rules": {
                "strict": 0
            }
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
})
gulp.task('default', ['sync', 'watch']);
