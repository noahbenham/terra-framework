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

const reconcileChildren = (config) => {
  config.forEach((item) => {
    if (item.parentKeys) {
      item.parentKeys.forEach((key) => {
        const parent = config[key];
        if (parent.childKeys && parent.childKeys.indexOf(item.key) < 0) {
          parent.childKeys.push(item.key);
        }
      });
    }
  });
};

/**
 * userData: PropTypes.element,
 *  <UserData userDetail={userDetail} userName={userName} userPhoto={userPhoto} />
 * additionalConfig: PropTypes.object,
 *  [
 *    {
 *      key: 'additional-1',
 *      title: 'Addtional Title 1',
 *      isSelected: false,
 *      content: <Component />
 *      contentLocation: 'body',
 *      childKeys: [
 *        'additional-sub-1',
 *        'additional-sub-2',
 *      ],
 *      parentKeys: [
 *        'existing-parent-1',
 *        'existing-parent-2',
 *      ],
 *    },
 *    ...
 *  ]
 */
const getDefaultUtilityConfig = (userData, additionalConfig) => {
  const defaultConfig = [
    {
      key: KEYS.MENU,
      title: TITLES.MENU,
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
      isSelected: false,
      childKeys: [
        KEYS.CHANGE_PHOTO,
      ],
    },
    {
      key: KEYS.SETTINGS,
      title: TITLES.SETTINGS,
      isSelected: false,
      childKeys: [
        KEYS.APPEARANCE,
        KEYS.SECURITY,
      ],
    },
    {
      key: KEYS.LOG_OUT,
      title: TITLES.LOG_OUT,
      isSelected: false,
      contentLocation: 'footer',
      childKeys: [],
    },
    {
      key: KEYS.HELP,
      title: TITLES.HELP,
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
      isSelected: false,
      childKeys: [],
    },
    {
      key: KEYS.APPEARANCE,
      title: TITLES.APPEARANCE,
      isSelected: false,
      childKeys: [],
    },
    {
      key: KEYS.SECURITY,
      title: TITLES.SECURITY,
      isSelected: false,
      childKeys: [],
    },
    {
      key: KEYS.GETTING_STARTED,
      title: TITLES.GETTING_STARTED,
      isSelected: false,
      childKeys: [],
    },
    {
      key: KEYS.ABOUT,
      title: TITLES.ABOUT,
      isSelected: false,
      childKeys: [],
    },
    {
      key: KEYS.TERMS_OF_USE,
      title: TITLES.TERMS_OF_USE,
      isSelected: false,
      childKeys: [],
    },
  ];

  const menuConfig = defaultConfig.concat(additionalConfig);

  return reconcileChildren(menuConfig);
};

const ApplicationUtils = {
  getDefaultUtilityConfig,
  KEYS,
  TITLES,
};

export default ApplicationUtils;
