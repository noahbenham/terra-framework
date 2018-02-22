import React from 'react';
import PropTypes from 'prop-types';
import Placeholder from './Placeholder';

const propTypes = {
  size: PropTypes.string,
};

const ExtensionsExample = ({ size }) => {
  let text = 'Navigation';
  if (size === 'tiny') {
    text = 'N';
  } else if (size === 'small') {
    text = 'Nav';
  }
  return (
    <Placeholder text={text} />
  );
};

ExtensionsExample.propTypes = propTypes;

export default ExtensionsExample;
