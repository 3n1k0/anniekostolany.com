const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = merge(common, {
	entry : {
		app : './src/server.jsx'
	},
	target : 'node',
	output : {
		path : path.resolve(__dirname, 'dist'),
		filename : 'server.js'
	},
	plugins : [
		new WebpackCleanupPlugin()
	]
});
