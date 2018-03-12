/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ImplementationGuideDoc from '../docs/implementationGuide.md';
import { version } from '../package.json';

const ImplementationGuide = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ImplementationGuideDoc} />
  </div>
);

export default ImplementationGuide;
