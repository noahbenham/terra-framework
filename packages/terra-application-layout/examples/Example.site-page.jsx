/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { version } from '../package.json';

// Example Files

import ExampleApplication from './index-examples/ExampleApplication';

const Example = () => (
  <div style={{ height: '100%' }}>
    <div id="version">Version: {version}</div>
    <ExampleApplication />
  </div>
);

export default Example;
