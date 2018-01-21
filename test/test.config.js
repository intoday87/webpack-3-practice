import {resolve} from 'path';
import webpack from 'webpack';
import postcssImport from 'postcss-import';
import webpackNodeExternal from 'webpack-node-externals';
import autoprefixer from 'autoprefixer';
import eslintFommatter from 'eslint-friendly-formatter';

const context = resolve(__dirname, '..');

const rules = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
      {
        loader: 'eslint-loader',
        options: {
          formatter: eslintFommatter,
          failOnError: true
        },
      }
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
          sourceMap: true,
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          indent: 'postcss',
          plugins: [
            postcssImport({
              addDependencyTo: webpack
            }),
            autoprefixer({browsers: '> 5%'}),
          ],
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
  context: context,
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
};
