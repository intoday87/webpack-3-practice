import {resolve} from 'path';
import {NoEmitOnErrorsPlugin, DefinePlugin} from 'webpack';
import autoprefixer from 'autoprefixer';

export const plugins = [
  new NoEmitOnErrorsPlugin(),
  new DefinePlugin({
    'process.env': {
      PROFILE: JSON.stringify(process.env.PROFILE),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
    Platform: {
      OS: JSON.stringify('browser'),
    }
  })
];

const rules = [
  {
    test: /\.js$/,
    exclude: [
      resolve('node_modules'),
      resolve('dist'),
    ],
    use: 'eslint-loader',
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          sourceMap: true,
          importLoaders: 1,
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          indent: 'postcss',
          plugins: [
            autoprefixer({browsers: '> 5%'})
          ]
        }
      },
    ]
  },
  {
    test: /\.hbs$/,
    use: 'handlebars-loader',
  },
];

export default {
  module: {
    rules
  },
};
