const path = require('path');

module.exports = {
	entry: {
		app: ['./src/browser.jsx']
	},
	resolve: {
		enforceExtension: false,
		extensions: ['.js', '.jsx'],
		mainFiles: ['index']
	},
	output: {
		path: path.join(__dirname, './out/'),
		filename: '[name].js',
		chunkFilename: '[id].bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				options: {
					presets: ['env', 'react'],
					plugins: [
						'transform-object-rest-spread',
						'transform-react-jsx',
						'transform-class-properties'
					]
				}
			}
		]
	}
};
