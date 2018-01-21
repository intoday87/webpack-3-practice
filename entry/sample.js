import $ from 'jquery';
import sample from '../component/sample';

const a = {
  const: 1,
};

export default () => {
  window.console.log(a);
  $('body').html('hello world');
  $('body').append(sample.build());
};
