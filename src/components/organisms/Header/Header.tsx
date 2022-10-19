import React from 'react';
import Logo from 'assets/icons/logo.svg';
import LogoFull from 'assets/icons/logo-full.svg';
import Globe from 'assets/icons/globe.svg';
import Harmburger from 'assets/icons/harmburger.svg';
import Avatar from 'assets/icons/avatar.svg';
import { SearchButton } from 'components/atoms';

export const Header = () => {
  return (
    <header className="h-20 flex items-center justify-between px-20 shadow-3 flex-shrink-0">
      <div className="basis-[140px] flex-grow flex-shrink-0 text-alt-5 cursor-pointer">
        <LogoFull />
      </div>
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
      <nav className="flex items-center cursor-pointer basis-[140px] flex-grow flex-shrink-0 justify-end">
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
    </header>
  );
};
