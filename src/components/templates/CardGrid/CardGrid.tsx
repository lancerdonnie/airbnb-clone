import React from 'react';
import { Card } from 'components/molecules';
import { useApp } from 'context/AppContext';
import styles from './CardGrid.module.scss';

type Props = {
  categoryId: number;
};

export const CardGrid = ({ categoryId }: Props) => {
  const { listings } = useApp();
  return (
    <div className={styles.container}>
      {listings
        .find((e) => e.id === categoryId)
        ?.data.map((e) => (
          <Card key={e.id} categoryId={categoryId} {...e} />
        ))}
    </div>
  );
};
