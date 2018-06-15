import $ from 'jquery';
import css from './sample.css';
import hbs from './sample.hbs';

export default {
  build: () => {
    window.alert("hello world");
    document.createElement("div");
    console.log('logging..');

    $.get('/hello');

    return hbs({
      css,
      title: 'hbs sample',
    });
  }
};
