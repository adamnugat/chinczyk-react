var path = require('path');

module.exports = {
	entry: './js/script.js',
	output: {
		path: path.resolve(__dirname, 'output'),
		filename: 'transpiled.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						query: {
							presets: ['es2015', 'react'],
							plugins: ['transform-object-rest-spread', 'transform-decorators-legacy', 'transform-class-properties']
						}
					}
				],
				exclude: /node_modules/,
			}
		]
	}
}