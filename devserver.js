const WebpackDevServer = require('webpack-dev-server'),
	config = require('./webpack.dev.js'),
	webpack = require('webpack'),
	path = require('path'),
	compiler = webpack(config),
	ssr = require('./dist/server.js'),
	devServer = {
		host               : 'localhost',
		port               : 3000,
		historyApiFallback : false,
		hot                : true,
		contentBase        : path.resolve(path.resolve(__dirname), 'out'),
		publicPath         : '/'
	},
	server = new WebpackDevServer(compiler, devServer);

server.listen(3000);
