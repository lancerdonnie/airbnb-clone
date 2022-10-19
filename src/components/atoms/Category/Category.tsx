import React from 'react';
import cx from 'classnames';

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
        // 'flex flex-col gap-y-2 items-center text-alt-2 text-xs hover:font-semibold hover:text-black border-b-black border-b-2 rounded-b-lg',
        'flex flex-col gap-y-2 items-center text-alt-2 text-xs hover:font-semibold',
        !selected &&
          'hover:after:h-[2px] hover:after:w-full hover:after:rounded-lg hover:after:bg-alt-3',
        selected &&
          'after:h-[2px] after:w-full after:rounded-lg after:bg-black ',
        selected ? 'text-black' : 'cursor-pointer'
      )}
      onClick={onClick}
    >
      <img
        src={image}
        alt="category image"
        className={cx(
          'h-6 w-6 hover:contrast-100',
          selected ? 'contrast-100' : 'contrast-[calc(13/44)]'
        )}
      />
      <span className={cx('whitespace-nowrap', selected && 'font-semibold')}>
        {category}
      </span>
    </div>
  );
};
