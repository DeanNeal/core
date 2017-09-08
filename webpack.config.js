var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CssSourceMapPlugin = require('css-sourcemaps-webpack-plugin');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const NODE_ENV = process.env.NODE_ENV || 'dev';

var libraryName = '[name]';
var outputFile = libraryName + '.js';

module.exports = {
    entry: {
        index: ['./src/core.js']
        // devApp: ['./src/example/app.js']
    },
    output: {
        path: path.join(__dirname, NODE_ENV == 'prod' ? '' : 'build'),
        filename: outputFile, //NODE_ENV == 'prod' ? '[name][hash].js' : '[name].js',
        publicPath: '',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'src'),
                query: {
                    presets: 'es2015'
                }
            },
            {
                test: /\.(tpl|html)$/,
                loader: 'html',
                query: {
                    // variable: 'data',
                    withImports: true
                    // engine: 'lodash'
                }
            },
            {
                test: /\.scss$/,
                loader: 'css-loader!resolve-url!sass-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'file?name=[path][name].[ext]'
            }
        ]
    },

    // sassLoader: {
    //     includePath: ['dev/assets/scss']
    // },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],
    // Create Sourcemaps for the bundle
    // devtool: 'source-map',
    resolve: {
        root: path.resolve(__dirname, 'src'),
        alias: {
            // img: 'img',
            // example: path.resolve(__dirname, 'example'),
            // src: path.resolve(__dirname, 'src')
            //framework: 'framework',
            //assets: path.resolve(__dirname, 'dev/assets'),
        },
        extensions: ['', '.js', 'css', 'scss', 'html']
    },
    devServer: {
        port: "8080",
        contentBase: path.resolve(__dirname, 'build'),
        colors: true,
        historyApiFallback: true,
        hot: true,
        inline: true // reloads page after any changes
    }
};


//------PRODUCTION CONFIG--------//

if (NODE_ENV == 'dev') {
    module.exports.entry.devApp =  ['./src/example/app.js'];
    
    module.exports.plugins.push(
        new ExtractTextPlugin("[name].css", {allChunks: true}),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([{
            context: 'src/example/img',
            from: '**/*',
            to: 'img'
        }, {
            context: 'src/example/css',
            from: '**/*',
            to: 'css'
        }]),
        new HtmlWebpackPlugin({
            title: 'ACE',
            alwaysWriteToDisk: true,
            filename: path.resolve('build/index.html'),
            template: path.resolve(__dirname, 'src/example/index.html')
        }),
         new HtmlWebpackHarddiskPlugin({
            alwaysWriteToDisk: true,
            filename: 'index.html'
         })
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "vendor"
        // })
    )
}


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
        new CleanWebpackPlugin(['build'], {
            root: path.resolve(__dirname),
            verbose: true
        })
    )
}
