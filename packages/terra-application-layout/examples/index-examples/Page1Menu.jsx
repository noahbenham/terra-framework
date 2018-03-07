import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router-dom';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';

import NavigationSideMenu from 'terra-navigation-side-menu';

class Page1Menu extends React.Component {
  constructor(props) {
    super(props);

    this.handleMenuChange = this.handleMenuChange.bind(this);

    let selectedChildKey;
    if (matchPath(props.location.pathname, { path: '/page1/items' })) {
      selectedChildKey = 'items';
    } else if (matchPath(props.location.pathname, { path: '/page1/other_thing' })) {
      selectedChildKey = 'other thing';
    }

    this.state = {
      selectedMenuKey: 'menu',
      selectedChildKey,
    };
  }

  handleMenuChange(event, data) {
    const { routingStackDelegate, layoutConfig } = this.props;

    if (!data.metaData.hasSubMenu && layoutConfig.toggleMenu) {
      layoutConfig.toggleMenu().then(() => {
        routingStackDelegate.show({ path: data.metaData.url });
      });
    } else {
      routingStackDelegate.show({ path: data.metaData.url });
    }

    this.setState({ selectedMenuKey: data.selectedMenuKey, selectedChildKey: data.selectedChildKey });
  }

  render() {
    const { routingStackDelegate } = this.props;

    return (
      <NavigationSideMenu
        key="Page1"
        menuItems={[
          { key: 'menu', text: 'Page 1', childKeys: ['items', 'other thing'] },
          { key: 'items',
            text: 'Items',
            hasSubMenu: true,
            metaData: {
              url: '/page1/items',
              hasSubMenu: true,
            } },
          { key: 'other thing',
            text: 'Something Else',
            hasSubMenu: false,
            metaData: {
              url: '/page1/other_thing',
            } },
        ]}
        onChange={this.handleMenuChange}
        routingStackBack={routingStackDelegate.showParent}
        selectedMenuKey={this.state.selectedMenuKey}
        selectedChildKey={this.state.selectedChildKey}
      />
    );
  }
}

Page1Menu.propTypes = {
  layoutConfig: PropTypes.shape({
    toggleMenu: PropTypes.func,
    togglePin: PropTypes.func,
    menuIsPinned: PropTypes.bool,
  }),
  routingStackDelegate: RoutingStackDelegate.propType,
};

export default withRouter(Page1Menu);
