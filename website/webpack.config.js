const path = require('path');
const webpack = require('webpack');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

/**
 * @type webpack.Configuration | webpack.WebpackOptionsNormalized
 */
const config = {
  mode: 'development',
  devtool: 'source-map',
  entry: resolve('main.ts'),
  output: {
    path: resolve('../website'),
    filename: 'bundle.js',
  },
  devServer: {
    open: true,
  },
  resolve: {
    extensions: ['.wasm', '.ts', '.tsx', '.mjs', '.cjs', '.js', '.json'],
    alias: {
      vue: '@vue/runtime-dom',
    },
  },
  module: {
    rules: [
      { test: /\.(ts|js)x?$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.(svg|otf|ttf|woff|woff2|eot|gif|png)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 限制于 8kb
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({ template: resolve('template.html') }),
  ],
};

module.exports = config;
