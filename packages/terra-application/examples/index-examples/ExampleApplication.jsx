/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import { MemoryRouter, withRouter } from 'react-router-dom';
import NavigationLayout from 'terra-navigation-layout';
import { ApplicationList } from 'terra-application-links';

import ApplicationHeader from '../../src/header/_ApplicationHeader';
import ApplicationMenu from '../../src/menu/_ApplicationMenu';

// import Application from '../../lib/Application';

import Page1Content from './Page1Content';
import Page2Content from './Page2Content';
import Page3Content from './Page3Content';
import Page1Menu from './Page1Menu';
import Page2Menu from './Page2Menu';

const config = {
  menu: {
    '/page1': {
      path: '/page1',
      component: {
        default: {
          componentClass: Page1Menu,
        },
      },
    },
    '/page2': {
      path: '/page2',
      component: {
        default: {
          componentClass: Page2Menu,
        },
      },
    },
  },
  content: {
    '/page1': {
      path: '/page1',
      component: {
        default: {
          componentClass: Page1Content,
        },
      },
    },
    '/page2': {
      path: '/page2',
      component: {
        default: {
          componentClass: Page2Content,
        },
      },
    },
    '/page3': {
      path: '/page3',
      component: {
        default: {
          componentClass: Page3Content,
        },
      },
    },
  },
};

const primaryRoutes = [{
  path: '/page1',
  text: '1',
}, {
  path: '/page2',
  text: '2',
}, {
  path: '/page3',
  text: '3',
}];

const ApplicationListMenu = ({ layoutConfig }) => (
  <ApplicationList
    links={primaryRoutes.map((route) => {
      const routeData = {};
      routeData.id = route.path;
      routeData.path = route.path;
      routeData.text = route.text;

      return routeData;
    })}
  />
);

class ApplicationMenuVessel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, layoutConfig, navigationLayoutRoutes, navigationLayoutSize, terraApplicationProps, ...customProps } = this.props;

    // Propagate layout/routing props to content.
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
  }
}

const ApplicationHeaderVessel = ({ name, layoutConfig, navigationLayoutRoutes, navigationLayoutSize }) => (
  <ApplicationHeader
    layoutConfig={layoutConfig}
    applicationLinks={primaryRoutes.map((route) => {
      const routeData = {};
      routeData.id = route.path;
      routeData.path = route.path;
      routeData.text = route.text;

      return routeData;
    })}
    nameConfig={{ title: name }}
    utilityConfig={{ userName: 'John Rambo' }}
  />
);

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const updatedConfig = Object.assign({}, config);

    const newMenus = {};
    Object.keys(updatedConfig.menu).forEach((menuKey) => {
      const newMenu = Object.assign({}, updatedConfig.menu[menuKey]);

      const newMenuComponent = Object.assign({}, newMenu.component);

      ['default', 'tiny', 'small', 'medium', 'large', 'huge'].forEach((size) => {
        if (!newMenuComponent[size]) {
          return;
        }

        const configForSize = Object.assign({}, newMenuComponent[size]);

        const propsForSize = Object.assign({}, configForSize.props);

        propsForSize.terraApplicationProps = {
          overrideComponentClass: configForSize.componentClass,
          name: this.props.name,
          key: 'MenuVessel',
        };
        configForSize.props = propsForSize;
        configForSize.componentClass = ApplicationMenuVessel;

        newMenuComponent[size] = configForSize;
      });

      newMenu.component = newMenuComponent;
      newMenus[menuKey] = newMenu;
    });

    updatedConfig.menu = newMenus;

    return (
      <NavigationLayout
        config={updatedConfig}
        header={<ApplicationHeaderVessel name={this.props.name} />}
        menuText="Application Menu"
      />
    );
  }
}

Application.propTypes = {
  name: PropTypes.string,
  brandIcon: PropTypes.node,
  location: PropTypes.object,
};

const WithRouterApplication = withRouter(Application);

const ExampleApplication = withRouter(({ location }) => (
  <div>
    <h3>{`Browser Location: ${location.pathname}`}</h3>
    <div style={{ height: '768px', width: '100%' }}>
      <WithRouterApplication
        name="Example Application"
        indexPath="/page1"
        extraConfig={{}}
      />
    </div>
  </div>
));

const AppRouter = () => (
  <MemoryRouter
    initialEntries={['/page1']}
    initialIndex={0}
  >
    <ExampleApplication />
  </MemoryRouter>
);

export default AppRouter;
