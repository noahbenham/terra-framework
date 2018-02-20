import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AppDelegate from 'terra-app-delegate';
import ApplicationMenuLayout from 'terra-application-menu-layout';
import { ApplicationMenuUtility } from 'terra-application-utility';
import { ApplicationMenuName } from 'terra-application-name';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';

import 'terra-base/lib/baseStyles';

import styles from './ApplicationMenu.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The AppDelegate instance that will be propagated to the components presented within the NavigationLayout.
   */
  app: AppDelegate.propType,
  /**
   * The element to be placed within the fill flex styled content area.
   */
  content: PropTypes.element,
  /**
   * The element to be placed within the fit top area for extensions within the layout.
   */
  extensions: PropTypes.element,
  /**
   * Layout config provided from the Layout component.
   */
  layoutConfig: PropTypes.shape({
    size: PropTypes.string,
    toggleMenu: PropTypes.func,
    menuIsOpen: PropTypes.bool,
    togglePin: PropTypes.bool,
    menuIsPinned: PropTypes.bool,
  }).isRequired,
  /**
   * Configutation values for the ApplicationName component.
   */
  nameConfig: PropTypes.shape({
    accessory: PropTypes.element,
    title: PropTypes.string,
  }),
  /**
   * Delegate prop that is provided by the NavigationLayout.
   */
  routingStackDelegate: RoutingStackDelegate.propType.isRequired,
  /**
   * Configration to be passed to the ApplicationUtility component.
   */
  utilityConfig: PropTypes.shape({
    userName: PropTypes.string,
    userPhoto: PropTypes.element,
    userDetails: PropTypes.string,
    onChange: PropTypes.func,
  }).isRequired,
};

const defaultProps = {
  nameConfig: {},
};

class ApplicationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.onDiscloseUtilty = this.onDiscloseUtilty.bind(this);
  }

  onDiscloseUtilty(utility) {
    if (this.props.app && utility) {
      this.props.app.disclose({
        preferredType: 'modal',
        size: 'small',
        content: {
          component: utility,
          key: 'application-utility-menu',
        },
      });
    }
  }

  render() {
    const {
      app,
      content,
      extensions,
      layoutConfig,
      nameConfig,
      routingStackDelegate,
      utilityConfig,
      ...customProps
    } = this.props;

    const menuClassNames = cx([
      'application-menu',
      customProps.className,
    ]);

    const isSmallFormFactor = ['tiny', 'small'].indexOf(layoutConfig.size) >= 0;

    let header;
    let footer;
    let extensionsElement;
    if (isSmallFormFactor) {
      if (nameConfig.accessory || nameConfig.title) {
        header = <ApplicationMenuName accessory={nameConfig.accessory} title={nameConfig.title} />;
      }
      if (extensions) {
        extensionsElement = React.cloneElement(extensions, { app });
      }
      footer = <ApplicationMenuUtility {...utilityConfig} onDisclose={this.onDiscloseUtilty} />;
    }

    let clonedContent;
    if (content) {
      clonedContent = React.cloneElement(content, { layoutConfig });
    }

    return (
      <div {...customProps} className={menuClassNames}>
        <ApplicationMenuLayout
          header={header}
          extensions={extensionsElement}
          content={clonedContent}
          footer={footer}
        />
      </div>
    );
  }
}

ApplicationMenu.propTypes = propTypes;
ApplicationMenu.defaultProps = defaultProps;

export default ApplicationMenu;
