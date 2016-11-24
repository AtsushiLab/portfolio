import gulp          from 'gulp';
import webpackConfig from './webpack.config.js';
import config        from './gulp.config.js';
import plugins       from 'gulp-load-plugins';
const $ = plugins();

gulp.task('webpack', ['tsc'], () => {

    // synchronous processing with tsc task

    gulp.src([
        config.src.webpack
    ])
    .pipe($.webpack(webpackConfig))
    .pipe(gulp.dest(config.dest.webpack));
});

// transpile typescript
gulp.task('tsc', () => {
    
    const tsProject = $.typescript.createProject(config.tsconfig);

    // return stream
    return gulp.src([
        config.src.tsc
    ])
    .pipe(tsProject())
    .pipe(gulp.dest(config.dest.tsc));
});

gulp.task('copy', () => {
    gulp.src(config.src.copy)
    .pipe(gulp.dest(config.dest.copy));
});

gulp.task('watch', () => {
    gulp.watch([
        config.src.watch
    ], ['webpack']);
});

gulp.task('default', ['watch', 'copy']);
