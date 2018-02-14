/*eslint-disable*/
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config-dev-server');

const PORT = 4000;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(PORT, 'localhost', (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`Listening at http://localhost:${PORT}/`);
});
