'use client';

import Image from 'next/image';
import Search from './Search';
import SocialMediaLinks from './SocialMediaLinks';

const Header = () => {
  return (
    <header className="container header">
      <Search />
      <Image
        src={'/assets/icons/logo.jpg'}
        alt="Savidya Sathyani"
        width={400}
        height={100}
      />
      <SocialMediaLinks />
    </header>
  );
};

export default Header;
