import {NoEmitOnErrorsPlugin, DefinePlugin} from 'webpack';
import webpackNodeExternal from 'webpack-node-externals';

export const plugins = [
  new NoEmitOnErrorsPlugin(),
  new DefinePlugin({
    'process.env': {
      PROFILE: JSON.stringify(process.env.PROFILE),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
    Platform: {
      OS: JSON.stringify('node'),
    },
  }),
];

const rules = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
      {
        loader: 'eslint-loader',
        options: {
          failOnError: true,
        },
      },
    ],
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      'universal-style-loader',
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
        },
      },
    ],
  },
  {
    test: /\.hbs$/,
    use: 'handlebars-loader',
  },
];

export default {
  context: __dirname,
  target: 'node',
  resolve: {
    modules: [
      'node_modules',
      'component',
    ],
    alias: {}
  },
  module: {
    rules
  },
  /**
   * test 환경에서 webpack은 node 환경에서 실행되기 때문에 browser 환경의 불필요한 것들을 로딩하게 된다.
   *
   * @see https://www.npmjs.com/package/webpack-node-externals
   */
  externals: [
    webpackNodeExternal(),
    {
      'window': 'var global',
    }
  ],
  plugins,
};
