/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router-dom';
import NavigationSideMenu from 'terra-navigation-side-menu';

const propTypes = {
  navigationItems: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    hasSubMenu: PropTypes.bool,
  })),
  layoutConfig: PropTypes.object,
  routingStackDelegate: PropTypes.object,
  location: PropTypes.object,
};

const navMenuKey = 'navigationMenu';

class PrimaryNavigationMenu extends React.Component {
  static buildChildSideNavItems(items) {
    return items.map(item => ({
      key: item.path,
      text: item.text,
      hasSubMenu: item.hasSubMenu,
      metaData: {
        url: item.path,
        hasSubMenu: item.hasSubMenu,
      },
    }));
  }

  constructor(props) {
    super(props);

    this.handleMenuChange = this.handleMenuChange.bind(this);

    let selectedChildKey;
    props.navigationItems.forEach((route) => {
      if (matchPath(props.location.pathname, { path: route.path })) {
        selectedChildKey = route.path;
      }
    });

    this.state = {
      selectedMenuKey: navMenuKey,
      selectedChildKey,
    };
  }

  handleMenuChange(event, data) {
    if (data.metaData && data.metaData.url) {
      this.props.routingStackDelegate.show({ path: data.metaData.url });
    }

    if (data.metaData && !data.metaData.hasSubMenu && this.props.layoutConfig.toggleMenu) {
      requestAnimationFrame(() => {
        this.props.layoutConfig.toggleMenu();
      });
    }

    this.setState({ selectedMenuKey: data.selectedMenuKey, selectedChildKey: data.selectedChildKey });
  }

  render() {
    const { routingStackDelegate } = this.props;

    const childItems = PrimaryNavigationMenu.buildChildSideNavItems(this.props.navigationItems);

    return (
      <NavigationSideMenu
        menuItems={[
          { key: navMenuKey, childKeys: childItems.map(item => (item.key)), isRootMenu: true },
        ].concat(...childItems)}
        onChange={this.handleMenuChange}
        routingStackBack={routingStackDelegate.showParent}
        selectedMenuKey={this.state.selectedMenuKey}
        selectedChildKey={this.state.selectedChildKey}
      />
    );
  }
}

PrimaryNavigationMenu.propTypes = propTypes;

export default withRouter(PrimaryNavigationMenu);
