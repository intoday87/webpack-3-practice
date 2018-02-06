import Express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import exphbs from 'express-handlebars';
import webpackConfig from './dev.server.config';

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
  publicPath: webpackConfig.output.publicPath,
};

app.use(webpackDevMiddleware(compiler, config));
app.use(webpackHotMiddleware(compiler));
app.use(Express.static(path.join('example')));
app.use(Express.static(path.join('dist')));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/render', (req, res) => {
  res.render('index', {
    body: `<script type="text/javascript" src="/sample.bundle.js"></script>`,
  });
});

const server = app.listen(3000, () => {
  const { host, port } = server.address();
  console.log('server listening at http://%s:%s', host, port);
});

