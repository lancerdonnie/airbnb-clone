import React from 'react';
import Map from 'assets/icons/map.svg';
import List from 'assets/icons/list.svg';
import styles from './ShowMapButton.module.scss';

type Props = {
  showMap?: boolean;
};

export const ShowMapButton = ({ showMap }: Props) => {
  return (
    <div className={styles.container}>
      <span>Show {showMap ? 'list' : 'map'}</span>
      {showMap ? <List /> : <Map />}
    </div>
  );
};
