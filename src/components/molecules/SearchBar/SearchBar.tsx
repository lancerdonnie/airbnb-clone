import React from 'react';
import { SearchButton } from 'components/atoms';
import styles from './SearchBar.module.scss';

export const SearchBar = () => {
  return (
    <div className={styles.container}>
      <span>Anywhere</span>
      <span></span>
      <span>Any week</span>
      <span></span>
      <span>
        <span>Add guests</span>
        <SearchButton />
      </span>
    </div>
  );
};
