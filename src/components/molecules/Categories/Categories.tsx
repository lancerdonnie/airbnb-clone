import React, { useCallback, useRef, useState } from 'react';
import { Category, DirectionButton } from 'components/atoms';
import cx from 'classnames';
import debounce from 'just-debounce-it';
import { useApp } from 'context/AppContext';
import styles from './Categories.module.scss';

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
    <div className={styles.container}>
      <div
        className={cx('hide-scroll', styles.categories)}
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
        className={cx(styles.left, !showLeft && 'invisible')}
        onClick={slide('left')}
      >
        <DirectionButton direction="left" className="border-[1px]" />
      </span>
      <span
        className={cx(styles.right, !showRight && 'invisible')}
        onClick={slide('right')}
      >
        <DirectionButton direction="right" />
      </span>
    </div>
  );
};
