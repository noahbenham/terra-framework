import React from 'react';
import AppDelegate from 'terra-app-delegate';
import ApplicationHeader from './header/_ApplicationHeader';
import ApplicationUtils from './ApplicationUtils';

const propTypes = {
  /**
   * The AppDelegate instance to provide to the ApplicationHeader.
   */
  app: AppDelegate.propType,
  /**
   * The configuration for ApplicationName component.
   */
  nameConfig: ApplicationUtils.nameConfigPropType,
  /**
   * The configuration for ApplicationUtility component.
   */
  utilityConfig: ApplicationUtils.utilityConfigPropType,
  /**
   * The array of navigation Objects to be rendered as tabs within the Application Header.
   */
  navigationItems: ApplicationUtils.navigationItemsPropType,
  /**
   * The Object of layout-related APIs provided to the components of the Layout.
   */
  layoutConfig: ApplicationUtils.layoutConfigPropType.isRequired,
};

const ApplicationHeaderWrapper = ({ app, nameConfig, utilityConfig, layoutConfig, navigationItems }) => (
  <ApplicationHeader
    app={app}
    nameConfig={nameConfig}
    utilityConfig={utilityConfig}
    layoutConfig={layoutConfig}
    applicationLinks={navigationItems ? navigationItems.map(route => ({
      id: route.path,
      path: route.path,
      text: route.text,
    })) : undefined}
  />
);

ApplicationHeaderWrapper.propTypes = propTypes;

export default ApplicationHeaderWrapper;
