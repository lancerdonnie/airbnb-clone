import React from 'react';
import FilterIcon from 'assets/icons/filter.svg';

export const FilterButton = () => {
  return (
    <div className="flex items-center h-12 border-solid border-[1px] border-alt-3 rounded-xl px-4 ml-6 text-xs font-semibold text-alt-4 cursor-pointer">
      <FilterIcon />
      <span className="ml-1">Filters</span>
    </div>
  );
};
