var webpack = require("webpack")
var path = require('path')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "index.js",
        sourceMapFilename: 'index.map',
        library: 'library',
        libraryTarget: 'umd'
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'stage-0']
                }
            }
        ]
    },
    plugins: (process.env.NODE_ENV !== 'production') ? [] : [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: false,
            mangle: true
        })
    ]
}
