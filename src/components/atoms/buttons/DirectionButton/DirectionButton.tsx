import React from 'react';
import ArrowLeftIcon from 'assets/icons/arrow-left.svg';
import ArrowRightIcon from 'assets/icons/arrow-right.svg';
import cx from 'classnames';
import styles from './DirectionButton.module.scss';

type Props = {
  direction: 'left' | 'right';
  className?: string;
};

export const DirectionButton = ({ direction, className }: Props) => {
  return (
    <button type="button" className={cx(styles.container, className)}>
      {direction === 'left' ? <ArrowLeftIcon /> : <ArrowRightIcon />}
    </button>
  );
};
