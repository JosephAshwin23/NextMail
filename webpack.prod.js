const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    devtool: 'source-map',
    mode: "production",

    output: {
        filename: "js/[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "build")
    },

    plugins: [

        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css",
        })
    ],
   
});