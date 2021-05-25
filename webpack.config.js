// webpack looks for this filename by default in out "./*" directory.

// declare global plugins/depedencies
let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");

// exporting this module for the global rules of webpack
module.exports = {
  // set entry
  entry: "./src/index.js",
  // set output
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "/build"),
    filename: "bundle.js",
  },
  module: {
    // resolve our different file types
    rules: [
      {
        // checks the extension
        test: /.(js|jsx)$/,
        // ignores these folders/directories
        exclude: /node_modules/,
        // if test passes, webpack uses the loaders specified
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(scss)$/,
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
      {
        test: /\.(png|jpe?g|gif|glb|gltf)$/i,
        use: "file-loader"
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  // set mode
  mode: "development",
  // setup dev server
  devServer: {
    host: 'localhost',
    hot: true,
    port: 8080,
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    inline: true,
    proxy: { "/api": { target: "http://localhost:3000", secure: false } },
  },
  // set plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      // favicon: 'test.png'
    }),
  ],
  // resolve extensions for imports into future components
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
        '@': path.resolve(__dirname, 'src/'),
    }
  },
};





