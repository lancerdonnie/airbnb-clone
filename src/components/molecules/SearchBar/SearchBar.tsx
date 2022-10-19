import React from 'react';
import { SearchButton } from 'components/atoms';

export const SearchBar = () => {
  return (
    <div className="flex-grow-0 flex-shrink basis-auto rounded-[40px] h-12 shadow-1 border-solid border-[1px] border-alt-3 flex justify-center items-center px-2 text-sm font-semibold cursor-pointer hover:shadow-5 transition-shadow ease-in duration-200">
      <span className="inline-block px-4">Anywhere</span>
      <span className="h-6 w-[1px] bg-alt-3"></span>
      <span className="inline-block px-4">Any week</span>
      <span className="h-6 w-[1px] bg-alt-3"></span>
      <span className="flex items-center">
        <span className="inline-block px-4 text-alt-2 font-normal">
          Add guests
        </span>

        <SearchButton />
      </span>
    </div>
  );
};
