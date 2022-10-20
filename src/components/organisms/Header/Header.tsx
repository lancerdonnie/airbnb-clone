import React from 'react';
import { Logo, SearchBar } from 'components/molecules';
import { Nav } from 'components/organisms';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <SearchBar />
      <Nav />
    </header>
  );
};
