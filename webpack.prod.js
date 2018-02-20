const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const server = require('./webpack.server.js');
const webpack = require('webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');

const clinet = merge(common, {
	plugins : [
		new MinifyPlugin(),
		new webpack.DefinePlugin({
			'process.env' : {
				'NODE_ENV' : JSON.stringify('production')
			}
		})
	]
});

module.exports = [client, server];
