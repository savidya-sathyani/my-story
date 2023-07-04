'use client';

import CountryGallery from '@/components/CountryGallery';
import Map from '@/components/Map';

import { Fragment, useRef, useState } from 'react';

const initialCountryState = {
  name: '',
  id: '',
  description: '',
  gallery: null,
  isActive: false,
};

const Travel = () => {
  const [activeCountry, setActiveCountry] = useState(initialCountryState);
  const [show, setShow] = useState(false);

  const countryRef = useRef(null);

  const handleCountryClick = (event, country, description, gallery) => {
    setActiveCountry({
      name: country,
      id: event.target.id,
      description,
      gallery,
    });
    setShow(true);
  };

  return (
    <Fragment>
      {!show && (
        <section
          className={activeCountry === '' ? 'travel show' : 'travel hide'}
        >
          <span>Places I&apos;ve visited</span>
          <h1 className="container">Always say yes to new adventures</h1>
          <div className="map">
            <div className="map-container">
              <Map handleCountryClick={handleCountryClick} />
            </div>
            <div className="detail-container">
              <ul>
                <li
                  id="srilanka"
                  onClick={(e) =>
                    handleCountryClick(
                      e,
                      'Sri Lanka',
                      'pearl of the Indian Ocean'
                    )
                  }
                >
                  Sri Lanka
                </li>
                <li
                  id="thailand"
                  onClick={(e) =>
                    handleCountryClick(
                      e,
                      'Thailand',
                      'a country of mountains, hills, plains and a long coastline'
                    )
                  }
                >
                  Thailand
                </li>
                <li
                  id="bali"
                  onClick={(e) =>
                    handleCountryClick(
                      e,
                      'Bali, Indonesia',
                      'truly is a magical place'
                    )
                  }
                >
                  Bali, Indonesia
                </li>
                <li
                  id="vietnam"
                  onClick={(e) =>
                    handleCountryClick(
                      e,
                      'Vietnam',
                      'A country with too much history'
                    )
                  }
                >
                  Vietnam
                </li>
                <li
                  id="australia"
                  onClick={(e) =>
                    handleCountryClick(
                      e,
                      'Australia',
                      'A place I would call home away from home'
                    )
                  }
                >
                  Australia
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {show && (
        <CountryGallery
          ref={countryRef}
          {...activeCountry}
          handleShowHide={setShow}
        />
      )}
    </Fragment>
  );
};

export default Travel;
