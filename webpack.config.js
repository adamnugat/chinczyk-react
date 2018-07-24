var path = require('path');

module.exports = {
	entry: './script.js',
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
							presets: ['es2015', 'react']
						}
					}
				],
				exclude: /node_modules/,
			}
		]
	}
}