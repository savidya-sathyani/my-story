'use client';

import { socialMediaLinks } from '@/data/social-media';

const SocialMediaLinks = () => {
  return (
    <div className="social-media">
      {socialMediaLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          className="social-media-logo"
        >
          <ion-icon name={link.name}></ion-icon>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
