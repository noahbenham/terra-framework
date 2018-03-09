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

import ApplicationContent from './application-components/ApplicationContent';
import ApplicationMenu from './application-components/ApplicationMenu';

const config = {
  menu: {
    '/page1': {
      path: '/page1',
      component: {
        default: {
          componentClass: ApplicationMenu,
          props: {
            baseUrl: '/page1',
            menuName: 'Page 1 Menu',
            includeNestedMenu: true,
          },
        },
      },
    },
    '/page1/nested': {
      path: '/page1/nested',
      component: {
        default: {
          componentClass: ApplicationMenu,
          props: {
            baseUrl: '/page1/nested',
            menuName: 'Nested Menu',
          },
        },
      },
    },
  },
  content: {
    '/page1': {
      path: '/page1',
      component: {
        default: {
          componentClass: ApplicationContent,
          props: {
            basePath: '/page1',
            contentName: 'Page 1',
          },
        },
      },
    },
    '/page2': {
      path: '/page2',
      component: {
        default: {
          componentClass: ApplicationContent,
          props: {
            basePath: '/page2',
            contentName: 'Page 2',
            noMenu: true,
          },
        },
      },
    },
    '/page3': {
      path: '/page3',
      component: {
        default: {
          componentClass: ApplicationContent,
          props: {
            basePath: '/page3',
            contentName: 'Page 3',
            showDummyContent: true,
          },
        },
      },
    },
    '/page4': {
      path: '/page4',
      component: {
        default: {
          componentClass: ApplicationContent,
          props: {
            basePath: '/page4',
            contentName: 'Page 4',
            showDummyContent: true,
          },
        },
      },
    },
    '/page5': {
      path: '/page5',
      component: {
        default: {
          componentClass: ApplicationContent,
          props: {
            basePath: '/page5',
            contentName: 'Page 5',
            showDummyContent: true,
          },
        },
      },
    },
    '/page6': {
      path: '/page6',
      component: {
        default: {
          componentClass: ApplicationContent,
          props: {
            basePath: '/page6',
            contentName: 'Page 6',
            showDummyContent: true,
          },
        },
      },
    },
    '/page7': {
      path: '/page7',
      component: {
        default: {
          componentClass: ApplicationContent,
          props: {
            basePath: '/page7',
            contentName: 'Page 7',
            showDummyContent: true,
          },
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
}, {
  path: '/page4',
  text: 'Page 4',
}, {
  path: '/page5',
  text: 'Page 5',
}, {
  path: '/page6',
  text: 'Page 6',
}, {
  path: '/page7',
  text: 'Page 7',
}];

const ExampleApplication = withRouter(({ location, nameConfig, utilityConfig, navigationItems, routingConfig, indexPath }) => (
  <div>
    <h3>{`Router Location: ${location.pathname}`}</h3>
    <div style={{ height: '600px', width: '100%' }}>
      <ApplicationLayout
        nameConfig={nameConfig}
        utilityConfig={utilityConfig}
        routingConfig={routingConfig}
        navigationItems={navigationItems}
        indexPath={indexPath}
      />
    </div>
  </div>
));

const userAvatar = (
  <Avatar
    variant="user"
    alt="Burton, Jack"
    ariaLabel="Burton, Jack"
  />
);

const userData = (
  <UserData
    userName="Burton, Jack"
    userDetail="Everybody relax, I'm here."
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
    <div style={{ padding: '1rem' }}>Content for utility key: {name}</div>
  </ContentContainer>
);

const applicationNameConfig = Object.freeze({ title: 'Example Application', accessory: <Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" /> });

const utilityConfig = Object.freeze({
  userName: 'Burton, Jack',
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
