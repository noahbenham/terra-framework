/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import { MemoryRouter, withRouter } from 'react-router-dom';
import NavigationLayout from 'terra-navigation-layout';
import ApplicationHeaderLayout from 'terra-application-header-layout';
import ApplicationHeaderName from 'terra-application-name/src/ApplicationHeaderName';
import ApplicationMenuName from 'terra-application-name/src/ApplicationMenuName';
import ApplicationMenuLayout from 'terra-application-menu-layout';
import { ApplicationTabs, ApplicationList } from 'terra-application-links';

// import Application from '../../lib/Application';

// import HeaderExample from './HeaderExample';
// import MenuExample from './MenuExample';
// import Page1Content from './Page1Content';
// import Page2Content from './Page2Content';
// import Page3Content from './Page3Content';
// import Page1Menu from './Page1Menu';
// import Page2Menu from './Page2Menu';

// const config = {
//   header: {
//     '/': {
//       path: '/',
//       component: {
//         default: {
//           componentClass: HeaderExample,
//         },
//       },
//     },
//   },
//   menu: {
//     '/': {
//       path: '/',
//       component: {
//         tiny: {
//           componentClass: MenuExample,
//         },
//         small: {
//           componentClass: MenuExample,
//         },
//       },
//     },
//     '/page1': {
//       path: '/page1',
//       component: {
//         default: {
//           componentClass: Page1Menu,
//         },
//       },
//     },
//     '/page2': {
//       path: '/page2',
//       component: {
//         default: {
//           componentClass: Page2Menu,
//         },
//       },
//     },
//   },
//   content: {
//     '/page1': {
//       path: '/page1',
//       component: {
//         default: {
//           componentClass: Page1Content,
//         },
//       },
//     },
//     '/page2': {
//       path: '/page2',
//       component: {
//         default: {
//           componentClass: Page2Content,
//         },
//       },
//     },
//     '/page3': {
//       path: '/page3',
//       component: {
//         default: {
//           componentClass: Page3Content,
//         },
//       },
//     },
//   },
// };

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.renderHeader = this.renderHeader.bind(this);

    this.state = {};
  }

  renderHeader() {
    const { name, brandIcon } = this.props;

    const primaryNav = (
      <ApplicationTabs
        style={{ width: '100%' }}
        links={[
          {
            id: '/page1',
            path: '/page1',
            text: 'Page 1',
          },
          {
            id: '/page2',
            path: '/page2',
            text: 'Page 2',
          },
          {
            id: '/page3',
            path: '/page3',
            text: 'Page 3',
          },
        ]}
      />
    );

    return (
      <div style={{ height: '50px', width: '100%', backgroundColor: 'blue' }}>
        <ApplicationHeaderLayout
          toggle={<button>Toggle</button>}
          logo={<div>{name}</div>}
          navigation={primaryNav}
        />
      </div>
    );
  }

  render() {
    return (
      <NavigationLayout
        config={{}}
        header={this.renderHeader()}
        menu={<div>Menu</div>}
        menuText="Application Menu"
      >
        <div>Content</div>
      </NavigationLayout>
    );
  }
}

Application.propTypes = {
  name: PropTypes.string,
  brandIcon: PropTypes.node,
};

const WithRouterApplication = withRouter(Application);

const ExampleApplication = withRouter(({ location }) => (
  <div>
    <h3>{`Browser Location: ${location.pathname}`}</h3>
    <div style={{ height: '768px', width: '100%' }}>
      <WithRouterApplication
        name="Example Application"
        indexPath="/"
        extraConfig={{}}
      />
    </div>
  </div>
));

const AppRouter = () => (
  <MemoryRouter>
    <ExampleApplication />
  </MemoryRouter>
);

export default AppRouter;
