import React from 'react';

import styles from './styles.module.scss';
import LordIcon from 'components/LordIcon';
import { HEART_ICON_CDN } from 'utils/constants/settingSystem';
import { Badge } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HeaderFavoriteMenu = () => {
  const favoriteList = useSelector((state) => state.users.favoriteList);

  return (
    <div className={styles.wrapper}>
      <Badge
        count={favoriteList?.length}
        overflowCount={99}
        style={{
          lineHeight: '26px',
          boxShadow: '0 0 0 1.5px #fff',
          color: 'var(--color-text-secondary )',
          backgroundColor: 'var(--color-secondary)',
        }}
      >
        <Link to='/profile'>
          <LordIcon
            className={styles.lordIcon}
            src={HEART_ICON_CDN}
            trigger='hover'
          />
        </Link>
      </Badge>
    </div>
  );
};

export default HeaderFavoriteMenu;