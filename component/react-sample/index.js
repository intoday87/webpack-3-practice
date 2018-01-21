import React from 'react';
// import classNames from 'classnames/bind';
import Radio from './radio-button';

// const cx = classNames.bind(require('./react-sample.css'));

export default () => (
  <div>
    <label>
      <Radio
        onClick={() => alert('clicked')}
        // className={cx('override')}
      />
      hello world!! react sample
    </label>
  </div>
);
