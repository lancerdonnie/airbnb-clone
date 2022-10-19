import React from 'react';
import Map from 'assets/icons/map.svg';
import List from 'assets/icons/list.svg';

type Props = {
  showMap?: boolean;
};

export const ShowMapButton = ({ showMap }: Props) => {
  return (
    <div className="flex items-center bg-alt-4 text-white py-[14px] px-[19px] rounded-3xl cursor-pointer hover:shadow-6 hover:scale-[1.04] transition-transform duration-[250ms] ease-in">
      <span className="mr-2 text-sm font-semibold">
        Show {showMap ? 'list' : 'map'}
      </span>
      {showMap ? <List /> : <Map />}
    </div>
  );
};
