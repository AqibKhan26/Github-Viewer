module.exports = {
	entry:[
		'./src/index.js'
	],
	output: {
		path: __dirname,
		filename: 'app/js/main.js'
	},
	module:{
		rules:[
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				options: {
          			presets: ['@babel/preset-react']
        		},
				exclude: [/node_modules/]
			}
		]
	}
}