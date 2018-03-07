import PropTypes from 'prop-types';

const KEYS = {
  MENU: 'menu',
  USER_INFORMATION: 'user-information',
  CHANGE_PHOTO: 'change-photo',
  SETTINGS: 'settings',
  APPEARANCE: 'appearance',
  SECURITY: 'security',
  HELP: 'help',
  GETTING_STARTED: 'getting-started',
  ABOUT: 'about',
  TERMS_OF_USE: 'terms-of-use',
  LOG_OUT: 'log-out',
};

const TITLES = {
  MENU: 'Menu',
  USER_INFORMATION: 'User Information',
  CHANGE_PHOTO: 'Change Photo',
  SETTINGS: 'Settings',
  APPEARANCE: 'Appearance',
  SECURITY: 'Security',
  HELP: 'Help',
  GETTING_STARTED: 'Getting Started',
  ABOUT: 'About',
  TERMS_OF_USE: 'Terms of Use',
  LOG_OUT: 'Log Out',
};

const reconcileChildren = (config, additionalConfig) => {
  additionalConfig.forEach((item) => {
    if (item.parentKey) {
      const parent = config[item.parentKey];
      if (!parent.childKeys) {
        parent.childKeys = [item.key];
      } else if (parent.childKeys.indexOf(item.key) < 0) {
        parent.childKeys.push(item.key);
      }
    }
  });

  return config.concat(additionalConfig);
};

/**
 * userData: PropTypes.element,
 *  <UserData userDetail={userDetail} userName={userName} userPhoto={userPhoto} />
 * additionalConfig: PropTypes.array,
 *  [
 *    {
 *      key: 'additional-1',
 *      title: 'Addtional Title 1',
 *      isSelectable: false,
 *      isSelected: false,
 *      content: <Component />
 *      contentLocation: 'body',
 *      childKeys: [
 *        'additional-sub-1',
 *        'additional-sub-2',
 *      ],
 *      parentKey: 'existing-parent-1',
 *    },
 *    ...
 *  ]
 */
const getDefaultUtilityConfig = (userData, additionalConfig) => {
  const defaultConfig = [
    {
      key: KEYS.MENU,
      title: TITLES.MENU,
      isSelectable: false,
      isSelected: false,
      childKeys: [
        KEYS.USER_INFORMATION,
        KEYS.SETTINGS,
        KEYS.HELP,
      ],
    },
    {
      key: KEYS.USER_INFORMATION,
      title: TITLES.USER_INFORMATION,
      content: userData,
      isSelectable: false,
      isSelected: false,
      childKeys: [
        KEYS.CHANGE_PHOTO,
      ],
    },
    {
      key: KEYS.SETTINGS,
      title: TITLES.SETTINGS,
      isSelectable: false,
      isSelected: false,
      childKeys: [
        KEYS.APPEARANCE,
        KEYS.SECURITY,
      ],
    },
    {
      key: KEYS.LOG_OUT,
      title: TITLES.LOG_OUT,
      isSelectable: false,
      isSelected: false,
      contentLocation: 'footer',
      childKeys: [],
    },
    {
      key: KEYS.HELP,
      title: TITLES.HELP,
      isSelectable: false,
      isSelected: false,
      childKeys: [
        KEYS.GETTING_STARTED,
        KEYS.ABOUT,
        KEYS.TERMS_OF_USE,
      ],
    },
    {
      key: KEYS.CHANGE_PHOTO,
      title: TITLES.SETTINGS,
      isSelectable: false,
      isSelected: false,
      childKeys: [],
    },
    {
      key: KEYS.APPEARANCE,
      title: TITLES.APPEARANCE,
      isSelectable: false,
      isSelected: false,
      childKeys: [],
    },
    {
      key: KEYS.SECURITY,
      title: TITLES.SECURITY,
      isSelectable: false,
      isSelected: false,
      childKeys: [],
    },
    {
      key: KEYS.GETTING_STARTED,
      title: TITLES.GETTING_STARTED,
      isSelectable: false,
      isSelected: false,
      childKeys: [],
    },
    {
      key: KEYS.ABOUT,
      title: TITLES.ABOUT,
      isSelectable: false,
      isSelected: false,
      childKeys: [],
    },
    {
      key: KEYS.TERMS_OF_USE,
      title: TITLES.TERMS_OF_USE,
      isSelectable: false,
      isSelected: false,
      childKeys: [],
    },
  ];

  return reconcileChildren(defaultConfig, additionalConfig);
};

const utilityConfigPropType = PropTypes.shape({
  userName: PropTypes.string.isRequired,
  userPhoto: PropTypes.element,
  onChange: PropTypes.func.isRequired,
  menuItems: PropTypes.shape({
    content: PropTypes.element,
    contentLocation: PropTypes.string,
    key: PropTypes.string,
    title: PropTypes.string,
    isSelectable: PropTypes.bool,
    isSelected: PropTypes.bool,
    childKeys: PropTypes.array,
  }),
});

const layoutConfigPropType = PropTypes.shape({
  size: PropTypes.string,
  toggleMenu: PropTypes.func,
  menuIsOpen: PropTypes.bool,
  togglePin: PropTypes.bool,
  menuIsPinned: PropTypes.bool,
});

const nameConfigPropType = PropTypes.shape({
  accessory: PropTypes.element,
  title: PropTypes.string,
});

const applicationLinksPropType = PropTypes.arrayOf(PropTypes.shape({
  hasSubMenu: PropTypes.bool,
  id: PropTypes.string,
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}));

const navigationItemsPropType = PropTypes.arrayOf(PropTypes.shape({
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  hasSubMenu: PropTypes.bool,
}));

const ApplicationLayoutUtils = {
  getDefaultUtilityConfig,
  KEYS,
  TITLES,
  utilityConfigPropType,
  layoutConfigPropType,
  nameConfigPropType,
  applicationLinksPropType,
  navigationItemsPropType,
};

export default ApplicationLayoutUtils;
