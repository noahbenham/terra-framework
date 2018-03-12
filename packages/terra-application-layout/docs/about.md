# Terra Application Layout

The Terra Application Layout is a responsive, themeable layout for building applications.

The Terra Application Layout provides:
- A themeable, responsive application header, with APIs for rendering application-specific branding, tabular navigation, and user-centric utility controls.
- Responsive menu and content areas, as provided by `terra-layout`.
- `react-router`-based navigation and configuration, as provided by `terra-navigation-layout`.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-application-layout`
  - `yarn add terra-application-layout`

## Example

```jsx
import React from 'react';
import Base from 'terra-base';
import ApplicationLayout from 'terra-application-layout';
import ApplicationLayoutUtils from 'terra-application-layout/lib/ApplicationLayoutUtils';
import UserData from 'terra-application-layout/lib/user/_UserData';
import { UtilityUtils } from 'terra-application-utility';
import Avatar from 'terra-avatar';
import { MemoryRouter as Router } from 'react-router-dom';

const MyApplicationLogo = () => (
  <div>Application Logo</div>
);

const Page1Content = () => (
  <div>Page 1 Content</div>
);

const Page1Menu = ({ routingStackDelegate }) => (
  <div>
    <div>Page 1 Menu</div>
    {routingStackDelegate && routingStackDelegate.showParent && <button onClick={() => { routingStackDelegate.showParent() }}>Show Parent Menu</button>}
  </div>
);

const Page2Content = () => (
  <div>Page 2 Content</div>
);

/**
 * The data provided for nameConfig will be visible in the ApplicationLayout's header, as well
 * as in any menus at the tiny and small breakpoints.
 */
const nameConfig = {
  accessory: <MyApplicationLogo />,
  title: 'MyApplication',
};

/**
 * The data provided for utilityConfig will be visible in the ApplicationLayout's header in the
 * standard rendering mode and within the menus in the compact rendering mode.
 *
 * ApplicationLayoutUtls provides a helper function named getDefaultUtilityConfig that will
 * generate the configuration for the standard set of utility options. This function takes two parameters:
 * a UserData component instance, and an array of custom utility items to present in addition to the
 * standard ones. If the standard configuration is not desirable, an entirely custom configuration can
 * be used instead.
 */
const utilityConfig = {
  title: 'Name, User',
  accessory: <Avatar variant="user" ariaLabel="Name, User Photo" />,
  menuItems: ApplicationLayoutUtils.getDefaultUtilityConfig(
    <UserData
      userName="Name, User"
      userDetail="Subtitle Display"
      userPhoto={<Avatar variant="user" ariaLabel="Name, User Photo" />}
    />
  , [{
    key: 'additional-1',
    contentLocation: UtilityUtils.LOCATIONS.BODY,
    title: 'Addtional Item 1',
    isSelectable: false,
    isSelected: false,
    parentKey: ApplicationLayoutUtils.KEYS.MENU,
  }]),
  selectedKey: ApplicationLayoutUtils.KEYS.MENU,
  onChange: (event, itemKey, disclose) => {
    /**
     * This function will be called when items are selected within the utility menu.
     * The disclose parameter is provided for convenience, but any presentation method
     * could be used to handle that menu content selection.
     */
  },
};

/**
 * The routingConfig API matches that of the NavigationLayout. Routing specifications for the
 * menu and content regions are supported; the header region is not configurable.
 */
const routingConfig = {
  content: {
    'Page 1' : {
      path: '/page_1',
      component: {
        default: {
          componentClass: Page1Content,
        },
      },
    },
    'Page 2' : {
      path: '/page_2',
      component: {
        default: {
          componentClass: Page2Content,
        },
      },
    },
  },
  menu: {
    'Page 1' : {
      path: '/page_1',
      component: {
        default: {
          componentClass: Page1Menu,
        },
      },
    },
  },
};

/**
 * The navigationItems will be used to present the ApplicationLayout's navigation controls. The paths provided here must be present in
 * the routingConfig. If no navigation controls are desired, these items can be omitted.
 *
 * At medium, large, and huge breakpoints, the items will be presented as tabs within the ApplicationLayout's header.
 * At tiny and small breakpoints, the items will be presented within the layout's menu region within a ApplicationLayout-managed menu.
 */
const navigationItems = [{
  path: '/page_1',
  text: 'Page 1',
}, {
  path: '/page_2',
  text: 'Page 2',
}];

/**
 * The indexPath will be given to the NavigationLayout to set up the appropriate redirects. If users attempt to navigate to a path unsupported
 * by the routingConfig, they will be redirected to this route. This path should therefore be present in the routingConfig.
 */
const indexPath = '/page_1';

const MyApplication = () => (
  <Base style={{ height: '100%' }}>
    <Router>
      <ApplicationLayout
        nameConfig={nameConfig}
        utilityConfig={utilityConfig}
        routingConfig={routingConfig}
        navigationItems={navigationItems}
        indexPath={indexPath}
      />
    </Router>
  </Base>
);

export default MyApplication;
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
