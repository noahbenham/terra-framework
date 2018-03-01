/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import AppDelegate from 'terra-app-delegate';
import NavigationLayout from 'terra-navigation-layout';
import { routeConfigPropType } from 'terra-navigation-layout/lib/configurationPropTypes';
import { matchPath } from 'react-router-dom';
import { withModalManager } from 'terra-modal-manager';

import PrimaryNavigationMenu from './PrimaryNavigationMenu';
import ApplicationMenuConfigAdapter from './ApplicationMenuConfigAdapter';
import ApplicationHeader from './header/_ApplicationHeader';
import ApplicationUtils from './ApplicationUtils';

const navigationLayoutSizes = ['default', 'tiny', 'small', 'medium', 'large', 'huge'];

const propTypes = {
  /**
   * AppDelegate instance provided by `withModalManager`. If an AppDelegate instance is
   * explicitly provided to the ApplicationLayout, the ModalManager will wrap it and
   * fall back to its defined APIs as needed.
   */
  app: AppDelegate.propType,
  /**
   * The index, or default, path of the routing configuration. The ApplicationLayout will redirect to this path
   * when the router reaches an unknown location.
   */
  indexPath: PropTypes.string.isRequired,
  /**
   * An array of Objects describing the ApplicationLayout's primary navigation items. These items are rendered as
   * Application Tabs at medium/large/huge breakpoints and as navigation menu items at tiny and small breakpoints.
   */
  navigationItems: ApplicationUtils.navigationItemsPropType,
  /**
   * Configuration values for the ApplicationName component.
   */
  nameConfig: ApplicationUtils.nameConfigPropType,
  /**
   * Configuration values for the ApplicationUtility component.
   */
  utilityConfig: ApplicationUtils.utilityConfigPropType,
  /**
   * The routing configuration Object. This is very similar to the routingConfig supported by the NavigationLayout; however,
   * the ApplicationLayout only supports configuration for the `menu` and `content` regions of the layout. The '/' path is also blacklisted
   * within this configuration object, as the ApplicationLayout uses it for navigation purposes. Any configuration provided for the '/' path
   * will be disregarded.
   */
  routingConfig: PropTypes.shape({
    menu: routeConfigPropType,
    content: routeConfigPropType,
  }),

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

    const componentConfig = {
      componentClass: PrimaryNavigationMenu,
      props: {
        navigationItems: menuNavigationItems,
      },
      refuseRoutingStackNavigation: menuNavigationItems.length === 0,
    };

    return {
      '/': {
        path: '/',
        component: {
          tiny: componentConfig,
          small: componentConfig,
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

        propsForSize.applicationMenuConfigAdapterProps = {
          overrideComponentClass: configForSize.componentClass,
          nameConfig,
          utilityConfig,
        };
        configForSize.props = propsForSize;
        configForSize.componentClass = ApplicationMenuConfigAdapter;

        newMenuComponent[size] = configForSize;
      });

      newMenu.component = newMenuComponent;
      updatedMenuConfig[menuKey] = newMenu;
    });

    return updatedMenuConfig;
  }

  static updateRoutingConfig(props) {
    const { routingConfig } = props;

    const updatedConfig = Object.assign({}, routingConfig, {
      menu: Application.wrapMenuConfig(props, Object.assign({}, routingConfig.menu, Application.buildNavigationMenuConfig(props))),
    });

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
    const { app, nameConfig, utilityConfig, navigationItems, indexPath } = this.props;
    const { applicationRoutingConfig } = this.state;

    return (
      <NavigationLayout
        app={app}
        config={applicationRoutingConfig}
        header={(
          <ApplicationHeader
            nameConfig={nameConfig}
            utilityConfig={utilityConfig}
            applicationLinks={navigationItems ? navigationItems.map(route => ({
              id: route.path,
              path: route.path,
              text: route.text,
            })) : undefined}
          />
        )}
        indexPath={indexPath}
      />
    );
  }
}

Application.propTypes = propTypes;
Application.defaultProps = defaultProps;

export default withModalManager(Application);
