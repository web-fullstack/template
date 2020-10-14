const path = require("path");

module.exports = {
    entry: path.join(__dirname, `/src/index.ts`),
    mode: "development",
    output: {
        path: path.resolve(__dirname, `dist`),
        filename: "app.min.js",
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            }
        ],
    },
};

