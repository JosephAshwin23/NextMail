const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "development",

    output: {
        filename: "js/[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        library: 'openTab',
        libraryTarget: 'window',
        libraryExport: 'default'
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css",
        })
    ], 
});