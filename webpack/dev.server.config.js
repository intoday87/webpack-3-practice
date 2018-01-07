import { resolve } from 'path';
import { HotModuleReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import base, { plugins } from './base.config';

export default {
  ...base,
  devtool: 'inline-source-map',
  entry: {
    main: [
      'webpack-hot-middleware/client',
      resolve('example', 'index.js')
    ]
  },
  output: {
    path: resolve('examples'),
    filename: '[name]/[hash].js',
    chunkFilename: '[name]/[chunkhash].js',
    publicPath: '/'
  },
  plugins: [
    ...plugins,
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin()
  ]
};
