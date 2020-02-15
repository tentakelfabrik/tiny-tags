const mix = require('laravel-mix');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'dist/index.html',
            template: 'src/assets/html/index.html.ejs',
            inject: false,
            svg: fs.readFileSync(__dirname + '/src/assets/icomoon/symbol-defs.svg')
        })
    ],
    module: {
		rules: [{
			test: /\.riot$/,
			exclude: /node_modules/,
			use: [{
				loader: '@riotjs/webpack-loader',
				query: {
					hot: false
				}
			}]
		}
    ]}
});

mix.js('demo-386.js', 'dist/js');
mix.sass('demo-386.scss', 'dist/css');
mix.copy('src/assets/fonts', 'dist/fonts');
