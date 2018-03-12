/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import { MemoryRouter, withRouter } from 'react-router-dom';
import Image from 'terra-image';
import Avatar from 'terra-avatar';
import ContentContainer from 'terra-content-container';
import { UtilityUtils } from 'terra-application-utility';

import ApplicationLayout from '../../src/ApplicationLayout';
import ApplicationLayoutUtils from '../../src/ApplicationLayoutUtils';
import UserData from '../../src/user/_UserData';

import ApplicationContent from './application-components/ApplicationContent';
import ApplicationMenu from './application-components/ApplicationMenu';
import UtilityOption from './application-components/UtilityOption';
import ProfilePicture from './henry.jpg';

/**
 * The routingConfig API matches that of the NavigationLayout.
 */
const routingConfig = {
  menu: {
    '/page_1': {
      path: '/page_1',
      component: {
        default: {
          componentClass: ApplicationMenu,
          props: {
            baseUrl: '/page_1',
            menuName: 'Page 1 Menu',
            includeNestedMenu: true,
          },
        },
      },
    },
    '/page_1/nested': {
      path: '/page_1/nested',
      component: {
        default: {
          componentClass: ApplicationMenu,
          props: {
            baseUrl: '/page_1/nested',
            menuName: 'Nested Menu',
          },
        },
      },
    },
  },
  content: {
    '/page_1': {
      path: '/page_1',
      component: {
        default: {
          componentClass: ApplicationContent,
          props: {
            basePath: '/page_1',
            contentName: 'Page 1',
          },
        },
      },
    },
    '/page_2': {
      path: '/page_2',
      component: {
        default: {
          componentClass: ApplicationContent,
          props: {
            basePath: '/page_2',
            contentName: 'Page 2',
            noMenu: true,
          },
        },
      },
    },
    '/page_3': {
      path: '/page_3',
      component: {
        default: {
          componentClass: ApplicationContent,
          props: {
            basePath: '/page_3',
            contentName: 'Page 3',
            showDummyContent: true,
          },
        },
      },
    },
    '/page_4': {
      path: '/page_4',
      component: {
        default: {
          componentClass: ApplicationContent,
          props: {
            basePath: '/page_4',
            contentName: 'Page 4',
            showDummyContent: true,
          },
        },
      },
    },
    '/page_5': {
      path: '/page_5',
      component: {
        default: {
          componentClass: ApplicationContent,
          props: {
            basePath: '/page_5',
            contentName: 'Page 5',
            showDummyContent: true,
          },
        },
      },
    },
    '/page_6': {
      path: '/page_6',
      component: {
        default: {
          componentClass: ApplicationContent,
          props: {
            basePath: '/page_6',
            contentName: 'Page 6',
            showDummyContent: true,
          },
        },
      },
    },
    '/page_7': {
      path: '/page_7',
      component: {
        default: {
          componentClass: ApplicationContent,
          props: {
            basePath: '/page_7',
            contentName: 'Page 7',
            showDummyContent: true,
          },
        },
      },
    },
  },
};

const navigationItems = [{
  path: '/page_1',
  text: 'Page 1',
}, {
  path: '/page_2',
  text: 'Page 2',
}, {
  path: '/page_3',
  text: 'Page 3',
}, {
  path: '/page_4',
  text: 'Page 4',
}, {
  path: '/page_5',
  text: 'Page 5',
}, {
  path: '/page_6',
  text: 'Page 6',
}, {
  path: '/page_7',
  text: 'Page 7',
}];

const userAvatar = (
  <Avatar
    image={ProfilePicture}
    variant="user"
    alt="Swanson, Henry"
    ariaLabel="Swanson, Henry"
    key="user_avatar"
  />
);

const userData = (
  <UserData
    userName="Swanson, Henry"
    userDetail="Henry Swanson's my name, and excitement's my game."
    userPhoto={userAvatar}
  />
);

const nameConfig = Object.freeze({
  title: 'Example Application',
  accessory: <Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" />,
});

const customUtilities = [{
  key: 'additional-1',
  contentLocation: UtilityUtils.LOCATIONS.BODY,
  title: 'Addtional Item 1',
  isSelectable: false,
  isSelected: false,
  childKeys: [
    'additional-sub-1',
    'additional-sub-2',
  ],
  parentKey: ApplicationLayoutUtils.KEYS.MENU,
}, {
  key: 'additional-sub-1',
  contentLocation: UtilityUtils.LOCATIONS.BODY,
  title: 'Addtional Item 1 - Sub 1',
  isSelectable: false,
  isSelected: false,
  parentKey: 'additional-1',

}, {
  key: 'additional-sub-2',
  contentLocation: UtilityUtils.LOCATIONS.BODY,
  title: 'Addtional Item 1 - Sub 2',
  isSelectable: false,
  isSelected: false,
  parentKey: 'additional-1',
}, {
  key: 'additional-2',
  contentLocation: UtilityUtils.LOCATIONS.BODY,
  title: 'Addtional Item 2',
  isSelectable: false,
  isSelected: false,
  parentKey: ApplicationLayoutUtils.KEYS.MENU,
}];

const utilityConfig = Object.freeze({
  title: 'Swanson, Henry',
  accessory: userAvatar,
  menuItems: ApplicationLayoutUtils.getDefaultUtilityConfig(userData, customUtilities),
  selectedKey: ApplicationLayoutUtils.KEYS.MENU,
  onChange: (event, itemKey, disclose) => {
    disclose({
      preferredType: 'modal',
      size: 'small',
      content: {
        key: itemKey,
        component: <UtilityOption name={itemKey} />,
      },
    });
  },
});

const ExampleApplication = withRouter(({ location }) => (
  <ContentContainer
    fill
    header={<h3>{`Router Location: ${location.pathname}`}</h3>}
  >
    <ApplicationLayout
      nameConfig={nameConfig}
      utilityConfig={utilityConfig}
      routingConfig={routingConfig}
      navigationItems={navigationItems}
      indexPath="/page_1"
    />
  </ContentContainer>
));

const AppRouter = () => (
  <div style={{ height: '100%' }}>
    <MemoryRouter>
      <ExampleApplication />
    </MemoryRouter>
  </div>
);

export default AppRouter;
