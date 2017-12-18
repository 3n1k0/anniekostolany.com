const path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry : {
		app : [
			'./src/browser.jsx'
		]
	},
	resolve : {
		enforceExtension   : false,
		extensions         : ['.js', '.jsx'],
		mainFiles          : ['index']
	},
	output : {
		path          : path.join(__dirname, './out/'),
		filename      : '[name]-[hash:6].js',
		chunkFilename : '[id]-[hash:6].bundle.js',
		publicPath    : '/'
	},
	module : {
		rules : [
			{
				test    : /\.jsx$/,
				exclude : /(node_modules)/,
				loader  : 'babel-loader',
				options : {
					presets : ['env', 'react']
				}
			},
			{
				test    : /\.html$/,
				exclude : /(node_modules)/,
				loader  : 'html-loader'
			},
			{
				test   : /\.scss$/,
				loader : ExtractTextPlugin.extract('css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!sass-loader')
			}
		]
	},
	plugins : [
		new HtmlWebpackPlugin({filename : 'index.html', template : 'src/index.html'}),
		new ExtractTextPlugin({filename  : 'bundle-[hash:6].css', allChunks : true})
	]
};
