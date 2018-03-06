# Terra Application Layout

The Terra Application Layout is a responsive, themeable layout for building applications.

The Terra Application Layout provides:
- A themeable application header, with APIs for rendering application-specific branding, tabular navigation, and a user-centric utility menu.
- Responsive menu and content areas, as provided by `terra-layout`.
- `react-router`-based navigation, as provided by `terra-navigation-layout`.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-application-layout`
  - `yarn add terra-application-layout`

## Example

```jsx
import ApplicationLayout from 'terra-application-layout';
import { HashRouter as Router } from 'react-router-dom';
import { Page1Content, Page1Menu, Page2Content } from './my-app-pages';

/**
 * The data provided for nameConfig will be visible in the ApplicationLayout's header, as well
 * as in any menus at the tiny and small breakpoints.
 */
const nameConfig = {
  accessory: <MyApplicationLogo />,
  title: 'MyApplication',
};

/**
 * The data provided for utilityConfig will be integrated with the ApplicationLayout's set of
 * default utility items.
 */
const utilityConfig = {

};

/**
 * The routingConfig matches that of the NavigationLayout. Routing specifications for the
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
  /**
   * Like the NavigationLayout, the ApplicationLayout requires a Router (any type) in its parent hierarchy.
   */
  <HashRouter>
    <ApplicationLayout
      nameConfig={nameConfig}
      utilityConfig={utilityConfig}
      routingConfig={routingConfig}
      navigationItems={navigationItems}
      indexPath={indexPath}
    />
  </HashRouter>
);
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
