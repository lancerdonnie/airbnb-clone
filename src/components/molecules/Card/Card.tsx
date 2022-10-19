import React, { useEffect, useRef, useState } from 'react';
import { DirectionButton, LikeButton, SliderDots } from 'components/atoms';
import styles from './Card.module.scss';
import cx from 'classnames';
import { useApp } from 'context/AppContext';
import Image from 'next/image';
import { CardDetails } from './CardDetails/CardDetails';

export type CardProps = {
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

export const Card = (props: CardProps) => {
  const { images, id, liked, categoryId } = props;
  const [state, setState] = useState(0);

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
              <Image
                key={i}
                src={image.replace('/pictures/', '/im/pictures/')}
                alt="Listing image"
                layout="fill"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
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
        <SliderDots length={images.length} opacityAtIndex={state} />
      </div>
      <CardDetails {...props} />
    </div>
  );
};
