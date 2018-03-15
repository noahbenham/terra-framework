import PropTypes from 'prop-types';

const utilityConfigPropType = PropTypes.shape({
  title: PropTypes.string,
  accessory: PropTypes.element,
  onChange: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.element,
    contentLocation: PropTypes.string,
    key: PropTypes.string,
    title: PropTypes.string,
    isSelectable: PropTypes.bool,
    isSelected: PropTypes.bool,
    childKeys: PropTypes.array,
  })).isRequired,
  initialSelectedKey: PropTypes.string.isRequired,
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

export default {
  utilityConfigPropType,
  layoutConfigPropType,
  nameConfigPropType,
  applicationLinksPropType,
  navigationItemsPropType,
};
