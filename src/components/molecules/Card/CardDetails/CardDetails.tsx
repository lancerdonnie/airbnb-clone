import React from 'react';
import { CardProps } from '../Card';
import { date } from 'utils';
import Star from 'assets/icons/star.svg';

export const CardDetails = (props: CardProps) => {
  const { name, host, dateFrom, dateTo, price, rating } = props;
  return (
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
  );
};
