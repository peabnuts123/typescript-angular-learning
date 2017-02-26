const webpack = require('webpack');
const entryPoints = require('./libraries').entryPoints;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: entryPoints,
    output: {
        path: 'dist/scripts/lib',
        filename: `[name]-bundle.min.js`,
        library: `[name]_lib`
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },

            // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
            // loads bootstrap's css.
            {
                test: /\.(woff|woff2|ttf|eot|svg)$/,
                loader: "file-loader",
                query: {
                    name: "../../fonts/[name].[ext]"
                }
            },
        ]
    },
    plugins: [
        new webpack.DllPlugin({
            // The path to the manifest file which maps between
            // modules included in a bundle and the internal IDs
            // within that bundle
            path: `build/[name]-manifest.json`,
            // The name of the global variable which the library's
            // require function has been assigned to. This must match the
            // output.library option above
            name: `[name]_lib`
        }),
        new ExtractTextPlugin({
            filename: '../../styles/[name].min.css'
        })
    ]
};