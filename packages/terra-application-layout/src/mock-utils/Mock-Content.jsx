import React from 'react';
import PropTypes from 'prop-types';
import AppDelegate from 'terra-app-delegate';
import 'terra-base/lib/baseStyles';

const propTypes = {
  app: AppDelegate.propType,
  isHeightBounded: PropTypes.bool,
  onRequestClose: PropTypes.func,
};

const MockContent = ({
  app,
  isHeightBounded,
  onRequestClose,
  ...customProps
}) => {
  const style = { height: '200px', width: '100%', backgroundColor: 'pink' };
  if (isHeightBounded) {
    style.height = '100%';
  }
  return (
    <div {...customProps} onClick={() => { onRequestClose(<MockContent />); }} style={style} />
  );
};

MockContent.propTypes = propTypes;

export default MockContent;
