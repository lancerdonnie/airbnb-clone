import React from 'react';
import LogoIcon from 'assets/icons/logo.svg';
import LogoFullIcon from 'assets/icons/logo-full.svg';

export const Logo = () => {
  return (
    <>
      <span className="hidden xl:inline">
        <LogoFullIcon />
      </span>
      <span className="inline xl:hidden">
        <LogoIcon />
      </span>
    </>
  );
};
