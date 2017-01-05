module.exports = {
	entry: "./app.js",
	output: {
		filename: "bundle.js"
	},
	module: {
		preLoaders: [
    	{
      	test: /\.js$/,
      	exclude: /node_modules/,
      	loader: 'jshint-loader'
			}
  	],
  	loaders: [
    	{
      	test: [/\.js$/, /\.es6$/],
      	exclude: /node_modules/,
      	loader: 'babel-loader',
      	query: {
       		presets: ['react', 'es2015'] 
      	}
    	},
    	{
    		test: /\.css$/,
    		loaders: ['style', 'css']
    	}
  	]
	},
	resolve: {
  	extensions: ['', '.js', '.jsx', '.es6']
	},
}