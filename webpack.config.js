/*eslint-disable*/
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: ['babel-polyfill', './src/index.jsx'],
        vendor: ['react', 'react-dom', 'react-router', 'react-redux', 'redux-thunk']
    },
    output: {
        path: path.join(__dirname, '/build/'),
        filename: 'bundle.js',
        chunkFilename: '[name].[chunkhash:5].chunk.js',
        publicPath: '/build/'
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            },
            __BUILD__: JSON.stringify(process.env.build) || JSON.stringify('DEV'),
            __PID__: JSON.stringify(process.env.pid) || JSON.stringify('BASE')
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true, // enable source maps to map errors (stack traces) to modules
            output: {
                comments: false, // remove all comments
            },
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        noParse: [/jszip.js$/],
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};
