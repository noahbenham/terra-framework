import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AppDelegate from 'terra-app-delegate';
import ApplicationMenuLayout from 'terra-application-menu-layout';
import { ApplicationMenuName } from 'terra-application-name';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';
import { processedRoutesPropType } from 'terra-navigation-layout/lib/configurationPropTypes';
import { ApplicationMenuUtility } from 'terra-application-utility';
import { disclosureType as modalDisclosureType } from 'terra-modal-manager';
import { availableDisclosureSizes } from 'terra-disclosure-manager';

import 'terra-base/lib/baseStyles';
import ApplicationLayoutUtils from '../ApplicationLayoutUtils';
import UtilityMenuWrapper from './_UtilityMenuWrapper';

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
   * The Object of layout-related APIs provided to the components of the Layout.
   */
  layoutConfig: ApplicationLayoutUtils.layoutConfigPropType.isRequired,
  /**
   * Configuration values for the ApplicationName component.
   */
  nameConfig: ApplicationLayoutUtils.nameConfigPropType,
  /**
   * Delegate prop that is provided by the NavigationLayout.
   */
  routingStackDelegate: RoutingStackDelegate.propType.isRequired,
  /**
   * The set of routes currently identified by the NavigationLayout. This prop is provided by the NavigationLayout.
   */
  navigationLayoutRoutes: PropTypes.arrayOf(processedRoutesPropType),
  /**
   * The window size currently identified by the NavigationLayout. This prop is provided by the NavigationLayout.
   */
  navigationLayoutSize: PropTypes.string,
  /**
   * Configuration to be provided to the ApplicationUtility component.
   */
  utilityConfig: ApplicationLayoutUtils.utilityConfigPropType,
};

class ApplicationMenu extends React.Component {
  constructor(props) {
    super(props);

    this.renderHeader = this.renderHeader.bind(this);
    this.renderExtensions = this.renderExtensions.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.handleUtilityDiscloseRequest = this.handleUtilityDiscloseRequest.bind(this);
    this.handleUtilityOnChange = this.handleUtilityOnChange.bind(this);

    this.state = {
      isCompact: ApplicationLayoutUtils.isSizeCompact(props.layoutConfig.size),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isCompact: ApplicationLayoutUtils.isSizeCompact(nextProps.layoutConfig.size),
    });
  }

  handleUtilityDiscloseRequest(utilityMenu) {
    const { app } = this.props;

    if (app && utilityMenu) {
      app.disclose({
        preferredType: modalDisclosureType,
        size: availableDisclosureSizes.SMALL,
        content: {
          component: <UtilityMenuWrapper>{utilityMenu}</UtilityMenuWrapper>,
          key: 'application-menu-utility-menu',
        },
      });
    }
  }

  handleUtilityOnChange(event, key) {
    const { utilityConfig, app } = this.props;

    utilityConfig.onChange(event, key, app && app.disclose);
  }

  renderHeader() {
    const { nameConfig } = this.props;
    const { isCompact } = this.state;

    if (isCompact && (nameConfig.accessory || nameConfig.title)) {
      return (
        <div className={cx(['menu-header'])}>
          <ApplicationMenuName accessory={nameConfig.accessory} title={nameConfig.title} />
        </div>
      );
    }

    return null;
  }

  renderExtensions() {
    const { app, extensions } = this.props;
    const { isCompact } = this.state;

    if (isCompact && extensions) {
      return React.cloneElement(extensions, { app });
    }

    return null;
  }

  renderFooter() {
    const { utilityConfig } = this.props;
    const { isCompact } = this.state;

    if (isCompact && utilityConfig) {
      return (
        <ApplicationMenuUtility
          onChange={this.handleUtilityOnChange}
          onDisclose={this.handleUtilityDiscloseRequest}
          title={utilityConfig.title}
          accessory={utilityConfig.accessory}
          menuItems={utilityConfig.menuItems}
          selectedKey={utilityConfig.selectedKey}
          data-application-menu-utility
        />
      );
    }

    return null;
  }

  render() {
    const {
      app,
      content,
      extensions,
      layoutConfig,
      nameConfig,
      routingStackDelegate,
      navigationLayoutRoutes,
      navigationLayoutSize,
      utilityConfig,
      ...customProps
    } = this.props;

    const menuClassNames = cx([
      'application-menu',
      customProps.className,
    ]);

    let clonedContent;
    if (content) {
      clonedContent = React.cloneElement(content, { app, layoutConfig, routingStackDelegate, navigationLayoutRoutes, navigationLayoutSize });
    }

    return (
      <div {...customProps} className={menuClassNames}>
        <ApplicationMenuLayout
          header={this.renderHeader()}
          extensions={this.renderExtensions()}
          content={clonedContent}
          footer={this.renderFooter()}
        />
      </div>
    );
  }
}

ApplicationMenu.propTypes = propTypes;

export default ApplicationMenu;
