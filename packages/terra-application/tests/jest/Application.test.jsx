import React from 'react';

import WrappedApplication from '../../src/Application';
import PrimaryNavigationMenu from '../../src/PrimaryNavigationMenu';
import ApplicationMenuWrapper from '../../src/ApplicationMenuWrapper';

const Application = WrappedApplication.WrappedComponent;

const TestComponent = () => (
  <div className="test">Test</div>
);

describe('Application', () => {
  describe('buildMenuNavigationItems', () => {
    it('should return the given navigation items if no menu routes are present', () => {
      const routingConfig = {
        content: {
          '/test_path': {
            path: '/test_path',
            component: {
              default: {
                componentClass: TestComponent,
              },
            },
          },
        },
      };

      const navigationItems = [{
        path: '/1',
        text: '1',
      }, {
        path: '/2',
        text: '2',
      }];

      const result = Application.buildMenuNavigationItems({ routingConfig, navigationItems });

      expect(result).toEqual(navigationItems);
    });

    it('should return the updated navigation items with submenu data', () => {
      const routingConfig = {
        content: {
          '/test_path': {
            path: '/test_path',
            component: {
              default: {
                componentClass: TestComponent,
              },
            },
          },
        },
        menu: {
          '/1': {
            path: '/1',
            component: {
              default: {
                componentClass: TestComponent,
              },
            },
          },
          '/1/a': {
            path: '/1/a',
            component: {
              default: {
                componentClass: TestComponent,
              },
            },
          },
          '/2': {
            path: '/2',
            component: {
              default: {
                componentClass: TestComponent,
              },
            },
          },
        },
      };

      const navigationItems = [{
        path: '/1',
        text: '1',
      }, {
        path: '/2',
        text: '2',
      }, {
        path: '/3',
        text: '3',
      }];

      const result = Application.buildMenuNavigationItems({ routingConfig, navigationItems });

      expect(result[0].path).toEqual('/1');
      expect(result[0].text).toEqual('1');
      expect(result[0].hasSubMenu).toBeTruthy();

      expect(result[1].path).toEqual('/2');
      expect(result[1].text).toEqual('2');
      expect(result[1].hasSubMenu).toBeTruthy();

      expect(result[2].path).toEqual('/3');
      expect(result[2].text).toEqual('3');
      expect(result[2].hasSubMenu).toBeFalsy();
    });
  });

  describe('buildNavigationMenuConfig', () => {
    it('should return configuration object for primary navigation menu', () => {
      const updatedNavigationItems = [{
        path: '/test',
        text: 'TEST',
        hasSubMenu: true,
      }];

      Application.buildMenuNavigationItems = jest.fn();
      Application.buildMenuNavigationItems.mockReturnValueOnce(updatedNavigationItems);

      const props = {
        test: 'props',
      };

      const result = Application.buildNavigationMenuConfig(props);

      expect(Application.buildMenuNavigationItems.mock.calls.length).toBe(1);
      expect(Application.buildMenuNavigationItems.mock.calls[0][0]).toBe(props);

      expect(result['/']).toBeDefined();
      expect(Object.keys(result).length).toBe(1);
      expect(result['/'].path).toBe('/');
      expect(result['/'].component.tiny.componentClass).toBe(PrimaryNavigationMenu);
      expect(result['/'].component.tiny.props).toEqual({ navigationItems: updatedNavigationItems });
      expect(result['/'].component.tiny.refuseRoutingStackNavigation).toBeFalsy();
      expect(result['/'].component.small.componentClass).toBe(PrimaryNavigationMenu);
      expect(result['/'].component.small.props).toEqual({ navigationItems: updatedNavigationItems });
      expect(result['/'].component.small.refuseRoutingStackNavigation).toBeFalsy();
      expect(result['/'].component.default).toBeUndefined();
      expect(result['/'].component.medium).toBeUndefined();
      expect(result['/'].component.large).toBeUndefined();
      expect(result['/'].component.huge).toBeUndefined();
    });

    it('should disable stack navigation in menu when no nav items are provided', () => {
      const updatedNavigationItems = [];

      Application.buildMenuNavigationItems = jest.fn();
      Application.buildMenuNavigationItems.mockReturnValueOnce(updatedNavigationItems);

      const props = {
        test: 'props',
      };

      const result = Application.buildNavigationMenuConfig(props);

      expect(Application.buildMenuNavigationItems.mock.calls.length).toBe(1);
      expect(Application.buildMenuNavigationItems.mock.calls[0][0]).toBe(props);

      expect(result['/']).toBeDefined();
      expect(Object.keys(result).length).toBe(1);
      expect(result['/'].path).toBe('/');
      expect(result['/'].component.tiny.componentClass).toBe(PrimaryNavigationMenu);
      expect(result['/'].component.tiny.props).toEqual({ navigationItems: updatedNavigationItems });
      expect(result['/'].component.tiny.refuseRoutingStackNavigation).toBeTruthy();
      expect(result['/'].component.small.componentClass).toBe(PrimaryNavigationMenu);
      expect(result['/'].component.small.props).toEqual({ navigationItems: updatedNavigationItems });
      expect(result['/'].component.small.refuseRoutingStackNavigation).toBeTruthy();
      expect(result['/'].component.default).toBeUndefined();
      expect(result['/'].component.medium).toBeUndefined();
      expect(result['/'].component.large).toBeUndefined();
      expect(result['/'].component.huge).toBeUndefined();
    });
  });

  describe('wrapMenuConfig', () => {
    it('should update the configuration object for menu routes with components wrapped by the ApplicationMenuWrapper', () => {
      const nameConfig = {
        name: 'config',
      };

      const utilityConfig = {
        utility: 'config',
      };

      const menuConfig = {
        '/test_1': {
          path: '/test_1',
          component: {
            default: {
              componentClass: TestComponent,
              props: {
                test: '1',
              },
            },
          },
        },
        '/test_2': {
          path: '/test_2',
          component: {
            tiny: {
              componentClass: TestComponent,
              props: {
                test: '2',
              },
            },
            small: {
              componentClass: TestComponent,
              props: {
                test: '2',
              },
            },
            medium: {
              componentClass: TestComponent,
              props: {
                test: '2',
              },
            },
            large: {
              componentClass: TestComponent,
              props: {
                test: '2',
              },
            },
            huge: {
              componentClass: TestComponent,
              props: {
                test: '2',
              },
            },
          },
        },
      };

      const result = Application.wrapMenuConfig({ nameConfig, utilityConfig }, menuConfig);

      expect(Object.keys(result).length).toBe(2);
      expect(result['/test_1'].component.default.componentClass).toBe(ApplicationMenuWrapper);
      expect(result['/test_1'].component.default.props.test).toBe('1');
      expect(result['/test_1'].component.default.props.applicationMenuWrapperProps).toEqual({
        overrideComponentClass: TestComponent,
        nameConfig,
        utilityConfig,
        key: 'MenuWrapper',
      });

      ['tiny', 'small', 'medium', 'large', 'huge'].forEach((size) => {
        expect(result['/test_2'].component[size].componentClass).toBe(ApplicationMenuWrapper);
        expect(result['/test_2'].component[size].props.test).toBe('2');
        expect(result['/test_2'].component[size].props.applicationMenuWrapperProps).toEqual({
          overrideComponentClass: TestComponent,
          nameConfig,
          utilityConfig,
          key: 'MenuWrapper',
        });
      });
    });
  });

  describe('updateRoutingConfig', () => {
    it('should return the updated and wrapped configuration', () => {
      const routingConfig = {
        content: {
          test: 'contet config',
        },
        menu: {
          '/test': {
            path: '/test',
            component: {
              default: {
                componentClass: TestComponent,
                props: {
                  test: 'prop',
                },
              },
            },
          },
        },
      };

      const navigationItems = [{
        path: '/test',
        text: 'TEST',
      }];

      const navMenuConfig = {
        '/': {
          path: '/',
          component: {},
        },
      };

      Application.buildNavigationMenuConfig = jest.fn();
      Application.buildNavigationMenuConfig.mockReturnValueOnce(navMenuConfig);

      Application.wrapMenuConfig = jest.fn();
      Application.wrapMenuConfig.mockReturnValueOnce({ new: 'menus' });

      const result = Application.updateRoutingConfig({ routingConfig, navigationItems });

      expect(result.menu).toEqual({ new: 'menus' });
      expect(result.content).toEqual({
        test: 'contet config',
      });

      expect(Application.buildNavigationMenuConfig.mock.calls.length).toBe(1);
      expect(Application.buildNavigationMenuConfig.mock.calls[0][0]).toEqual({ routingConfig, navigationItems });

      expect(Application.wrapMenuConfig.mock.calls.length).toBe(1);
      expect(Application.wrapMenuConfig.mock.calls[0][0]).toEqual({ routingConfig, navigationItems });

      const wrapMenuConfigMenus = Application.wrapMenuConfig.mock.calls[0][1];
      expect(Object.keys(wrapMenuConfigMenus).length).toBe(2);
      expect(wrapMenuConfigMenus['/']).toBeDefined();
      expect(wrapMenuConfigMenus['/test']).toBeDefined();
    });
  });
});
