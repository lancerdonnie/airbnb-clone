import React from 'react';
import { CardProps } from '../Card';
import { date } from 'utils';
import Star from 'assets/icons/star.svg';
import styles from './CardDetails.module.scss';

export const CardDetails = (props: CardProps) => {
  const { name, host, dateFrom, dateTo, price, rating } = props;
  return (
    <div className={styles.container}>
      <div>
        <div>{name}</div>
        <div>{host}</div>
        <div>
          {date(dateFrom).format('MMM')} {date(dateFrom).format('DD')}-
          {date(dateTo).format('DD')}
        </div>
        <div>
          <span>${price}</span> night
        </div>
      </div>
      <div>
        <div>
          <Star /> <span>{rating}</span>
        </div>
      </div>
    </div>
  );
};
