'use client';

import { NavigationData } from '@/context/NavigationContext';
import Link from 'next/link';
import { useContext, useState } from 'react';

const Navigation = () => {
  const { active, setActive } = useContext(NavigationData);

  const handleClick = (event) => {
    setActive(event.target.id);
  };

  return (
    <nav className="navigation">
      <Link
        id="home"
        href="/"
        className={active === 'home' ? 's-link-active' : ''}
        onClick={(e) => handleClick(e)}
      >
        Home
      </Link>
      <Link
        id="life"
        href="/life"
        className={active === 'life' ? 's-link-active' : ''}
        onClick={(e) => handleClick(e)}
      >
        Life
      </Link>
      <Link
        id="career"
        href="/career"
        className={active === 'career' ? 's-link-active' : ''}
        onClick={(e) => handleClick(e)}
      >
        Career
      </Link>
      <Link
        id="travel"
        href="/travel"
        className={active === 'travel' ? 's-link-active' : ''}
        onClick={(e) => handleClick(e)}
      >
        Travel
      </Link>
    </nav>
  );
};

export default Navigation;
