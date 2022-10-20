import React from 'react';
import Globe from 'assets/icons/globe.svg';
import Harmburger from 'assets/icons/harmburger.svg';
import Avatar from 'assets/icons/avatar.svg';
import styles from './Nav.module.scss';

export const Nav = () => {
  return (
    <nav className={styles.container}>
      <span className={styles.become}>Become a Host</span>
      <span className={styles.globe}>
        <Globe />
      </span>
      <span className={styles.menu}>
        <Harmburger />
        <span className="relative">
          <div className={styles.avatar}>
            <Avatar />
          </div>
          <div className={styles.status}></div>
        </span>
      </span>
    </nav>
  );
};
