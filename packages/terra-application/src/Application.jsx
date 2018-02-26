/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import NavigationLayout from 'terra-navigation-layout';
import { matchPath } from 'react-router-dom';
import PrimaryNavigationMenu from './PrimaryNavigationMenu';
import ApplicationMenuWrapper from './ApplicationMenuWrapper';
import ApplicationHeaderWrapper from './ApplicationHeaderWrapper';
import ApplicationUtils from './ApplicationUtils';

const navigationLayoutSizes = ['default', 'tiny', 'small', 'medium', 'large', 'huge'];

const propTypes = {
  /**
   * {Needs Description}.
   */
  indexPath: PropTypes.string,
  /**
   * Configuration values for the ApplicationName component.
   */
  nameConfig: ApplicationUtils.nameConfigPropType,
  /**
   * {Needs Description}.
   */
  navigationItems: PropTypes.array,
  /**
   * {Needs Description}.
   */
  routingConfig: PropTypes.object,
  /**
   * Configuration to be provided to the ApplicationUtility component.
   */
  utilityConfig: ApplicationUtils.utilityConfigPropType,
};

const defaultProps = {
  navigationItems: [],
};

class Application extends React.Component {
  static buildMenuNavigationItems(props) {
    const { navigationItems, routingConfig } = props;

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

  static buildNavigationMenuConfig(props) {
    const menuNavigationItems = Application.buildMenuNavigationItems(props);

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

  static wrapMenuConfig(props, menuConfig) {
    const { nameConfig, utilityConfig } = props;

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

  static updateRoutingConfig(props) {
    const { routingConfig, navigationItems } = props;

    const updatedConfig = Object.assign({}, routingConfig);

    let newMenus = Object.assign({}, updatedConfig.menu);
    if (navigationItems && navigationItems.length) {
      newMenus = Object.assign(newMenus, Application.buildNavigationMenuConfig(props));
    }

    updatedConfig.menu = Application.wrapMenuConfig(props, newMenus);

    return updatedConfig;
  }

  constructor(props) {
    super(props);

    this.state = {
      applicationRoutingConfig: Application.updateRoutingConfig(this.props),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.nameConfig !== nextProps.nameConfig ||
        this.props.utilityConfig !== nextProps.utilityConfig ||
        this.props.routingConfig !== nextProps.routingConfig ||
        this.props.navigationItems !== nextProps.navigationItems ||
        this.props.indexPath !== nextProps.indexPath) {
      this.setState({
        applicationRoutingConfig: Application.updateRoutingConfig(nextProps),
      });
    }
  }

  render() {
    const { nameConfig, utilityConfig, navigationItems, indexPath } = this.props;
    const { applicationRoutingConfig } = this.state;

    return (
      <NavigationLayout
        config={applicationRoutingConfig}
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

Application.propTypes = propTypes;

Application.defaultProps = defaultProps;

export default Application;
