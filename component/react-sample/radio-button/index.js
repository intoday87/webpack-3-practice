import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(require('./radio-button.css'));

export default class Radio extends React.Component {
  render() {
    const { className, ...rest } = this.props;
    return (
      <input
        type="radio"
        className={cx('radio', className)}
        {...rest}
      />
    );
  }
}

Radio.propTypes = {
  className: PropTypes.string,
};
