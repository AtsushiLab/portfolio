module.exports = {
    // entry point
    entry: './app/ts/app.ts',
    
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

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.ts$/,
                // set prune file or directory
                exclude: /node_modules/,
                loader: 'ts-loader',
                query: {
                    configFileName: 'tsconfig.json' 
                }
            }
        ] 
    }

}
