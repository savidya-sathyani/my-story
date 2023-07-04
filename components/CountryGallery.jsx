'use client';

import { countries } from '@/data/get-images';

import Image from 'next/image';

const CountryGallery = ({ name, id, description, handleShowHide }) => {
  return (
    <section className="country container">
      <span>{description}</span>
      <h2>{name}</h2>
      <ion-icon
        name="arrow-back-outline"
        onClick={() => handleShowHide(false)}
      ></ion-icon>
      <div className="country-gallery">
        {countries[id].map((image) => (
          <Image
            key={image.name}
            src={`/assets/images/countries/${id}/${image.name}`}
            width={400}
            height={400}
            alt={`${image.des}`}
          />
        ))}
      </div>
    </section>
  );
};

export default CountryGallery;
