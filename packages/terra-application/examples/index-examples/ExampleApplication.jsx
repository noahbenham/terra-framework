/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import { MemoryRouter, withRouter } from 'react-router-dom';
import Image from 'terra-image';

import Application from '../../src/Application';
import UserData from '../../src/user/UserData';

import Page1Content from './Page1Content';
import Page2Content from './Page2Content';
import Page3Content from './Page3Content';
import Page1Menu from './Page1Menu';
import Page1ItemsMenu from './Page1ItemsMenu';
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
    '/page1/items': {
      path: '/page1/items',
      component: {
        default: {
          componentClass: Page1ItemsMenu,
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
  text: 'Page 1',
}, {
  path: '/page2',
  text: 'Page 2',
}, {
  path: '/page3',
  text: 'Page 3',
}];

const ExampleApplication = withRouter(({ app, location, nameConfig, utilityConfig, navigationItems, routingConfig, indexPath }) => (
  <div>
    <h3>UserData</h3>
    <div style={{ width: '240px', overflow: 'hidden' }}>
      <UserData
        userPhoto={<Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" />}
        userDetail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim. "
        userName="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim. "
        />
    </div>
    <h3>{`Browser Location: ${location.pathname}`}</h3>
    <div style={{ height: '600px', width: '100%' }}>
      <Application
        app={app}
        nameConfig={nameConfig}
        utilityConfig={utilityConfig}
        routingConfig={routingConfig}
        navigationItems={navigationItems}
        indexPath={indexPath}
      />
    </div>
  </div>
));

const nameConfig = Object.freeze({ title: 'Example Application', accessory: <Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" /> });
const utilityConfig = Object.freeze({ userName: 'John Rambo', onChange: () => {} });

const AppRouter = () => (
  <div style={{ height: '100vh', overflow: 'auto' }}>
    <MemoryRouter>
      <ExampleApplication
        nameConfig={nameConfig}
        utilityConfig={utilityConfig}
        navigationItems={primaryRoutes}
        routingConfig={config}
        indexPath="/page1"
      />
    </MemoryRouter>
    <br />
    <MemoryRouter>
      <ExampleApplication
        nameConfig={nameConfig}
        utilityConfig={utilityConfig}
        routingConfig={config}
        indexPath="/page3"
      />
    </MemoryRouter>
    <br />
    <MemoryRouter>
      <ExampleApplication
        nameConfig={nameConfig}
        utilityConfig={utilityConfig}
        routingConfig={config}
        navigationItems={[{
          path: '/page1',
          text: 'Page 1',
        }]}
        indexPath="/page1"
      />
    </MemoryRouter>
  </div>
);

export default AppRouter;
