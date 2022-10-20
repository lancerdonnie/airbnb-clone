import React from 'react';
import cx from 'classnames';
import Image from 'next/image';
import styles from './Category.module.scss';

type Props = {
  image: string;
  category: string;
  onClick: () => void;
  selected: boolean;
};

export const Category = (props: Props) => {
  const { image, category, onClick, selected } = props;
  return (
    <div
      className={cx(
        'group',
        styles.container,
        !selected && styles.container_selected,
        selected && styles.container_unselected
      )}
      onClick={onClick}
    >
      <span
        className={cx(
          styles.image,
          selected ? styles.image_selected : styles.image_unselected
        )}
      >
        <Image src={image} alt="category image" layout="fill" />
      </span>
      <span className={styles.title}>{category}</span>
    </div>
  );
};
