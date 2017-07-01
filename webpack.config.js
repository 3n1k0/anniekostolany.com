const path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry : {
		mobile : './src/index.jsx'
	},
	output : {
		path          : path.join(__dirname, './out/'),
		filename      : '[name].js',
		chunkFilename : '[id].bundle.js'
	},
	devtool : 'eval',
	module  : {
		rules : [
			{
				test    : /\.jsx$/,
				exclude : /(node_modules)/,
				loader  : 'babel-loader',
				options : {
					"presets" : ["es2015", "react"]
				}
			},
			{
				test    : /\.html$/,
				exclude : /(node_modules)/,
				loader  : 'html-loader'
			},
			{
				test   : /\.scss$/,
				loader : ExtractTextPlugin.extract('css-loader!sass-loader')
			}
		]
	},
	plugins : [
		new HtmlWebpackPlugin({
			template : 'src/index.html'
		}),
		new ExtractTextPlugin({
			filename  : 'index.css',
			allChunks : true
		})
	]
};
