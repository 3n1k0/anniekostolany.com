const WebpackDevServer = require('webpack-dev-server'),
	config = require('./webpack.config.js'),
	webpack = require('webpack'),
	path = require('path'),
	compiler = webpack(config),
	server = new WebpackDevServer(compiler, {
		contentBase: path.resolve(path.resolve(__dirname), 'out'),
		publicPath: '/'
	});

server.listen(3000);
