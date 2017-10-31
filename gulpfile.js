var gulp         = require('gulp'),
    browserSync  = require('browser-sync').create(),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    fileInclude  = require('gulp-file-include');

// Static Server + watching sass/html files
gulp.task('serve', ['sass', 'htmlImport'], function() {
    browserSync.init({
        server: './'
    });

    gulp.watch('sass/**/*.sass', ['sass']);
    gulp.watch('src/**/*.html', ['htmlImport']);
    gulp.watch('*.html').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src('sass/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['> 5%'],
            cascade: true
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

// Import html and put it in a root
gulp.task('htmlImport', function() {
    return gulp.src('src/*.html')
        .pipe(fileInclude({
            prefix: '@'
        }))
        .pipe(gulp.dest(''));
});

gulp.task('default', ['serve']);