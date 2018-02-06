import { resolve } from 'path';
import base, { plugins } from './base.config';

export default {
  ...base,
  entry: {
    sample: resolve('entry/sample'),
    'react-sample': resolve('entry/react-sample'),
    'redux-react-sample': resolve('entry/redux-react-sample'),
  },
  output: {
    library: 'MyExports',
    path: resolve('dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    ...plugins,
  ],
};
