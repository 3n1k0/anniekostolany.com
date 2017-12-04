const WebpackDevServer = require('webpack-dev-server'),
	config = require('./webpack.dev.js'),
	webpack = require('webpack'),
	compiler = webpack(config),
	server = new WebpackDevServer(compiler, config.devServer);

server.listen(3000);
