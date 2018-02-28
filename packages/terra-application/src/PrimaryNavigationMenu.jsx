/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router-dom';
import NavigationSideMenu from 'terra-navigation-side-menu';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';
import ApplicationUtils from './ApplicationUtils';

const propTypes = {
  navigationItems: ApplicationUtils.navigationItemsPropType,
  layoutConfig: ApplicationUtils.layoutConfigPropType,
  routingStackDelegate: RoutingStackDelegate.propType,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
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
    const { routingStackDelegate, navigationItems } = this.props;

    if (!navigationItems.length) {
      return (
        <div style={{ height: '100%', background: 'lightgrey', 'box-shadow': 'inset 0 7px 9px -7px rgba(0,0,0,0.4), inset 0 -7px 9px -7px rgba(0,0,0,0.4)' }} />
      );
    }

    const childItems = PrimaryNavigationMenu.buildChildSideNavItems(navigationItems);

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
