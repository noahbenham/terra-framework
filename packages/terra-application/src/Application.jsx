/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import NavigationLayout from 'terra-navigation-layout';
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

    const updatedConfig = Object.assign({}, routingConfig);

    const newMenus = Object.assign({}, updatedConfig.menu);
    if (navigationItems && navigationItems.length > 1) {
      newMenus['/'] = {
        path: '/',
        component: {
          tiny: {
            componentClass: PrimaryNavigationMenu,
            props: {
              routes: navigationItems,
            },
          },
          small: {
            componentClass: PrimaryNavigationMenu,
            props: {
              routes: navigationItems,
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

export default Application;
