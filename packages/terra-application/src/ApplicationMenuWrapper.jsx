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
};

const ApplicationMenuWrapper = ({ layoutConfig, navigationLayoutRoutes, navigationLayoutSize, terraApplicationProps, ...customProps }) => {
  const Content = terraApplicationProps.overrideComponentClass;
  const contentProps = {
    layoutConfig,
    navigationLayoutRoutes,
    navigationLayoutSize,
    ...customProps,
  };

  return (
    <ApplicationMenu
      key={terraApplicationProps.key}
      layoutConfig={layoutConfig}
      nameConfig={{ title: terraApplicationProps.name }}
      utilityConfig={{ userName: 'John Rambo' }}
      extensions={<div>Extensions</div>}
      content={<Content {...contentProps} />}
    />
  );
};

ApplicationMenuWrapper.propTypes = propTypes;

export default ApplicationMenuWrapper;
