/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import { MemoryRouter, withRouter } from 'react-router-dom';

import Application from '../../src/Application';

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
  text: 'Page 1',
}, {
  path: '/page2',
  text: 'Page 2',
}, {
  path: '/page3',
  text: 'Page 3',
}];

const ExampleApplication = withRouter(({ location }) => (
  <div>
    <h3>{`Browser Location: ${location.pathname}`}</h3>
    <div style={{ height: '768px', width: '100%' }}>
      <Application
        name="Example Application"
        indexPath="/page1"
        config={config}
        primaryRoutes={primaryRoutes}
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
