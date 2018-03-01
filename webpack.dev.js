const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const server = require('./webpack.server.js');
const webpack = require('webpack');
const path = require('path');

const client = merge(common, {
	entry: {
		app: [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://localhost:3000',
			'webpack/hot/only-dev-server'
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
});

module.exports = [client, server];
