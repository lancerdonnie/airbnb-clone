import React from 'react';
import FilterIcon from 'assets/icons/filter.svg';
import styles from './FilterButton.module.scss';

export const FilterButton = () => {
  return (
    <div className={styles.container}>
      <FilterIcon />
      <span>Filters</span>
    </div>
  );
};
