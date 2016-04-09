var extractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = [
    {
        context: __dirname,
        entry: './pages/main/main.styl',
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
        entry: './pages/main/main.js',
        output: {
            path: path.join(__dirname, 'source/js'),
                filename: 'app.js'
        },
        module: {
            loaders: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    cacheDirectory: true
                }
            }]
        },
        profile: false
    }
];
