const path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	webpack = require('webpack');

module.exports = {
	entry : {
		app : [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://localhost:3000',
			'webpack/hot/only-dev-server',
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
		filename      : '[name].js',
		chunkFilename : '[id].bundle.js',
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
		new HtmlWebpackPlugin({
			filename : 'index.html',
			template : 'src/index.html'
		}),
		new HtmlWebpackPlugin({
			filename : 'my-story.html',
			template : 'src/index.html'
		}),
		new HtmlWebpackPlugin({
			filename : 'rates.html',
			template : 'src/index.html'
		}),
		new HtmlWebpackPlugin({
			filename : 'couple-shoots.html',
			template : 'src/index.html'
		}),
		new HtmlWebpackPlugin({
			filename : 'confidence-is-key.html',
			template : 'src/index.html'
		}),
		new HtmlWebpackPlugin({
			filename : 'fashion-confession.html',
			template : 'src/index.html'
		}),
		new HtmlWebpackPlugin({
			filename : 'rebellion.html',
			template : 'src/index.html'
		}),
		new HtmlWebpackPlugin({
			filename : 'lost-bride.html',
			template : 'src/index.html'
		}),
		new HtmlWebpackPlugin({
			filename : 'dreamy-beach.html',
			template : 'src/index.html'
		}),
		new HtmlWebpackPlugin({
			filename : 'events-and-lifestyle.html',
			template : 'src/index.html'
		}),
		new HtmlWebpackPlugin({
			filename : 'children.html',
			template : 'src/index.html'
		}),
		new HtmlWebpackPlugin({
			filename : 'contact.html',
			template : 'src/index.html'
		}),
		new ExtractTextPlugin({
			filename  : 'index.css',
			allChunks : true
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],
	devServer: {
		host               : 'localhost',
		port               : 3000,
		historyApiFallback : true,
		hot                : true,
		contentBase        : path.resolve(path.resolve(__dirname), 'out'),
		publicPath         : '/'
	}
};
