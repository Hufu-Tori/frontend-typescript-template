const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.[hash:6].js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: "production",
    optimization: {
        usedExports: true,
    },
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
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "./src/assets/**/*", to: "assets/[name]-[hash:6].[ext]" }
            ],
        }),
        new HtmlWebpackPlugin({ template: "./index.html" }),
    ]
};