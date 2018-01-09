import React from 'react';
import classNames from 'classnames/bind';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';

import styles from './Leisure.scss';
import { Consumer } from 'xfc';

const cx = classNames.bind(styles);

Consumer.init();

const Leisure = () => (
  <EmbeddedContentConsumer src="http://www.espn.com" className={cx(['leisure-container'])} />
);

export default Leisure;
