const gulp = require('gulp');
const babel = require('gulp-babel');
const browser = require('browser-sync').create();
const reload = browser.reload;

const config = require('./config.json');

gulp.task('js', () => {
    return gulp.src(config.js.src)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest(config.js.dist))
        .on('end', reload);

});

gulp.task('html', () => {
    return gulp.src(config.html.src)
        .pipe(gulp.dest(config.html.dist))
        .on('end', reload);
});

gulp.task('images', () => {
    return gulp.src(config.images.src)
        .pipe(gulp.dest(config.images.dist))
        .on('end', reload);
});

gulp.task('json', () => {
    return gulp.src(config.json.src)
        .pipe(gulp.dest(config.json.dist))
        .on('end', reload);
});

gulp.task('server', () => {
    const serverConfig = {
        server: {
            baseDir: config.browserSync.directory,
        }
    };

    browser.init(serverConfig);

    gulp.watch(config.html.src, ['html'], reload);
    gulp.watch(config.images.src, ['images'], reload);
    gulp.watch(config.js.src, ['js'], reload);
});

gulp.task('default', ['server', 'html', 'images', 'json', 'js']);
