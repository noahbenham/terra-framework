import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router-dom';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';

import NavigationSideMenu from 'terra-navigation-side-menu';

class Page1ItemsMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleMenuChange = this.handleMenuChange.bind(this);

    let selectedChildKey;
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].forEach((item) => {
      if (matchPath(props.location.pathname, { path: `/page1/items/${item}` })) {
        selectedChildKey = item;
      }
    });

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
    const { layoutConfig, routingStackDelegate } = this.props;

    return (
      <NavigationSideMenu
        key="Page1Items"
        menuItems={[
          { key: 'menu', text: 'Items', childKeys: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'] },
          { key: 'A', text: 'A', metaData: { url: '/page1/items/A' } },
          { key: 'B', text: 'B', metaData: { url: '/page1/items/B' } },
          { key: 'C', text: 'C', metaData: { url: '/page1/items/C' } },
          { key: 'D', text: 'D', metaData: { url: '/page1/items/D' } },
          { key: 'E', text: 'E', metaData: { url: '/page1/items/E' } },
          { key: 'F', text: 'F', metaData: { url: '/page1/items/F' } },
          { key: 'G', text: 'G', metaData: { url: '/page1/items/G' } },
          { key: 'H', text: 'H', metaData: { url: '/page1/items/H' } },
          { key: 'I', text: 'I', metaData: { url: '/page1/items/I' } },
        ]}
        onChange={this.handleMenuChange}
        routingStackBack={routingStackDelegate.showParent}
        selectedMenuKey={this.state.selectedMenuKey}
        selectedChildKey={this.state.selectedChildKey}
      />
    );
  }
}

Page1ItemsMenu.propTypes = {
  layoutConfig: PropTypes.shape({
    toggleMenu: PropTypes.func,
    togglePin: PropTypes.func,
    menuIsPinned: PropTypes.bool,
  }),
  routingStackDelegate: RoutingStackDelegate.propType,
};

export default withRouter(Page1ItemsMenu);
