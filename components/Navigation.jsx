'use client';

import { NavigationData } from '@/context/NavigationContext';
import Link from 'next/link';
import { useContext } from 'react';

const Navigation = () => {
  const { active } = useContext(NavigationData);

  return (
    <nav className="navigation">
      <Link
        id="home"
        href="/"
        className={active === 'home' ? 's-link-active' : ''}
      >
        Home
      </Link>
      <Link
        id="life"
        href="/life"
        className={active === 'life' ? 's-link-active' : ''}
      >
        Life
      </Link>
      <Link
        id="career"
        href="/career"
        className={active === 'career' ? 's-link-active' : ''}
      >
        Career
      </Link>
      <Link
        id="travel"
        href="/travel"
        className={active === 'travel' ? 's-link-active' : ''}
      >
        Travel
      </Link>
    </nav>
  );
};

export default Navigation;
