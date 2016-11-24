module.exports = {
    // entry point
    entry: './app/js/app.js',
    
    // output file name
    output: {
         filename: './public/dist/bundle.js'
    },

    // dependency
    resolve: {
        // don't specift a relative path
        root: __dirname,
        modulesDirectories: ['node_modules'],
        extensions: ['', '.webpack.js', 'web.js', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                // set prune file or directory
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ] 
    }

}
