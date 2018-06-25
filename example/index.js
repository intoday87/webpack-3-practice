/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import ReactSample from '../component/react-sample';
import HbsSample from '../component/sample';

$(() => {
  const hbsSampleId = 'hbs-sample';

  render(
    <div>
      <ReactSample />
    </div>,
    $('body').get(0),
  );

  $(`<div id="${hbsSampleId}"></div>`).appendTo('body');
  $(`#${hbsSampleId}`).append(HbsSample.build());
});

