import React from 'react';

import { Logo, SearchBar } from 'components/molecules';
import { Nav } from 'components/organisms';

export const Header = () => {
  return (
    <header className="h-20 flex items-center justify-between px-10 md:px-20 shadow-3 flex-shrink-0">
      <div className="basis-auto flex-grow-0 md:basis-[140px] md:flex-grow md:flex-shrink-0 text-alt-5 cursor-pointer">
        <Logo />
      </div>
      <SearchBar />
      <Nav />
    </header>
  );
};
