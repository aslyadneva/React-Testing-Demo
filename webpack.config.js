// This file expoorts an object with Webpack's configuration
const path = require("path"); // node.js specific module that resolves paths
const webpack = require("webpack"); // importing webpack here so we can use it's plugins

module.exports = {
  // entry tells webpack from what file to start building the dependency graph
  entry: "./src/index.js",
  mode: "development",
  module: {
    // rules tell webpack how to process(aka put through a 'loader') different types of files
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  // output tells webpack where to put the bundled code
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
  },
  // plugins is where we can instantiate new instances of different plugins
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
