var extractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = [
    {
        context: __dirname,
        entry: {
            main: './pages/main/main.styl',
            cart: './pages/cart/cart.styl'
        },
        output: {
            path: path.join(__dirname, 'source/css'),
                filename: '[name].css'
        },
        module: {
            loaders: [
                {
                    test: /\.styl$/,
                    loader: extractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?browsers=last 5 version!stylus-loader')
                },
                {
                    test: /\.(png|jpg|svg)$/,
                    loader: 'url-loader?limit=14336' // inline base64 URLs for <=14k images
                },
                {
                    test: /\.(woff)$/,
                    loader: 'url-loader'
                }
            ]
        },
        plugins: [
            new extractTextPlugin('[name].css')
        ]
    },
    {
        name: 'clientside',
        target: 'web',
        context: __dirname,
        entry: {
            main: './pages/main/main.js',
            cart: './pages/cart/cart.js'
        },
        output: {
            path: path.join(__dirname, 'source/js'),
                filename: '[name].js'
        },
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015'],
                        plugins: ['jsx-control-statements'],
                        cacheDirectory: true
                    }
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                }
            ]
        },
        profile: false,
        plugins: [
            new webpack.DefinePlugin({
              'process.env.NODE_ENV': '"production"'
            })
        ]
    }
];
