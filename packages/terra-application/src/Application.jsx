/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import NavigationLayout from 'terra-navigation-layout';
import { matchPath } from 'react-router-dom';
import PrimaryNavigationMenu from './PrimaryNavigationMenu';
import ApplicationMenuWrapper from './ApplicationMenuWrapper';
import ApplicationHeaderWrapper from './ApplicationHeaderWrapper';

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { nameConfig, utilityConfig, routingConfig, navigationItems, indexPath } = this.props;

    const menuPaths = Object.keys(routingConfig.menu || {}).map(key => (routingConfig.menu[key].path));
    const processedNavigationItems = navigationItems.map((navigationItem) => {
      const childMenuPaths = menuPaths.filter(configPath => matchPath(navigationItem.path, { path: configPath }));

      return {
        path: navigationItem.path,
        text: navigationItem.text,
        hasSubMenu: childMenuPaths.length > 0,
      };
    });

    const updatedConfig = Object.assign({}, routingConfig);

    const newMenus = Object.assign({}, updatedConfig.menu);
    if (navigationItems && navigationItems.length > 1) {
      newMenus['/'] = {
        path: '/',
        component: {
          tiny: {
            componentClass: PrimaryNavigationMenu,
            props: {
              routes: processedNavigationItems,
            },
          },
          small: {
            componentClass: PrimaryNavigationMenu,
            props: {
              routes: processedNavigationItems,
            },
          },
        },
      };
    }

    Object.keys(newMenus).forEach((menuKey) => {
      const newMenu = Object.assign({}, newMenus[menuKey]);

      const newMenuComponent = Object.assign({}, newMenu.component);

      ['default', 'tiny', 'small', 'medium', 'large', 'huge'].forEach((size) => {
        if (!newMenuComponent[size]) {
          return;
        }

        const configForSize = Object.assign({}, newMenuComponent[size]);

        const propsForSize = Object.assign({}, configForSize.props);

        propsForSize.terraApplicationProps = {
          overrideComponentClass: configForSize.componentClass,
          nameConfig,
          utilityConfig,
          key: 'MenuVessel',
        };
        configForSize.props = propsForSize;
        configForSize.componentClass = ApplicationMenuWrapper;

        newMenuComponent[size] = configForSize;
      });

      newMenu.component = newMenuComponent;
      newMenus[menuKey] = newMenu;
    });

    updatedConfig.menu = newMenus;

    return (
      <NavigationLayout
        config={updatedConfig}
        header={<ApplicationHeaderWrapper
          primaryRoutes={navigationItems} nameConfig={nameConfig} utilityConfig={utilityConfig}
        />
        }
        indexPath={indexPath}
      />
    );
  }
}

Application.propTypes = {
  nameConfig: PropTypes.object,
  utilityConfig: PropTypes.object,
  location: PropTypes.object,
};

Application.defaultProps = {
  navigationItems: [],
};

export default Application;
