const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MinifyCssExtractPlugIn = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // index.html을 기본 템플릿으로 반영할 수 있도록 설정
    }),
    new MinifyCssExtractPlugIn({ filename: 'styles/style.css' }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MinifyCssExtractPlugIn.loader, 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: ['file-loader'],
      },
    ],
  },
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
  },
};
