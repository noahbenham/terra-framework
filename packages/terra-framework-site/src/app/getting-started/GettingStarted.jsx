import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import Markdown from 'terra-markdown';
import Grid from 'terra-grid';
import List from 'terra-list';
import Heading from 'terra-heading';
/* eslint-enable import/no-extraneous-dependencies */
import WhatIsTerra from './docs/WhatIsTerra.md';
import Features from './docs/Features.md';
import InstallingComponents from './docs/InstallingComponents.md';
import Dependencies from './docs/Dependencies.md';
import BasicUsage from './docs/BasicUsage.md';
import ConfiguringWebpack from './docs/ConfiguringWebpack.md';
import I18n from './docs/I18n.md';
import Directionality from './docs/Directionality.md';
import ThemingIntro from './docs/ThemingIntro.md';
import Theming from './docs/Theming.md';
import styles from './GettingStarted.scss';

const GettingStartedPage = () => (
  <div className={styles['getting-started']}>
    <Grid>
      <Grid.Row>
        <Grid.Column small={10} >
          <br />
          <Markdown src={WhatIsTerra} />
          <Markdown src={Features} />
          <Markdown src={InstallingComponents} />
          <Markdown src={Dependencies} />
          <Markdown src={BasicUsage} />
          <Markdown src={ConfiguringWebpack} />
          <Markdown src={I18n} />
          <Markdown src={Directionality} />
          <Markdown src={ThemingIntro} />
          <Markdown src={Theming} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default GettingStartedPage;
