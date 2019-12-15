var path = require('path');
var webpack = require('webpack');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
var SmartBannerPlugin = require('smart-banner-webpack-plugin');
// var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
// var CssSourceMapPlugin = require('css-sourcemaps-webpack-plugin');
// var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const NODE_ENV = process.env.NODE_ENV || 'dev';

var libraryName = '[name]';
var outputFile = libraryName + '.js';

 const packageJSON = require('./package.json');

module.exports = {
    entry: {
        index: ['./src/core.ts'],
        demo: ['./src/sandbox/main.ts']
    },
    output: {
        path: path.resolve(__dirname, 'build'),//path.join('build'),
        filename: outputFile,
        publicPath: 'build',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          },
          {
            test: /\.(html)$/,
            use: {
              loader: 'html-loader'
            }
          },
          {
            test: /\.css$/i,
            use: ['to-string-loader', 'css-loader'],
          }
        ]

    },

    plugins: [
        // new webpack.NoErrorsPlugin(),
        // new webpack.DefinePlugin({
        //     NODE_ENV: JSON.stringify(NODE_ENV),
        //     VERSION: JSON.stringify(packageJSON.version)
        // }),
        // new ExtractTextPlugin("[name].css", { allChunks: true }),
        // new webpack.HotModuleReplacementPlugin(),
        // new CopyWebpackPlugin([{
        //     context: 'src/example/img',
        //     from: '**/*',
        //     to: 'img'
        // }, {
        //     context: 'src/example/css',
        //     from: '**/*',
        //     to: 'css'
        // }]),
        new HtmlWebpackPlugin({
            title: '@dean_neal',
            // alwaysWriteToDisk: true,
            filename: path.resolve('index.html'),
            template: path.resolve(__dirname, 'src/index.html')
        })
        // new HtmlWebpackHarddiskPlugin({
        //     alwaysWriteToDisk: true,
        //     filename: 'index.html'
        // })
    ],
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
    // resolve: {
    //     root: path.resolve(__dirname, 'src'),
    //     alias: {

    //     },
    //     extensions: ['', '.js', 'css', 'scss', 'html']
    // },
    resolve: {
        extensions: ['.ts', '.js' ]
      },
    // devServer: {
    //     port: "8081",
    //     contentBase: '',
    //     colors: true,
    //     historyApiFallback: true,
    //     hot: false,
    //     inline: true // reloads page after any changes
    // }
    devServer: {
        contentBase: path.join(__dirname, ''),
        port: 8000,
        open: true,
        historyApiFallback: true
        // publicPath: "/build"
      }
};


//------PRODUCTION CONFIG--------//

if (NODE_ENV == 'prod') {
    module.exports.plugins.push(
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     mangle: {
        //         keep_fnames: true
        //     }
        // }),
        new SmartBannerPlugin({
            banner: `${packageJSON.name} ${packageJSON.version}\nMay be freely distributed under the MIT license \nAuthor: ${packageJSON.author}\nLast update: ${new Date().toLocaleString()}\n`,
            raw: false,
            entryOnly: true
        }),
        new CleanWebpackPlugin(['build'], {
            root: path.resolve(__dirname),
            verbose: true
        })
    )
}