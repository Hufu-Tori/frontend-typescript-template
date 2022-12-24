const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: "development",
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./index.html" }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'src/'),
        },
        compress: true,
        port: 9000,
    },
};