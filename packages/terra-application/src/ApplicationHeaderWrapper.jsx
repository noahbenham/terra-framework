import React from 'react';
import PropTypes from 'prop-types';

import ApplicationHeader from './header/_ApplicationHeader';

const ApplicationHeaderWrapper = ({ nameConfig, utilityConfig, primaryRoutes, layoutConfig, navigationLayoutRoutes, navigationLayoutSize }) => (
  <ApplicationHeader
    layoutConfig={layoutConfig}
    applicationLinks={primaryRoutes ? primaryRoutes.map((route) => {
      const routeData = {};
      routeData.id = route.path;
      routeData.path = route.path;
      routeData.text = route.text;

      return routeData;
    }) : undefined}
    nameConfig={nameConfig}
    utilityConfig={utilityConfig}
  />
);

export default ApplicationHeaderWrapper;
