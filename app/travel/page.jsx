'use client';

import Map from '@/components/Map';
import {
  australia,
  bali,
  sriLanka,
  thailand,
  vietnam,
} from '@/data/get-images';
import Image from 'next/image';
import { Fragment, useRef } from 'react';

const Travel = () => {
  const sriLankaRef = useRef(null);
  const thailandRef = useRef(null);
  const baliRef = useRef(null);
  const vietnamRef = useRef(null);
  const australiaRef = useRef(null);

  const handleCountryScroll = (event) => {
    const country = event.target.id;
    switch (country) {
      case 'srilanka':
        return sriLankaRef.current.scrollIntoView();
      case 'thailand':
        return thailandRef.current.scrollIntoView();
      case 'bali':
        return baliRef.current.scrollIntoView();
      case 'vietnam':
        return vietnamRef.current.scrollIntoView();
      case 'australia':
        return australiaRef.current.scrollIntoView();
      default:
        console.log('Incorrect Link');
    }
  };

  return (
    <Fragment>
      <section className="travel">
        <span>Places I&apos;ve visited</span>
        <h1 className="container">Always say yes to new adventures</h1>
        <div className="map">
          <div className="map-container">
            <Map handleCountryClick={handleCountryScroll} />
          </div>
          <div className="detail-container">
            <ul>
              <li id="srilanka" onClick={(e) => handleCountryScroll(e)}>
                Sri Lanka
              </li>
              <li id="thailand" onClick={(e) => handleCountryScroll(e)}>
                Thailand
              </li>
              <li id="bali" onClick={(e) => handleCountryScroll(e)}>
                Bali, Indonesia
              </li>
              <li id="vietnam" onClick={(e) => handleCountryScroll(e)}>
                Vietnam
              </li>
              <li id="australia" onClick={(e) => handleCountryScroll(e)}>
                Australia
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section ref={sriLankaRef} className="country container">
        <span>Pearl of the Indian Ocean</span>
        <h2>Sri Lanka</h2>
        <div className="country-gallery">
          {sriLanka.map((image) => (
            <figure key={image.name} className="item-card">
              <Image
                src={`/assets/images/countries/sri-lanka/${image.name}`}
                width={400}
                height={400}
                alt={`${image.des}`}
              />
              <p className="photo-desc">{image.description}</p>
            </figure>
          ))}
        </div>
      </section>
      <section ref={thailandRef} className="country container">
        <span>a country of mountains, hills, plains and a long coastline</span>
        <h2>Thailand</h2>
        <div className="country-gallery">
          {thailand.map((image) => (
            <figure key={image.name} className="item-card">
              <Image
                src={`/assets/images/countries/thailand/${image.name}`}
                width={400}
                height={400}
                alt={`${image.des}`}
              />
              <p className="photo-desc">{image.description}</p>
            </figure>
          ))}
        </div>
      </section>
      <section ref={baliRef} className="country container">
        <span>truly is a magical place</span>
        <h2>Bali, Indonesia</h2>
        <div className="country-gallery">
          {bali.map((image) => (
            <figure key={image.name} className="item-card">
              <Image
                src={`/assets/images/countries/bali/${image.name}`}
                width={400}
                height={400}
                alt={`${image.des}`}
              />
              <p className="photo-desc">{image.description}</p>
            </figure>
          ))}
        </div>
      </section>
      <section ref={vietnamRef} className="country container">
        <span>A country with too much history</span>
        <h2>Vietnam</h2>
        <div className="country-gallery">
          {vietnam.map((image) => (
            <figure key={image.name} className="item-card">
              <Image
                src={`/assets/images/countries/vietnam/${image.name}`}
                width={400}
                height={400}
                alt={`${image.des}`}
              />
              <p className="photo-desc">{image.description}</p>
            </figure>
          ))}
        </div>
      </section>
      <section ref={australiaRef} className="country container">
        <span>A place I would call home away from home</span>
        <h2>Australia</h2>
        <div className="country-gallery">
          {australia.map((image) => (
            <figure key={image.name} className="item-card">
              <Image
                src={`/assets/images/countries/australia/${image.name}`}
                width={400}
                height={400}
                alt={`${image.des}`}
              />
              <p className="photo-desc">{image.description}</p>
            </figure>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Travel;
