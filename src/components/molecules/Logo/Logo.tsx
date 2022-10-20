import React from 'react';
import LogoIcon from 'assets/icons/logo.svg';
import LogoFullIcon from 'assets/icons/logo-full.svg';

export const Logo = () => {
  return (
    <>
      <span className="hidden xl:inline cursor-pointer text-alt-5">
        <LogoFullIcon />
      </span>
      <span className="inline xl:hidden cursor-pointer text-alt-5">
        <LogoIcon />
      </span>
    </>
  );
};
