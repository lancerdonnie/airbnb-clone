import React from 'react';
import Search from 'assets/icons/search.svg';

type Props = {};

export const SearchButton = (props: Props) => {
  return (
    <div className="bg-[#FF385C] text-white rounded-full p-[10px]">
      <Search />
    </div>
  );
};
