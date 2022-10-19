import React, { useEffect, useRef, useState } from 'react';
import { DirectionButton, LikeButton } from 'components/atoms';
import styles from './Card.module.scss';
import cx from 'classnames';
import { date } from 'utils';
import Star from 'assets/icons/star.svg';
import { useApp } from 'context/AppContext';

type Props = {
  id: number;
  images: string[];
  price: string;
  rating: string;
  host: string;
  name: string;
  dateFrom: string;
  dateTo: string;
  liked: boolean;
  categoryId: number;
};

export const Card = (props: Props) => {
  const {
    images,
    dateFrom,
    dateTo,
    host,
    name,
    price,
    rating,
    id,
    liked,
    categoryId,
  } = props;
  const [state, setState] = useState(0);
  const [like, setLike] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);
  const { likeListing } = useApp();

  useEffect(() => {}, []);

  const slide = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;

    let left;

    const { scrollLeft, clientWidth } = sliderRef.current;

    switch (direction) {
      case 'left':
        if (state > 0) setState(state - 1);
        left = scrollLeft - clientWidth;
        break;
      case 'right':
      default:
        if (state < images.length - 1) setState(state + 1);
        left = scrollLeft + clientWidth;
        break;
    }

    sliderRef.current.scroll({
      left,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative group">
      <div className="relative group">
        <div
          className={cx(styles.slider, 'hide-scroll')}
          data-slider
          ref={sliderRef}
        >
          {images.map((image, i) => {
            return (
              <img
                src={image.replace('/pictures/', '/im/pictures/')}
                key={i}
                className={styles.slide}
                alt="house image"
              />
            );
          })}
        </div>
        <span
          className="absolute right-[12px] top-[12px]"
          onClick={() => likeListing(categoryId, id)}
        >
          <LikeButton liked={liked} />
        </span>
        <span
          className={cx(
            'absolute translate-y-[-50%] top-[50%] left-[12px] opacity-0 group-hover:opacity-100 transition duration-[250ms] hover:scale-[1.09]',
            state === 0 && 'opacity-0'
          )}
          onClick={() => slide('left')}
        >
          <DirectionButton direction="left" />
        </span>
        <span
          className={cx(
            'absolute translate-y-[-50%] top-[50%] right-[12px] opacity-0 group-hover:opacity-100 transition duration-[250ms] hover:scale-[1.09]',
            state === images.length - 1 && 'opacity-0'
          )}
          onClick={() => slide('right')}
        >
          <DirectionButton direction="right" />
        </span>
        <span className="absolute translate-x-[-50%] left-[50%] bottom-[12px] flex">
          {images.map((_, i) => {
            return (
              <div
                key={i}
                className={cx(
                  'h-[6px] w-[6px] rounded-full bg-white mx-[2.5px]',
                  state !== i && 'opacity-60'
                )}
              ></div>
            );
          })}
        </span>
      </div>
      <div className="mt-3 flex gap-x-2 justify-between">
        <div className="text-[15px]">
          <div className="font-semibold">{name}</div>
          <div className="text-alt-2">{host}</div>
          <div className="text-alt-2">
            {date(dateFrom).format('MMM')} {date(dateFrom).format('DD')}-
            {date(dateTo).format('DD')}
          </div>
          <div className="mt-[6px]">
            <span className="font-semibold">${price}</span> night
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <Star /> <span className="ml-1">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
