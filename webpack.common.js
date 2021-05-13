const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const sourcePath = `${__dirname}/src`;

module.exports = {
  entry: {
    index: `${sourcePath}/index.js`,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: `${sourcePath}/index.html`,
      chunks: ["index"],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.html/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.js/,

        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.(png|jpg|gif|svg|webp)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            exclude: /node_modules/,
            outputPath: "images",
            esModule: false,
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
};
