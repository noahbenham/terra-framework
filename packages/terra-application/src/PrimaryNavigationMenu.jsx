/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router-dom';
import NavigationSideMenu from 'terra-navigation-side-menu';

const propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    hasSubMenu: PropTypes.bool,
  })),
  layoutConfig: PropTypes.object,
  routingStackDelegate: PropTypes.object,
  location: PropTypes.object,
};

class PrimaryNavigationMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleMenuChange = this.handleMenuChange.bind(this);

    let selectedChildKey;
    props.routes.forEach((route) => {
      if (matchPath(props.location.pathname, { path: route.path })) {
        selectedChildKey = route.path;
      }
    });

    this.state = {
      selectedMenuKey: 'navigationMenu',
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

    const buildChildItems = routes => routes.map(route => ({
      key: route.path,
      text: route.text,
      hasSubMenu: route.hasSubMenu,
      metaData: {
        url: route.path,
        hasSubMenu: route.hasSubMenu,
      },
    }));

    const childItems = buildChildItems(this.props.routes);
    const childKeys = childItems.map(item => (item.key));

    return (
      <NavigationSideMenu
        key="navigationMenu"
        menuItems={[
          { key: 'navigationMenu', text: 'Navigation', childKeys },
        ].concat(...childItems)}
        onChange={this.handleMenuChange}
        routingStackBack={routingStackDelegate.showParent}
        selectedMenuKey={this.state.selectedMenuKey}
        selectedChildKey={this.state.selectedChildKey}
      />
    );
  }
}


// const PrimaryNavigationMenu = ({ routes, layoutConfig }) => (
//   <ApplicationList
//     links={routes.map((route) => {
//       const routeData = {};
//       routeData.id = route.path;
//       routeData.path = route.path;
//       routeData.text = route.text;
//       routeData.hasSubMenu = route.hasSubMenu;

//       routeData.onClick = () => {
//         if (!route.hasSubMenu && layoutConfig && layoutConfig.toggleMenu) {
//           requestAnimationFrame(() => {
//             layoutConfig.toggleMenu();
//           });
//         }
//       };

//       return routeData;
//     })}
//   />
// );

PrimaryNavigationMenu.propTypes = propTypes;

export default withRouter(PrimaryNavigationMenu);
