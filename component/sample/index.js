import css from './sample.css';
import hbs from './sample.hbs';

export default {
  build: () => hbs({
    css,
    title: 'hbs sample',
  })
};
