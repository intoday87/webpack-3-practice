import $ from 'jquery';
import css from './sample.css';
import hbs from './sample.hbs';

export default {
  build: () => {
    $.get('/hello');

    return hbs({
      css,
      title: 'hbs sample',
    });
  }
};
