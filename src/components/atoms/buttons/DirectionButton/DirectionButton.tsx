import React from 'react';
import ArrowLeftIcon from 'assets/icons/arrow-left.svg';
import ArrowRightIcon from 'assets/icons/arrow-right.svg';
import cx from 'classnames';

type Props = {
  direction: 'left' | 'right';
  className?: string;
};

export const DirectionButton = ({ direction, className }: Props) => {
  return (
    <button
      type="button"
      className={cx(
        'rounded-full bg-white cursor-pointer w-7 h-7 flex justify-center items-center border-[0.5px] border-solid ',
        className
      )}
      style={{ borderColor: 'rgb(0 0 0 / 0.3)' }}
    >
      {direction === 'left' ? <ArrowLeftIcon /> : <ArrowRightIcon />}
    </button>
  );
};
