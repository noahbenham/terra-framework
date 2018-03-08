/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import { MemoryRouter, withRouter } from 'react-router-dom';
import Image from 'terra-image';
import Avatar from 'terra-avatar';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-clinical-action-header';

import ApplicationLayout from '../../src/ApplicationLayout';
import UserData from '../../src/user/UserData';
import ApplicationLayoutUtils from '../../src/ApplicationLayoutUtils';

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

const ExampleApplication = withRouter(({ location, nameConfig, utilityConfig, navigationItems, routingConfig, indexPath }) => (
  <ApplicationLayout
    nameConfig={nameConfig}
    utilityConfig={utilityConfig}
    routingConfig={routingConfig}
    navigationItems={navigationItems}
    indexPath={indexPath}
  />
));

const userAvatar = (
  <Avatar
    variant="user"
    alt="Dave, Dave"
    ariaLabel="Dave, Dave"
  />
);

const userData = (
  <UserData
    userName="Dave, Dave"
    userDetail="Smart Guy"
    userPhoto={userAvatar}
  />
);

const UtilityOptionComponent = ({ name, app }) => (
  <ContentContainer
    fill
    header={(
      <ActionHeader
        title={name.charAt(0).toUpperCase() + name.slice(1)}
        onClose={app.closeDisclosure}
        onBack={app.goBack}
        onMaximize={app.maximize}
        onMinimize={app.minimize}
      />
  )}
  >
    <div>Content for utility key: {name}</div>
  </ContentContainer>
);

const applicationNameConfig = Object.freeze({ title: 'Example Application', accessory: <Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" /> });

const utilityConfig = Object.freeze({
  userName: 'Dave, Dave',
  userPhoto: userAvatar,
  menuItems: ApplicationLayoutUtils.getDefaultUtilityConfig(userData),
  startingMenu: ApplicationLayoutUtils.KEYS.MENU,
  onChange: (event, itemKey, disclose) => {
    disclose({
      preferredType: 'modal',
      size: 'small',
      content: {
        key: itemKey,
        component: <UtilityOptionComponent name={itemKey} />,
      },
    });
  },
});

const AppRouter = () => (
  <div style={{ height: '100vh', overflow: 'auto' }}>
    <MemoryRouter>
      <ExampleApplication
        nameConfig={applicationNameConfig}
        utilityConfig={utilityConfig}
        navigationItems={primaryRoutes}
        routingConfig={config}
        indexPath="/page1"
      />
    </MemoryRouter>
  </div>
);

export default AppRouter;
