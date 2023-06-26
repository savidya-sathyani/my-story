'use client';

import Image from 'next/image';
import Search from './Search';
import SocialMediaLinks from './SocialMediaLinks';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="header-container">
      <div className="container header">
        <Search />
        <Image
          src={'/assets/icons/logo.jpg'}
          alt="Savidya Sathyani"
          width={400}
          height={100}
        />
        <SocialMediaLinks />
      </div>
      <div className="nav">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
