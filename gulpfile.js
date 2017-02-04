var gulp = require("gulp"),
    babelify = require('babelify'),
    browserify = require("browserify"),
    connect = require("gulp-connect"),
    source = require("vinyl-source-stream"),
    sourcemaps = require('gulp-sourcemaps'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer');
    cssnano = require('gulp-cssnano');

gulp.task("default", ["html", "componentsHtml", "style", "script", "img", "font", "startServer"]);

gulp.task("html", function () {
    return gulp.src("./app/index.html")
        .pipe(gulp.dest("./dist"))
});

gulp.task("componentsHtml", function () {
    return gulp.src("./app/components/*/*.html")
        .pipe(gulp.dest("./dist/components"))
});

gulp.task('style', function () {
    return gulp.src('app/styles/index.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/styles'))
});

gulp.task("script", function () {
    return browserify({
        entries: ["./app/js/index.js"]
    })
        .transform(babelify.configure({
            presets: ["es2015"]
        }))
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("./dist"));
});

gulp.task('img', function () {
    return gulp.src('app/img/*.*')
        .pipe(gulp.dest('dist/img/'));
});

gulp.task('font', function () {
    return gulp.src('app/font/**/')
        .pipe(gulp.dest('dist/font/'));
});

gulp.task("startServer", function () {
    connect.server({
        root: "./dist",
        livereload: true,
        port: 9001
    });
});

gulp.task('watch', function () {
    gulp.watch('startServer');
    gulp.watch(['app/js/*.js'], ['script']);
    gulp.watch(['app/components/*/*.js'], ['script']);
    gulp.watch('app/index.html', ['html']);
    gulp.watch('app/components/*/*.html', ['componentsHtml']);
    gulp.watch('app/styles/*.less', ['style']);
    gulp.watch('app/components/*/*.less', ['style']);
  });