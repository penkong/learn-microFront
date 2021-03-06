const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // react , es5 , 6 or ... maker
            presets: ["@babel/preset-react", "@babel/preset-env"],

            // let use sth like async ...
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ]
};
