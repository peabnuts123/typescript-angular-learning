const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');


const libraries = require('./libraries').all;

module.exports = {
    entry: "./src/Components/index.ts",
    output: {
        path: __dirname + '/dist',
        filename: "application.min.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: [
                    /node_modules/
                ]
            },
            {
                test: /\.html$/,
                loader: "file-loader",
                query: {
                    context: "src/",
                    name: "[path][name].[ext]"
                }
            }
        ]
    },
    plugins: libraries.map(function (libraryName) {
        return new webpack.DllReferencePlugin({
            context: '.',
            manifest: require(`./dist/${libraryName}-manifest.json`)
        });
    })
    .concat(libraries.map(function (libraryName) {
        return new AddAssetHtmlPlugin({
            filepath: require.resolve(`./dist/${libraryName}-bundle.min.js`),
            includeSourcemap: false
        });
    }))
    .concat([
        new HtmlWebpackPlugin({
            template: '!!html-loader?minimize=false!./src/Components/index.html'
        })
    ])
}
