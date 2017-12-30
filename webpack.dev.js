const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
	entry : {
		app : [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://localhost:3000',
			'webpack/hot/only-dev-server'
		]
	},
	devServer : {
		host               : 'localhost',
		port               : 3000,
		historyApiFallback : false,
		hot                : true,
		contentBase        : path.resolve(path.resolve(__dirname), 'out'),
		publicPath         : '/'
	},
	plugins : [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
});
