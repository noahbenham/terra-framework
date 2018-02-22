import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-clinical-action-header';

import NavigationSideMenu from 'terra-navigation-side-menu';

class Page1Menu extends React.Component {
  constructor(props) {
    super(props);

    this.handleMenuChange = this.handleMenuChange.bind(this);

    this.state = {
      selectedMenuKey: 'menu',
    };
  }

  handleMenuChange(event, data) {
    if (data.selectedChildKey === 'item1') {
      this.props.history.push('/page1/item1');
    } else if (data.selectedChildKey === 'item2') {
      this.props.history.push('/page1/item2');
    }

    if (this.props.layoutConfig.toggleMenu) {
      requestAnimationFrame(() => {
        this.props.layoutConfig.toggleMenu();
      });
    }

    this.setState({ selectedMenuKey: data.selectedMenuKey, selectedChildKey: data.selectedChildKey });
  }

  render() {
    const { layoutConfig, routingStackDelegate } = this.props;

    return (
      <NavigationSideMenu
        menuItems={[
          { key: 'menu', text: 'Page 1', childKeys: ['item1', 'item2'] },
          { key: 'item1', text: 'Item 1' },
          { key: 'item2', text: 'Item 2' },
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
