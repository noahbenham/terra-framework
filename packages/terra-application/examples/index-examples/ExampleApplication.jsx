/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import { MemoryRouter, withRouter } from 'react-router-dom';
import NavigationLayout from 'terra-navigation-layout';
import { ApplicationList } from 'terra-application-links';

import ApplicationHeader from '../../src/header/_ApplicationHeader';
import ApplicationMenu from '../../src/menu/_ApplicationMenu';

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

class ApplicationMenuVessel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name } = this.props;

    const primaryNavList = (
      <ApplicationList
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
      <div style={{ height: '100%', width: '100%' }}>
        <ApplicationMenu
          layoutConfig={this.props.layoutConfig}
          nameConfig={{ title: name }}
          utilityConfig={{ userName: 'John Rambo' }}
          extensions={<div>Extensions</div>}
          content={primaryNavList}
        />
      </div>
    );
  }
}

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <NavigationLayout
        config={{}}
        header={(
          <ApplicationHeader
            applicationLinks={[
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
            nameConfig={{ title: name }}
            utilityConfig={{ userName: 'John Rambo' }}
          />
        )}
        menu={<ApplicationMenuVessel name={this.props.name} />}
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
