const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container
    .ModuleFederationPlugin;
const path = require('path');
const deps = require('./package.json').dependencies;
module.exports = {
    entry: './src/index',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3001,
    },
    output: {
        publicPath: 'auto',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react'],
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: './../img/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'app1',
            filename: 'remoteEntry.js',
            remotes: {
                app2: 'app2@http://localhost:3002/remoteEntry.js'
            },
            exposes: {
                './Navigation': './src/Navigation',
                './routes': './src/routes',
            },
            shared: {
                ...deps,
                react: {
                    eager: true,
                    singleton: true,
                    requiredVersion: deps.react,
                },
                'react-dom': {
                    eager: true,
                    singleton: true,
                    requiredVersion: deps['react-dom'],
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
