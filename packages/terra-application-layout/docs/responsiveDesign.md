# Terra Application Layout

## Responsive Design

The ApplicationLayout has two rendering modes: `standard` and `compact`.
  - The `standard` rendering occurs at `medium`, `large`, and `huge` breakpoints.
  - The `compact` rendering occurs at `tiny` and `small` breakpoints.

### Header

- `nameConfig`
  - In both rendering modes, the header will display the application name and logo.
- `utilityConfig`
  - When `standard`, the header will display the user information as provided by the `utilityConfig`. When the user information is clicked, a popup will be presented containing the utility menu.
  - When `compact`, the header will not display utility information. It will instead be presented by the Application Menu Wrapper (see below).
- `navigationItems`
  - When `standard`, the header will display the navigation items as a set of responsive tabs (provided by `terra-application-links`). When a tab is selected, the ApplicationLayout will route to the path associated to that tab, and the tab will appear selected.
  - When `compact`, the header will not display any navigation item information. It will instead by presented by the Default Navigation Menu (see below).

Additionally, when `compact`, the ApplicationLayout will display a menu toggle button that will present the layout's menu when pressed.

### Application Menu Wrapper

When the ApplicationLayout is `compact`, the ApplicationLayout will wrap each `menu` component defined in the `routingConfig` with an ApplicationMenu component. This wrapper has regions defined for the presentation of `nameConfig` and `utilityConfig` information. This is done to maintain the availability of this information when horizontal space in the header is restricted.

This process is automatic. The wrapped component will continue to receive the expected props detailed in the Menu / Content section above.

### Default Navigation Menu

When `compact`, the ApplicationLayout will generate a menu that renders the `navigationItems` in list form. This menu is injected into the `routingConfig` for the `'/'` path, meaning that it will preceed any other defined routes. Other menu components are able to navigate to the default navigation manu by calling their `routingStackDelegate`'s `showParent` function.
