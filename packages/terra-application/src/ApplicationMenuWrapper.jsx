import React from 'react';
import PropTypes from 'prop-types';

import ApplicationMenu from './menu/_ApplicationMenu';

const propTypes = {
  layoutConfig: PropTypes.shape({
    size: PropTypes.string,
    toggleMenu: PropTypes.func,
    menuIsOpen: PropTypes.bool,
    togglePin: PropTypes.bool,
    menuIsPinned: PropTypes.bool,
  }).isRequired,
  navigationLayoutRoutes: PropTypes.array,
  navigationLayoutSize: PropTypes.string,
  terraApplicationProps: PropTypes.shape({
    overrideComponentClass: PropTypes.func,
    name: PropTypes.string,
    key: PropTypes.string,
  }).isRequired,
  app: PropTypes.object,
  routingStackDelegate: PropTypes.object,
};

const ApplicationMenuWrapper = ({ app, layoutConfig, navigationLayoutRoutes, navigationLayoutSize, routingStackDelegate, applicationMenuWrapperProps, ...customProps }) => {
  const Content = applicationMenuWrapperProps.overrideComponentClass;
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
