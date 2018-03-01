import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import IconChevronRight from 'terra-icon/lib/icon/IconChevronRight';

import styles from './UserData.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * More information about the user.
   * Displayed next to the user photo and below the username.
   */
  userDetail: PropTypes.string,
    /**
   * The name to be displayed next to the user photo.
   */
  userName: PropTypes.string,
  /**
   * The photo to be displayed next to the userName and userDetail.
   */
  userPhoto: PropTypes.element,
};

const UserData = ({
  userDetail,
  userName,
  userPhoto,
  ...customProps
}) => {
  const containerClassNames = cx(['container', customProps.className]);
  let photoAttrs;
  if (userPhoto) {
    photoAttrs = React.cloneElement(userPhoto, { className: cx('photo') });
  }

  return (
    <div {...customProps} className={containerClassNames} >
      <div className={cx('user-data')} >
        {userPhoto && photoAttrs}
        <div className={cx('user-info')}>
          {userName && <div className={cx('name')}>{userName}</div>}
          {userDetail && <div className={cx('detail')}>{userDetail}</div>}
        </div>
      </div>
      {<IconChevronRight className={cx('chevron')} />}
    </div>
  );
};

UserData.propTypes = propTypes;

export default UserData;
