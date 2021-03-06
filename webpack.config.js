const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const dotenv = require('dotenv')

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    filename: 'bundle.js',
    path:path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new webpack.DefinePlugin({
        'process.env': JSON.stringify(dotenv.config().parsed)
    })
  ],
}