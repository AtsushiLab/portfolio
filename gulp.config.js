'use strict';

import webpackConfig from './webpack.config.babel.js';
import sassConfig    from './sass.config.js';

module.exports = {

    // load file path
    src: {
        webpack: './aap/ts/*.ts',
        tsc: ['./app/ts/*.ts', './app/ts/*/*.ts'],
        sass: './app/sass/*.scss',
        minify: {
            css: './app/css/*.css'
        },
        map: './app/js',
        watch: {
            ts: ['./app/ts/*.ts', './app/ts/*/*.ts'],
            sass: './app/sass/*.scss',
            html: './index.html'
        },
        copy: {
            html: './index.html',
            css: './app/css/*.css'
        }
    },
    
    // output file path
    dest: {
        webpack: './',
        tsc: './app/js',
        sass: './app/css',
        minify: {
            css: './app/css' 
        },
        copy: {
            html: './public/dist',
            css: './public/dist/css'
        }
    },

    // config file
    webpack: webpackConfig,
    sass: sassConfig,
    ts: 'tsconfig.json',

    // gulp-load-plugins pattern
    pattern: ['gulp*', 'postcss-cssnext']
}
