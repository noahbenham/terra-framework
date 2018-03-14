import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl } from 'react-intl';
import AppDelegate from 'terra-app-delegate';
import ApplicationHeaderLayout from 'terra-application-header-layout';
import { ApplicationHeaderUtility } from 'terra-application-utility';
import { ApplicationHeaderName } from 'terra-application-name';
import { ApplicationTabs } from 'terra-application-links';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import Popup from 'terra-popup';
import { processedRoutesPropType } from 'terra-navigation-layout/lib/configurationPropTypes';

import 'terra-base/lib/baseStyles';

import ApplicationLayoutPropTypes from '../utils/propTypes';

import styles from './ApplicationHeader.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The AppDelegate instance that will be propagated to the components presented within the NavigationLayout.
   */
  app: AppDelegate.propType,
  /**
   * Navigational links that will generate list items that will update the path. These paths are matched with react-router to selection.
+  */
  applicationLinks: ApplicationLayoutPropTypes.applicationLinksPropType,
  /**
   * The element to be placed within the fit start area for extensions within the layout.
   */
  extensions: PropTypes.element,
  /**
   * The Object of layout-related APIs provided to the components of the Layout.
   */
  layoutConfig: ApplicationLayoutPropTypes.layoutConfigPropType,
  /**
   * The set of routes currently identified by the NavigationLayout. This prop is provided by the NavigationLayout.
   */
  navigationLayoutRoutes: PropTypes.arrayOf(processedRoutesPropType),
  /**
   * The window size currently identified by the NavigationLayout. This prop is provided by the NavigationLayout.
   */
  navigationLayoutSize: PropTypes.string,
  /**
   * Configuration values for the ApplicationName component.
   */
  nameConfig: ApplicationLayoutPropTypes.nameConfigPropType,
  /**
   * Configuration to be provided to the ApplicationUtility component.
   */
  utilityConfig: ApplicationLayoutPropTypes.utilityConfigPropType,
};

class ApplicationHeader extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnRequestDisclose = this.handleOnRequestDisclose.bind(this);
    this.handleOnRequestClose = this.handleOnRequestClose.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.getTargetRef = this.getTargetRef.bind(this);
    this.setContentNode = this.setContentNode.bind(this);

    this.state = { utilityComponent: null };
  }

  setContentNode(node) {
    this.contentNode = node;
  }

  getTargetRef() {
    if (this.contentNode) {
      return this.contentNode.querySelector('[data-application-header-utility]');
    }
    return undefined;
  }

  handleOnRequestDisclose(utility) {
    if (utility) {
      this.setState({ utilityComponent: React.cloneElement(utility, { onRequestClose: this.handleOnRequestClose }) });
    }
  }

  handleOnRequestClose() {
    if (this.state.utilityComponent) {
      this.setState({ utilityComponent: null });
    }
  }

  handleOnChange(event, key) {
    this.props.utilityConfig.onChange(event, key, this.props.app && this.props.app.disclose);
  }

  render() {
    const {
      app,
      applicationLinks,
      extensions,
      layoutConfig,
      nameConfig,
      utilityConfig,
      navigationLayoutRoutes,
      navigationLayoutSize,
      intl,
      ...customProps
    } = this.props;

    const headerClassNames = cx([
      'application-header',
      customProps.className,
    ]);

    const isCompactFormFactor = ['tiny', 'small'].indexOf(layoutConfig.size) >= 0;

    let toggle;
    if (layoutConfig.toggleMenu) {
      toggle = (
        <div className={cx('toolbar-toggle')}>
          <button
            className={cx('toggle-button')}
            aria-label={intl.formatMessage({ id: 'Terra.applicationLayout.applicationHeader.menuToggleLabel' })}
            onClick={layoutConfig.toggleMenu}
          >
            <IconMenu />
          </button>
        </div>
      );
    }

    let appName;
    if (nameConfig.accessory || nameConfig.title) {
      appName = <ApplicationHeaderName accessory={nameConfig.accessory} title={nameConfig.title} />;
    }

    let navigation;
    let utilities;
    let extensionsElement;
    if (!isCompactFormFactor) {
      if (applicationLinks.length) {
        navigation = <ApplicationTabs links={applicationLinks} />;
      }

      if (extensions) {
        extensionsElement = React.cloneElement(extensions, { app });
      }

      if (utilityConfig) {
        utilities = (
          <ApplicationHeaderUtility
            onChange={this.handleOnChange}
            onDisclose={this.handleOnRequestDisclose}
            title={utilityConfig.title}
            accessory={utilityConfig.accessory}
            menuItems={utilityConfig.menuItems}
            selectedKey={utilityConfig.selectedKey}
            data-application-header-utility
          />
        );
      }
    } else {
      navigation = appName;
      appName = undefined;
    }

    let popup;
    if (this.state.utilityComponent) {
      popup = (
        <Popup
          attachmentBehavior="none"
          contentAttachment="top center"
          contentHeight="auto"
          contentWidth="240"
          isArrowDisplayed
          isHeaderDisabled
          isOpen
          onRequestClose={this.handleOnRequestClose}
          targetRef={this.getTargetRef}
        >
          {this.state.utilityComponent}
        </Popup>
      );
    }

    return (
      <div {...customProps} className={headerClassNames} ref={this.setContentNode}>
        <ApplicationHeaderLayout
          toggle={toggle}
          logo={appName}
          navigation={navigation}
          extensions={extensionsElement}
          utilities={utilities}
        />
        {popup}
      </div>
    );
  }
}

ApplicationHeader.propTypes = propTypes;

export default injectIntl(ApplicationHeader);
