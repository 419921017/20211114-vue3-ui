const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}
/**
 * @type webpack.Configuration
 */
const config = {
  mode: 'production',
  entry: resolve('../packages/z-ui/index.ts'),
  output: {
    path: resolve('../lib'),
    filename: 'index.js',
    library: 'z-ui',
    libraryTarget: 'umd',
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue'],
  },
  module: {
    rules: [
      { test: /\.(ts|js)x?$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.(svg|otf|ttf|woff|woff2|eot|gif|png)$/,
        loader: 'url-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};

module.exports = config;
