import { resolve } from 'path';
import base, { plugins } from './base.config';
import UglifyJsPlugin from 'webpack/lib/optimize/UglifyJsPlugin';

export default {
  ...base,
  entry: {
    sample: resolve('entry/sample'),
    'react-sample': resolve('entry/react-sample'),
  },
  output: {
    path: resolve('dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    ...plugins,
    new UglifyJsPlugin({
      compress: {
        warnings: false,
      }
    }),
  ],
};
