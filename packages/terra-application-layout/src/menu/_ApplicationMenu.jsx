import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AppDelegate from 'terra-app-delegate';
import ApplicationMenuLayout from 'terra-application-menu-layout';
import { ApplicationMenuName } from 'terra-application-name';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';
import { processedRoutesPropType } from 'terra-navigation-layout/lib/configurationPropTypes';
import { ApplicationMenuUtility } from 'terra-application-utility';

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
    this.handleOnRequestDisclose = this.handleOnRequestDisclose.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnRequestDisclose(utility) {
    if (this.props.app && utility) {
      this.props.app.disclose({
        preferredType: 'modal',
        size: 'small',
        content: {
          component: <UtilityMenuWrapper>{utility}</UtilityMenuWrapper>,
          key: 'application-utility-menu',
        },
      });
    }
  }

  handleOnChange(event, key) {
    this.props.utilityConfig.onChange(event, key, this.props.app && this.props.app.disclose);
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
      if (utilityConfig) {
        footer = (
          <ApplicationMenuUtility
            onChange={this.handleOnChange}
            onDisclose={this.handleOnRequestDisclose}
            title={utilityConfig.title}
            accessory={utilityConfig.accessory}
            menuItems={utilityConfig.menuItems}
            selectedKey={utilityConfig.selectedKey}
            data-application-menu-utility
          />
        );
      }
    }

    let clonedContent;
    if (content) {
      clonedContent = React.cloneElement(content, { app, layoutConfig, routingStackDelegate, navigationLayoutRoutes, navigationLayoutSize });
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

export default ApplicationMenu;
