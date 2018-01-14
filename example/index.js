/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import ReactSample from '../component/react-sample';
import HbsSample from '../component/sample';

$(() => {
  const reactSampleId = 'react-sample';
  const hbsSampleId = 'hbs-sample';

  $(`<div id="${reactSampleId}"></div>`).appendTo('body');
  render(
    <div>
      <ReactSample />
    </div>,
    $('body').get(0),
  );

  $(`<div id="${hbsSampleId}"></div>`).appendTo('body');
  $(`#${hbsSampleId}`).append(HbsSample());
});

