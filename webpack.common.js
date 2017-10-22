const path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	webpack = require('webpack');

module.exports = {
	entry : {
		app : [
			'./src/index.jsx'
		]
	},
	resolve : {
		enforceExtension   : false,
		extensions         : ['.js', '.jsx'],
		mainFiles          : ['index']
	},
	output : {
		path          : path.join(__dirname, './out/'),
		filename      : '[name]-[hash].js',
		chunkFilename : '[id]-[hash].bundle.js',
		publicPath    : '/'
	},
	devtool: 'source-map',
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
				loader : ExtractTextPlugin.extract('css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!sass-loader')
			}
		]
	},
	plugins : [
		new HtmlWebpackPlugin({filename : 'index.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'contact.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'thanks.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'about-me.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'pricing.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'dreamy-beach.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'lost-bride.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'rebellion.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'fashion-confession.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'confidence-is-key.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'tropical-vibes.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'couple-germany.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'couple-hungary.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'couple-miami.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'children.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'lifestyle.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'events.html', template : 'src/index.html'}),
		new ExtractTextPlugin({filename  : 'index.css', allChunks : true})
	]
};
