import path from 'path';
import Express from 'express';
import React from 'react';
import {createStore} from 'redux';
import {renderToString} from 'react-dom/server';
import exphbs from 'express-handlebars';
import qs from 'qs';
import counterReducer from '../component/redux-react-sample/reducers';
import CounterApp from '../component/redux-react-sample';

const app = Express();

//Serve static files
app.use(Express.static(path.join('dist')));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// This is fired every time the server side receives a request
app.get('/', (req, res) => {
  // We are going to fill these out in the sections to follow
  const params = qs.parse(req.query);
  const counter = parseInt(params.counter, 10) || 0;

  let preloadedState = counter;

  const store = createStore(
    counterReducer,
    preloadedState,
  );

  const html = renderToString(
    <CounterApp store={store} />
  );

  const finalState = store.getState();

  res.render('index', {body: renderFullPage(html, finalState)});
});

function renderFullPage(html, preloadedState) {
  return `
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/redux-react-sample.bundle.js"></script>
    `;
}

const server = app.listen(3001, () => {
  const { host, port } = server.address();
  console.log('server listening at http://%s:%s', host, port);
});
