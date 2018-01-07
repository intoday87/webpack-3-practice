import { resolve } from 'path';
import base, { plugins } from './base.config';

export default {
  ...base,
  entry: resolve('entry/index'),
  output: {
    path: resolve('dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    ...plugins,
  ],
};
