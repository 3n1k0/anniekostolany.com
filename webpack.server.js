const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
	entry: {
		app: './src/server.jsx'
	},
	target: 'node',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'server.js'
	}
});
