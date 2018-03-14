import { UtilityUtils } from 'terra-application-utility';

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

const menuTitle = intl => (intl.formatMessage({ id: 'Terra.applicationLayout.utilityDefaults.menu' }));
const userInformationTitle = intl => (intl.formatMessage({ id: 'Terra.applicationLayout.utilityDefaults.userInformation' }));
const changePhotoTitle = intl => (intl.formatMessage({ id: 'Terra.applicationLayout.utilityDefaults.changePhoto' }));
const settingsTitle = intl => (intl.formatMessage({ id: 'Terra.applicationLayout.utilityDefaults.settings' }));
const appearanceTitle = intl => (intl.formatMessage({ id: 'Terra.applicationLayout.utilityDefaults.appearance' }));
const securityTitle = intl => (intl.formatMessage({ id: 'Terra.applicationLayout.utilityDefaults.security' }));
const helpTitle = intl => (intl.formatMessage({ id: 'Terra.applicationLayout.utilityDefaults.help' }));
const gettingStartedTitle = intl => (intl.formatMessage({ id: 'Terra.applicationLayout.utilityDefaults.gettingStarted' }));
const aboutTitle = intl => (intl.formatMessage({ id: 'Terra.applicationLayout.utilityDefaults.about' }));
const termsOfUseTitle = intl => (intl.formatMessage({ id: 'Terra.applicationLayout.utilityDefaults.termsOfUse' }));
const logOutTitle = intl => (intl.formatMessage({ id: 'Terra.applicationLayout.utilityDefaults.logOut' }));

const reconcileChildren = (config, additionalConfig) => {
  if (!additionalConfig) {
    return config;
  }

  additionalConfig.forEach((item) => {
    if (item.parentKey) {
      const matchedParents = config.filter(configItem => configItem.key === item.parentKey);
      if (!matchedParents.length) {
        return;
      }

      const parent = matchedParents[0];

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
 *      contentLocation: UtilityUtils.LOCATIONS.BODY,
 *      title: 'Addtional Title 1',
 *      isSelectable: false,
 *      isSelected: false,
 *      content: <Component />
 *      childKeys: [
 *        'additional-sub-1',
 *        'additional-sub-2',
 *      ],
 *      parentKey: 'existing-parent-1',
 *    },
 *    ...
 *  ]
 */
const getDefaultUtilityConfig = (intl, userData, additionalConfig) => {
  const defaultConfig = [
    {
      key: KEYS.MENU,
      contentLocation: UtilityUtils.LOCATIONS.BODY,
      title: menuTitle(intl),
      isSelectable: false,
      isSelected: false,
      childKeys: [
        KEYS.USER_INFORMATION,
        KEYS.SETTINGS,
        KEYS.HELP,
        KEYS.LOG_OUT,
      ],
    },
    {
      key: KEYS.USER_INFORMATION,
      contentLocation: UtilityUtils.LOCATIONS.BODY,
      title: userInformationTitle(intl),
      content: userData,
      isSelectable: false,
      isSelected: false,
      childKeys: [
        KEYS.CHANGE_PHOTO,
      ],
    },
    {
      key: KEYS.SETTINGS,
      contentLocation: UtilityUtils.LOCATIONS.BODY,
      title: settingsTitle(intl),
      isSelectable: false,
      isSelected: false,
      childKeys: [
        KEYS.APPEARANCE,
        KEYS.SECURITY,
      ],
    },
    {
      key: KEYS.LOG_OUT,
      contentLocation: UtilityUtils.LOCATIONS.FOOTER,
      title: logOutTitle(intl),
      isSelectable: false,
      isSelected: false,
      childKeys: [],
    },
    {
      key: KEYS.HELP,
      contentLocation: UtilityUtils.LOCATIONS.BODY,
      title: helpTitle(intl),
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
      contentLocation: UtilityUtils.LOCATIONS.BODY,
      title: changePhotoTitle(intl),
      isSelectable: false,
      isSelected: false,
      childKeys: [],
    },
    {
      key: KEYS.APPEARANCE,
      contentLocation: UtilityUtils.LOCATIONS.BODY,
      title: appearanceTitle(intl),
      isSelectable: false,
      isSelected: false,
      childKeys: [],
    },
    {
      key: KEYS.SECURITY,
      contentLocation: UtilityUtils.LOCATIONS.BODY,
      title: securityTitle(intl),
      isSelectable: false,
      isSelected: false,
      childKeys: [],
    },
    {
      key: KEYS.GETTING_STARTED,
      contentLocation: UtilityUtils.LOCATIONS.BODY,
      title: gettingStartedTitle(intl),
      isSelectable: false,
      isSelected: false,
      childKeys: [],
    },
    {
      key: KEYS.ABOUT,
      contentLocation: UtilityUtils.LOCATIONS.BODY,
      title: aboutTitle(intl),
      isSelectable: false,
      isSelected: false,
      childKeys: [],
    },
    {
      key: KEYS.TERMS_OF_USE,
      contentLocation: UtilityUtils.LOCATIONS.BODY,
      title: termsOfUseTitle(intl),
      isSelectable: false,
      isSelected: false,
      childKeys: [],
    },
  ];

  return reconcileChildren(defaultConfig, additionalConfig);
};

export default {
  getDefaultUtilityConfig,
  KEYS,
};
