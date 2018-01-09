import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import ContentContainer from 'terra-content-container';
import List from 'terra-list';
import Heading from 'terra-heading';
import MenuToolbar from '../common/menu/MenuToolbar';

import styles from './GettingStartedMenu.scss';

const GettingStartedMenu = ({ routingStackDelegate, layoutConfig }) => {
  const scrollToComponent = (id) => {
    if (layoutConfig.menuIsOpen && layoutConfig.toggleMenu) {
      layoutConfig.toggleMenu();
    }
    document.querySelector(id).scrollIntoView();
  };

  return (
    <ContentContainer
      header={<MenuToolbar text="Getting Started" routingStackDelegate={routingStackDelegate} />}
      fill
    >
      <List className={styles.menu}>
        <List.Item content={<Link to="/getting-started#what-is-terra-" onClick={() => { scrollToComponent('#what-is-terra-'); }} >What is Terra?</Link>} />
        <List.Item content={<Link to="/getting-started#features" onClick={() => { scrollToComponent('#features'); }} >Features</Link>} />
        <List.Item content={<Link to="/getting-started#installing-components" onClick={() => { scrollToComponent('#installing-components'); }} >Installing Components</Link>} />
        <List.Item content={<Link to="/getting-started#dependencies" onClick={() => { scrollToComponent('#dependencies'); }} >Dependencies</Link>} />
        <List.Item content={<Link to="/getting-started#basic-usage" onClick={() => { scrollToComponent('#basic-usage'); }} >Basic Usage</Link>} />
        <List.Item content={<Link to="/getting-started#configuring-webpack" onClick={() => { scrollToComponent('#configuring-webpack'); }} >Configuring Webpack</Link>} />
        <List.Item content={<Link to="/getting-started#internationalization-i18n-and-localization-l10n-" onClick={() => { scrollToComponent('#internationalization-i18n-and-localization-l10n-'); }} >I18n</Link>} />
        <List.Item content={<Link to="/getting-started#theming" onClick={() => { scrollToComponent('#theming'); }} >Theming</Link>} />
      </List>
    </ContentContainer>
  );
};

export default GettingStartedMenu;
// layoutConfig: {
//   size,
//   toggleMenu: shouldAllowMenuToggle ? this.toggleMenu : undefined,
//   menuIsOpen,
//   togglePin: isHoverMenu ? this.togglePin : undefined,
//   menuIsPinned,
// }
