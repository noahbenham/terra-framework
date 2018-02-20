/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import { ApplicationList } from 'terra-application-links';

const propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
  layoutConfig: PropTypes.object,
};

const PrimaryNavigationMenu = ({ routes, layoutConfig }) => (
  <ApplicationList
    links={routes.map((route) => {
      const routeData = {};
      routeData.id = route.path;
      routeData.path = route.path;
      routeData.text = route.text;
      routeData.hasSubMenu = route.hasSubMenu;

      routeData.onClick = () => {
        if (!route.hasSubMenu && layoutConfig && layoutConfig.toggleMenu) {
          requestAnimationFrame(() => {
            layoutConfig.toggleMenu();
          });
        }
      };

      return routeData;
    })}
  />
);

PrimaryNavigationMenu.propTypes = propTypes;

export default PrimaryNavigationMenu;
