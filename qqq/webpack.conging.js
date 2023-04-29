const path = require("path");
const HtmlWebpackPlugins = require("html-webpack-plugin");

module.export = {
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,"dist"),
        clean: true,
    },
    plugins: [new HtmlWebpackPlugins()],
}