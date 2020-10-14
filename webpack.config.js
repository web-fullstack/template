const path = require("path");

const {
    CleanWebpackPlugin,
} = require("clean-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");
// const merge = require("webpack-merge");

// console.log(`__dirname`, __dirname);


module.exports = {
    // entry: "./src/index.ts",
    entry: {
        index: path.join(__dirname, `/src/index.ts`),
        polyfills: `./src/old.polyfills.js`,
    },
    // mode: "development",
    mode: "production",
    output: {
        path: path.resolve(__dirname, `dist`),
        // filename: "app.min.js",
        filename: "[name].min.js",
    },
    // devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                include: path.resolve(__dirname, "src"),
                loader: "ts-loader",
                options: {
                    happyPackMode: true,
                    transpileOnly: true,
                    experimentalWatchApi: true,
                },
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "src"),
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(s)css|sass$/i,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin({
        //     title: "html-template",
        // }),
    ],
};

