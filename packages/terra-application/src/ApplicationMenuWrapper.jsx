import React from 'react';
import PropTypes from 'prop-types';
import AppDelegate from 'terra-app-delegate';
import { processedRoutesPropType } from 'terra-navigation-layout';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';

import ApplicationMenu from './menu/_ApplicationMenu';
import ApplicationUtils from './ApplicationUtils';

const propTypes = {
  /**
   * The AppDelegate instance to provide to the ApplicationMenu.
   */
  app: AppDelegate.propType,
  /**
   * Array of navigation Objects to be rendered as tabs within the Application Header.
   */
  navigationItems: ApplicationUtils.navigationItemsPropType,
  /**
   * The Object of layout-related APIs provided to the components of the Layout.
   */
  layoutConfig: ApplicationUtils.layoutConfigPropType.isRequired,
  /**
   * The set of routes currently identified by the NavigationLayout. This prop is provided automatically by the NavigationLayout.
   */
  navigationLayoutRoutes: PropTypes.arrayOf(processedRoutesPropType),
  /**
   * The window size currently identified by the NavigationLayout. This prop is automatically by the NavigationLayout.
   */
  navigationLayoutSize: PropTypes.string,
  /**
   * The Object containing RoutingStack APIs provided to children of the RoutingStack. This prop is automatically provided by the RoutingStack.
   */
  routingStackDelegate: RoutingStackDelegate.propType,
  /**
   * The Object containing props necessary for ApplicationMenuWrapper creation.
   */
  applicationMenuWrapperProps: PropTypes.shape({
    /**
     * The Component class that will be rendered as content within the ApplicationMenu.
     */
    overrideComponentClass: PropTypes.func,
    /**
     * Configuration for ApplicationName component.
     */
    nameConfig: ApplicationUtils.nameConfigPropType,
    /**
     * Configuration for ApplicationUtility component.
     */
    utilityConfig: ApplicationUtils.utilityConfigPropType,
  }).isRequired,
};

const ApplicationMenuWrapper = ({ app, layoutConfig, navigationLayoutRoutes, navigationLayoutSize, routingStackDelegate, applicationMenuWrapperProps, ...customProps }) => {
  const Content = applicationMenuWrapperProps.overrideComponentClass;

  /**
   * The props provided by the Layout/NavigationLayout/RoutingStack are forwarded to the interior Content component,
   * along with any other custom props defined in the routing configuration.
   */
  const contentProps = {
    app,
    layoutConfig,
    routingStackDelegate,
    navigationLayoutRoutes,
    navigationLayoutSize,
    ...customProps,
  };

  return (
    <ApplicationMenu
      app={app}
      key={applicationMenuWrapperProps.key}
      layoutConfig={layoutConfig}
      routingStackDelegate={routingStackDelegate}
      nameConfig={applicationMenuWrapperProps.nameConfig}
      utilityConfig={applicationMenuWrapperProps.utilityConfig}
      content={<Content {...contentProps} />}
    />
  );
};

ApplicationMenuWrapper.propTypes = propTypes;

export default ApplicationMenuWrapper;
