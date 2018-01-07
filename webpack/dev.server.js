import Express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './dev.server.config.js';

const app = new Express();
const compiler = webpack(webpackConfig);

const config = {
  noInfo: true,
  quiet: false,
  hot: true,
  inline: true,
  lazy: false,
  stats: { colors: true },
  headers: { 'Access-Control-Allow-Origin': '*' },
  publicPath: webpackConfig.output.publicPath
};

app.use(webpackDevMiddleware(compiler, config));
app.use(webpackHotMiddleware(compiler));
app.use(Express.static(path.join('example')));

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('server listening at http://%s:%s', host, port);
});

