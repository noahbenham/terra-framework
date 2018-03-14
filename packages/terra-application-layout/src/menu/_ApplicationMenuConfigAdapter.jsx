import React from 'react';
import PropTypes from 'prop-types';
import AppDelegate from 'terra-app-delegate';
import { processedRoutesPropType } from 'terra-navigation-layout';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';

import ApplicationMenu from './_ApplicationMenu';
import ApplicationLayoutUtils from '../ApplicationLayoutUtils';

const propTypes = {
  /**
   * The AppDelegate instance to provide to the ApplicationMenu.
   */
  app: AppDelegate.propType,
  /**
   * Array of navigation Objects to be rendered as tabs within the Application Header.
   */
  navigationItems: ApplicationLayoutUtils.navigationItemsPropType,
  /**
   * The Object of layout-related APIs provided to the components of the Layout. This prop is provided by the Layout.
   */
  layoutConfig: ApplicationLayoutUtils.layoutConfigPropType.isRequired,
  /**
   * The set of routes currently identified by the NavigationLayout. This prop is provided by the NavigationLayout.
   */
  navigationLayoutRoutes: PropTypes.arrayOf(processedRoutesPropType),
  /**
   * The window size currently identified by the NavigationLayout. This prop is provided by the NavigationLayout.
   */
  navigationLayoutSize: PropTypes.string,
  /**
   * The Object containing RoutingStack APIs provided to children of the RoutingStack. This prop is provided by the RoutingStack.
   */
  routingStackDelegate: RoutingStackDelegate.propType,
  /**
   * The Object containing props from the configuration necessary for ApplicationMenu creation.
   */
  applicationMenuConfigAdapterProps: PropTypes.shape({
    /**
     * The Component class that will be rendered as content within the ApplicationMenu.
     */
    overrideComponentClass: PropTypes.func,
    /**
     * Configuration for ApplicationName component.
     */
    nameConfig: ApplicationLayoutUtils.nameConfigPropType,
    /**
     * Configuration for ApplicationUtility component.
     */
    utilityConfig: ApplicationLayoutUtils.utilityConfigPropType,
  }).isRequired,
};

const ApplicationMenuConfigAdapter = (props) => {
  const {
    app,
    layoutConfig,
    navigationLayoutRoutes,
    navigationLayoutSize,
    routingStackDelegate,
    applicationMenuConfigAdapterProps,
    ...contentProps
  } = props;

  const Content = applicationMenuConfigAdapterProps.overrideComponentClass;

  return (
    <ApplicationMenu
      key={applicationMenuConfigAdapterProps.key}
      app={app}
      layoutConfig={layoutConfig}
      routingStackDelegate={routingStackDelegate}
      navigationLayoutRoutes={navigationLayoutRoutes}
      navigationLayoutSize={navigationLayoutSize}
      nameConfig={applicationMenuConfigAdapterProps.nameConfig}
      utilityConfig={applicationMenuConfigAdapterProps.utilityConfig}
      content={
        <Content {...contentProps} />
      }
    />
  );
};

ApplicationMenuConfigAdapter.propTypes = propTypes;

export default ApplicationMenuConfigAdapter;
