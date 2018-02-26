import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AppDelegate from 'terra-app-delegate';
import ApplicationMenuLayout from 'terra-application-menu-layout';
// import { ApplicationMenuUtility } from 'terra-application-utility';
import { ApplicationMenuName } from 'terra-application-name';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';

import 'terra-base/lib/baseStyles';
import ApplicationUtils from '../ApplicationUtils';

import styles from './ApplicationMenu.scss';
import UtilityMenuWrapper from './_UtilityMenuWrapper';
import ApplicationMenuUtility from '../mock-utils/Mock-Menu';

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
  layoutConfig: ApplicationUtils.layoutConfigPropType.isRequired,
  /**
   * Configuration values for the ApplicationName component.
   */
  nameConfig: ApplicationUtils.nameConfigPropType,
  /**
   * Delegate prop that is provided by the NavigationLayout.
   */
  routingStackDelegate: RoutingStackDelegate.propType.isRequired,
  /**
   * Configuration to be provided to the ApplicationUtility component.
   */
  utilityConfig: ApplicationUtils.utilityConfigPropType,
};

class ApplicationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleRequestDisclose = this.handleRequestDisclose.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleRequestDisclose(utility) {
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
    this.props.utilityConfig.onChange(event, key, this.props.app);
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
      if (utilityConfig) {
        footer = <ApplicationMenuUtility {...utilityConfig} onChange={this.handleOnChange} onRequestDisclose={this.handleRequestDisclose} />;
      }
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

export default ApplicationMenu;
