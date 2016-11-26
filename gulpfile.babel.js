import gulp          from 'gulp';
import config        from './gulp.config.js';
import plugins       from 'gulp-load-plugins';
const $ = plugins({ pattern: config.pattern, lazy: false });

gulp.task('ts-webpack', () => {

    // synchronous processing with tsc task

    gulp.src([
        config.src.webpack
    ])
    .pipe($.webpack(config.webpack))
    .pipe(gulp.dest(config.dest.webpack));
});

gulp.task('css-copy', ['css-minify'], () => {
    gulp.src(config.src.copy.css)
    .pipe(gulp.dest(config.dest.copy.css));
});

gulp.task('html-copy', () => {
    gulp.src(config.src.copy.html)
    .pipe(gulp.dest(config.dest.copy.html));
});

gulp.task('css-minify', ['sass'], () => {
    return gulp.src(config.src.minify.css)
    .pipe($.cssmin())
    .pipe($.rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest(config.dest.minify.css));
});

gulp.task('sass', function() {
  return gulp.src(config.src.sass)
    .pipe($.sass(config.sass))
    .pipe($.postcss([$.postcssCssnext()]))
    .pipe(gulp.dest(config.dest.sass))
});

gulp.task('ts-watch', () => {
    gulp.watch(config.src.watch.ts, ['ts-webpack']);
});

gulp.task('sass-watch', () => {
    gulp.watch([
        config.src.watch.sass
    ], ['css-copy']);
});

gulp.task('html-watch', () => {
    gulp.watch([
        config.src.watch.html
    ], ['html-copy']);
});

gulp.task('default', ['ts-watch', 'sass-watch', 'html-watch', 'html-copy']);
