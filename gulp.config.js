module.exports = {

    // load file path
    src: {
        webpack: './aap/js/*.js',
        tsc: './app/ts/*.ts',
        watch: './app/ts/*.ts',
        copy: './index.html'
    },
    
    // output file path
    dest: {
        webpack: './',
        tsc: './app/js',
        copy: './public/dist'
    },

    tsconfig: 'tsconfig.json'
}
