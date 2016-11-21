var
    gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    image = require('gulp-image')
    ;



gulp.task('sass', function () {
    return gulp.src('./src/assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});


gulp.task('browserify', function () {
    return browserify({entries: ['./src/assets/js/entry.js']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('image', function () {
    gulp.src('./src/images/**/*.+(jpg|png)')
        .pipe(image({
            pngquant: false,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            jpegoptim: true,
            mozjpeg: true,
            gifsicle: true,
            svgo: false,
            concurrent: 10
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('connect', function() {
    connect.server({
        port: 8080,
        // root: './src',
        livereload: true
    });
});

gulp.task('watch', ['connect'], function () {
    gulp.watch('src/assets/scss/**/*.scss', ['sass']);
    gulp.watch('./src/assets/js/**/*.js', ['browserify']);
    gulp.watch('src/app/images/**/*.+(jpg|png)', ['image']);
});






