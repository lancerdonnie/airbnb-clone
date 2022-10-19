import React from 'react';
import Globe from 'assets/icons/globe.svg';
import Harmburger from 'assets/icons/harmburger.svg';
import Avatar from 'assets/icons/avatar.svg';

export const Nav = () => {
  return (
    <nav className="flex items-center cursor-pointer basis-auto md:basis-[140px] flex-grow md:flex-shrink-0 justify-end">
      <span className="p-3 font-semibold text-sm hover:bg-alt-6 rounded-[22px] transition-colors ease-in duration-[150ms]">
        Become a Host
      </span>
      <span className="p-3 cursor-pointer mr-1 hover:bg-alt-6 rounded-[22px] transition-colors ease-in duration-[150ms]">
        <Globe />
      </span>
      <span className="h-[42px] border-solid border-[1px] border-alt-3 rounded-[21px] flex items-center cursor-pointer p-[5px] pl-3 hover:shadow-5 transition-shadow ease-in duration-200">
        <Harmburger />
        <span className="relative">
          <div className=" h-[30px] w-[30px] ml-3 text-alt-2">
            <Avatar />
          </div>
          <div className="absolute bg-alt-5 h-[10px] w-[10px] rounded-full top-[-3px] right-0 shadow-2"></div>
        </span>
      </span>
    </nav>
  );
};
