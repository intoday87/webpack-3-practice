/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import Sample from '../component/react-sample';

render(
  <div>
    <Sample />
  </div>,
  $('body').get(0),
);
