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
		filename      : '[name]-[hash:6].js',
		chunkFilename : '[id]-[hash:6].bundle.js',
		publicPath    : '/'
	},
	module  : {
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
		new HtmlWebpackPlugin({filename : 'streetstyle.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'couple-germany.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'couple-hungary.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'couple-miami.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'children.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'lifestyle.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'events.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'styled-bridal.html', template : 'src/index.html'}),
		new HtmlWebpackPlugin({filename : 'autumns-scent.html', template : 'src/index.html'}),
		new ExtractTextPlugin({filename  : 'bundle-[hash:6].css', allChunks : true})
	]
};
