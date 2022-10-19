import React, { useCallback, useRef, useState } from 'react';
import { Category, DirectionButton } from 'components/atoms';
import cx from 'classnames';
import debounce from 'just-debounce-it';
import { useApp } from 'context/AppContext';

type Props = {
  onClick: (categoryId: number) => void;
  categoryId: number;
};

export const Categories = ({ onClick, categoryId }: Props) => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const sliderRef = useRef<HTMLDivElement>(null);

  const { listings } = useApp();

  const fn = useCallback(
    debounce((e: HTMLElement) => {
      const { scrollLeft, clientWidth, scrollWidth } = e;

      if (scrollLeft === 0) {
        setShowLeft(false);
        setShowRight(true);
      } else if (scrollWidth - (scrollLeft + clientWidth) === 0) {
        setShowLeft(true);
        setShowRight(false);
      } else {
        setShowLeft(true);
        setShowRight(true);
      }
    }, 100),
    []
  );

  const slide = (direction: 'left' | 'right') => () => {
    if (!sliderRef.current) return;

    let left;

    const { scrollLeft, clientWidth } = sliderRef.current;

    switch (direction) {
      case 'left':
        left = scrollLeft - clientWidth;
        break;
      case 'right':
      default:
        left = scrollLeft + clientWidth;
        break;
    }

    sliderRef.current.scroll({
      left,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className={cx('flex overflow-scroll gap-x-8 w-full', 'hide-scroll')}
        ref={sliderRef}
        onScroll={(e) => fn(e.target as HTMLDivElement)}
      >
        {listings.map((category) => (
          <Category
            key={category.id}
            {...category}
            onClick={() => onClick(category.id)}
            selected={categoryId === category.id}
          />
        ))}
      </div>
      <span
        className={cx(
          'absolute translate-y-[-50%] top-[50%] h-full flex items-center opacity-100 bg-white',
          'after:absolute after:w-10 after:h-full after:bg-gradient-to-r after:from-white after:to-white/0 after:left-[100%]',
          !showLeft && 'invisible'
        )}
        onClick={slide('left')}
      >
        <DirectionButton direction="left" className="border-[1px]" />
      </span>
      <span
        className={cx(
          'absolute translate-y-[-50%] top-[50%] h-full flex items-center opacity-100 bg-white right-0',
          'after:absolute after:w-10 after:h-full after:bg-gradient-to-l after:from-white after:to-white/0 after:right-[100%]',
          !showRight && 'invisible'
        )}
        onClick={slide('right')}
      >
        <DirectionButton direction="right" />
      </span>
    </div>
  );
};
