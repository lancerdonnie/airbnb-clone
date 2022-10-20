import React from 'react';
import Search from 'assets/icons/search.svg';
import styles from './SearchButton.module.scss';

export const SearchButton = () => {
  return (
    <div className={styles.container}>
      <Search />
    </div>
  );
};
