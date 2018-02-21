/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import NavigationLayout from 'terra-navigation-layout';
import { matchPath } from 'react-router-dom';
import PrimaryNavigationMenu from './PrimaryNavigationMenu';
import ApplicationMenuWrapper from './ApplicationMenuWrapper';
import ApplicationHeaderWrapper from './ApplicationHeaderWrapper';

const navigationLayoutSizes = ['default', 'tiny', 'small', 'medium', 'large', 'huge'];

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.buildMenuNavigationItems = this.buildMenuNavigationItems.bind(this);
    this.buildNavigationMenuConfig = this.buildNavigationMenuConfig.bind(this);
    this.wrapMenuConfig = this.wrapMenuConfig.bind(this);
    this.updateRoutingConfig = this.updateRoutingConfig.bind(this);
  }

  buildMenuNavigationItems() {
    const { navigationItems, routingConfig } = this.props;

    if (!routingConfig.menu) {
      return navigationItems;
    }

    const menuPaths = Object.keys(routingConfig.menu).map(key => (routingConfig.menu[key].path));
    return navigationItems.map((navigationItem) => {
      const childMenuPaths = menuPaths.filter(configPath => matchPath(navigationItem.path, { path: configPath }));

      return {
        path: navigationItem.path,
        text: navigationItem.text,
        hasSubMenu: childMenuPaths.length > 0,
      };
    });
  }

  buildNavigationMenuConfig() {
    const menuNavigationItems = this.buildMenuNavigationItems();

    return {
      '/': {
        path: '/',
        component: {
          tiny: {
            componentClass: PrimaryNavigationMenu,
            props: {
              routes: menuNavigationItems,
            },
          },
          small: {
            componentClass: PrimaryNavigationMenu,
            props: {
              routes: menuNavigationItems,
            },
          },
        },
      },
    };
  }

  wrapMenuConfig(menuConfig) {
    const { nameConfig, utilityConfig } = this.props;

    const updatedMenuConfig = {};
    Object.keys(menuConfig).forEach((menuKey) => {
      const newMenu = Object.assign({}, menuConfig[menuKey]);

      const newMenuComponent = Object.assign({}, newMenu.component);

      navigationLayoutSizes.forEach((size) => {
        if (!newMenuComponent[size]) {
          return;
        }

        const configForSize = Object.assign({}, newMenuComponent[size]);

        const propsForSize = Object.assign({}, configForSize.props);

        propsForSize.terraApplicationProps = {
          overrideComponentClass: configForSize.componentClass,
          nameConfig,
          utilityConfig,
          key: 'MenuWrapper',
        };
        configForSize.props = propsForSize;
        configForSize.componentClass = ApplicationMenuWrapper;

        newMenuComponent[size] = configForSize;
      });

      newMenu.component = newMenuComponent;
      updatedMenuConfig[menuKey] = newMenu;
    });

    return updatedMenuConfig;
  }

  updateRoutingConfig() {
    const { routingConfig, navigationItems } = this.props;

    const updatedConfig = Object.assign({}, routingConfig);

    let newMenus = Object.assign({}, updatedConfig.menu);
    if (navigationItems && navigationItems.length > 1) {
      newMenus = Object.assign(newMenus, this.buildNavigationMenuConfig());
    }

    updatedConfig.menu = this.wrapMenuConfig(newMenus);

    return updatedConfig;
  }

  render() {
    const { nameConfig, utilityConfig, navigationItems, indexPath } = this.props;

    return (
      <NavigationLayout
        config={this.updateRoutingConfig()}
        header={(
          <ApplicationHeaderWrapper
            primaryRoutes={navigationItems}
            nameConfig={nameConfig}
            utilityConfig={utilityConfig}
          />
        )}
        indexPath={indexPath}
      />
    );
  }
}

Application.propTypes = {
  nameConfig: PropTypes.object,
  utilityConfig: PropTypes.object,
  routingConfig: PropTypes.object,
  navigationItems: PropTypes.array,
  indexPath: PropTypes.string,
};

Application.defaultProps = {
  navigationItems: [],
};

export default Application;
