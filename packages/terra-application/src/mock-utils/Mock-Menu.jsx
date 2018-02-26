import React from 'react';
import PropTypes from 'prop-types';
import AppDelegate from 'terra-app-delegate';
import 'terra-base/lib/baseStyles';

import MockContent from './Mock-Content';

const propTypes = {
  app: AppDelegate.propType,
  menuItems: PropTypes.object,
  onChange: PropTypes.func,
  onRequestDisclose: PropTypes.func,
  userName: PropTypes.string,
  userPhoto: PropTypes.element,
};

const MockHeader = ({
  app,
  menuItems,
  onChange,
  onRequestDisclose,
  userName,
  userPhoto,
  ...customProps
}) => (
  <div {...customProps} onClick={() => { onRequestDisclose(<MockContent />); }} style={{ height: '50px', width: '100%', backgroundColor: 'red' }} />
);

MockHeader.propTypes = propTypes;

export default MockHeader;
