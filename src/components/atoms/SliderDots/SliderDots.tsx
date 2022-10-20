import React from 'react';
import cx from 'classnames';
import styles from './SliderDots.module.scss';

type Props = {
  length: number;
  opacityAtIndex: number;
};

export const SliderDots = ({ length, opacityAtIndex }: Props) => {
  return (
    <span className={styles.container}>
      {Array.from({ length }).map((_, i) => {
        return (
          <div
            key={i}
            className={cx(opacityAtIndex !== i && styles.opacity_at_index)}
          ></div>
        );
      })}
    </span>
  );
};
