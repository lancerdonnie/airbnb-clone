import React from 'react';
import Logo from 'assets/icons/logo.svg';
import LogoFull from 'assets/icons/logo-full.svg';
import Globe from 'assets/icons/globe.svg';
import Harmburger from 'assets/icons/harmburger.svg';
import Avatar from 'assets/icons/avatar.svg';
import { SearchButton } from 'components/atoms';

type Props = {};

export const Header = (props: Props) => {
  return (
    <header className="h-20 flex items-center justify-between px-20 shadow-3 flex-shrink-0">
      <div className="basis-[140px] flex-grow flex-shrink-0 text-[#FF385C]">
        <LogoFull />
      </div>
      <div className="flex-grow-0 flex-shrink basis-auto rounded-[40px] h-12 shadow-1 border-solid border-[1px] border-[#DDDDDD] flex justify-center items-center px-2 text-sm font-semibold">
        <span className="inline-block px-4">Anywhere</span>
        <span className="h-6 w-[1px] bg-[#DDDDDD]"></span>
        <span className="inline-block px-4">Any week</span>
        <span className="h-6 w-[1px] bg-[#DDDDDD]"></span>
        <span className="flex items-center">
          <span className="inline-block px-4 text-alt-2 font-normal">
            Add guests
          </span>

          <SearchButton />
        </span>
      </div>
      <nav className="flex items-center cursor-pointer basis-[140px] flex-grow flex-shrink-0 justify-end">
        <span className="p-3 font-semibold text-sm">Become a Host</span>
        <span className="p-3 cursor-pointer">
          <Globe />
        </span>
        <span className="h-[42px] border-solid border-[1px] border-[#DDDDDD] rounded-[21px] flex items-center cursor-pointer p-[5px] pl-3">
          <Harmburger />
          <span className="relative">
            <div className=" h-[30px] w-[30px] ml-3 text-[#717171]">
              <Avatar />
            </div>
            <div className="absolute bg-[#FF385C] h-[10px] w-[10px] rounded-full top-[-3px] right-0 shadow-2"></div>
          </span>
        </span>
      </nav>
    </header>
  );
};
