'use client';

import SocialMediaLinks from './SocialMediaLinks';
import { Fragment } from 'react';
import Navigation from './Navigation';

const Footer = () => {
  return (
    <Fragment>
      <hr className="relative mt-20 mb-10" />
      <footer className="footer container">
        <Navigation />
        <SocialMediaLinks />
        <p>&copy; Savidya Sathyani</p>
      </footer>
    </Fragment>
  );
};

export default Footer;
