import {resolve} from 'path';
import { NoEmitOnErrorsPlugin, DefinePlugin } from 'webpack';

export const plugins = [
  new NoEmitOnErrorsPlugin(),
  new DefinePlugin({
    'process.env': {
      PROFILE: JSON.stringify(process.env.PROFILE),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
    Platform: {
      OS: JSON.stringify('browser')
    }
  })
];

export default {
  entry: resolve('entry/index'),
  output: {
    path: resolve('dist'),
    filename: "[name].bundle.js"
  }
};
