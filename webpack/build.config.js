import { resolve } from 'path';
import base, { plugins } from './base.config';

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
  ],
};
