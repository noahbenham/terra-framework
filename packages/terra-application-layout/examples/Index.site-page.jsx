/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import ApplicationLayoutSrc from '!raw-loader!../src/ApplicationLayout.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example Files

import ExampleApplication from './index-examples/ExampleApplication';

const ApplicationExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Examples</h2>
    <ExampleApplication />
    <PropsTable id="props-header" src={ApplicationLayoutSrc} componentName="Application" />
  </div>
);

export default ApplicationExamples;
