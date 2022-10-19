import React from 'react';
import cx from 'classnames';
import Image from 'next/image';

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
        'group flex flex-col gap-y-2 items-center text-alt-2 text-xs transition ease-in duration-200 font-semibold',
        !selected &&
          'hover:after:h-[2px] hover:after:w-full hover:after:rounded-lg hover:after:bg-alt-3',
        selected &&
          'after:h-[2px] after:w-full after:rounded-lg after:bg-black ',
        selected ? 'text-black' : 'cursor-pointer'
      )}
      onClick={onClick}
    >
      <span
        className={cx(
          'h-6 w-6 group-hover:contrast-100',
          selected ? 'contrast-100' : 'contrast-[calc(13/44)]'
        )}
      >
        <Image src={image} alt="category image" layout="fill" />
      </span>
      <span className={cx('whitespace-nowrap group-hover:text-black')}>
        {category}
      </span>
    </div>
  );
};
