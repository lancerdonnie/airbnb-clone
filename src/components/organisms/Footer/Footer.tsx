import React from 'react';
import Globe from 'assets/icons/globe.svg';
import ArrowUp from 'assets/icons/arrow-up.svg';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left_footer}>
        <span className="mr-2">© 2022 Airbnb, Inc.</span>
        <span>.</span>
        <span className="cursor-pointer hover:underline mx-2">Privacy</span>
        <span>.</span>
        <span className="cursor-pointer hover:underline mx-2">Terms</span>
        <span>.</span>
        <span className="cursor-pointer hover:underline mx-2">Sitemap</span>
        <span>.</span>
        <span className="cursor-pointer hover:underline mx-2">
          Destinations
        </span>
      </div>
      <div className={styles.right_footer}>
        <Globe />
        <span className="ml-2 cursor-pointer hover:underline">
          English (US)
        </span>
        <span className="ml-6">
          $ <span className="ml-2 cursor-pointer hover:underline">USD</span>
        </span>
        <span className="ml-6 mr-2 cursor-pointer hover:underline">
          Support & resources
        </span>
        <ArrowUp />
      </div>
    </div>
  );
};
