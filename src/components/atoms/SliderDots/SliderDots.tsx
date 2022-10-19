import React from 'react';
import cx from 'classnames';

type Props = {
  length: number;
  opacityAtIndex: number;
};

export const SliderDots = ({ length, opacityAtIndex }: Props) => {
  return (
    <span className="absolute translate-x-[-50%] left-[50%] bottom-[12px] flex">
      {Array.from({ length }).map((_, i) => {
        return (
          <div
            key={i}
            className={cx(
              'h-[6px] w-[6px] rounded-full bg-white mx-[2.5px]',
              opacityAtIndex === i && 'opacity-60'
            )}
          ></div>
        );
      })}
    </span>
  );
};
