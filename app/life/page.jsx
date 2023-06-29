'use client';

import { foodGallery } from '@/data/get-images';
import { qna } from '@/data/get-qna';
import Image from 'next/image';
import { Fragment, useRef, useState } from 'react';

const Life = () => {
  const [showId, setShowId] = useState('');
  const sliderRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    sliderRef.current.scrollLeft += scrollOffset;
  };

  return (
    <Fragment>
      <section className="life container">
        <span>From the beginning</span>
        <h1>I&apos;ve had the best life ever</h1>
        <div className="steps">
          <div className="details">
            <span>01</span>
            <h2>Childhood</h2>
            <ul className="dec">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
          <div className="image">
            <Image
              src={'/assets/images/home2.jpg'}
              width={400}
              height={100}
              alt="Image"
            />
          </div>
          <div className="image">
            <Image
              src={'/assets/images/home2.jpg'}
              width={400}
              height={100}
              alt="Image"
            />
          </div>
          <div className="details">
            <span>01</span>
            <h2>Childhood</h2>
            <ul className="dec">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="food">
        <span>Foodies for the Goodies</span>
        <h2>I&apos;m a food lover too</h2>
        <div className="food-gallery">
          <ion-icon
            name="chevron-back"
            onClick={() => handleScroll(-1080)}
          ></ion-icon>
          <div className="image-line" ref={sliderRef}>
            {foodGallery.map((image) => (
              <Image
                key={image.name}
                src={`/assets/images/food/${image.name}`}
                width={500}
                height={500}
                alt={image.des}
              />
            ))}
          </div>
          <ion-icon
            name="chevron-forward"
            onClick={() => handleScroll(1080)}
          ></ion-icon>
        </div>
      </section>
      <section className="qna container">
        <span>Get to know me better</span>
        <h2>Some fun facts about me</h2>
        <div className="q-panel">
          {qna.map((item) => (
            <div key={item.id} className="q-card">
              <div className="question">
                <p>{item.question}</p>
                {showId === item.id ? (
                  <ion-icon
                    id={item.id}
                    name="chevron-up-outline"
                    onClick={() => setShowId('')}
                  ></ion-icon>
                ) : (
                  <ion-icon
                    id={item.id}
                    name="chevron-down-outline"
                    onClick={(e) => setShowId(e.target.id)}
                  ></ion-icon>
                )}
              </div>
              <div
                className={showId === item.id ? 'answer show' : 'answer hide'}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Life;
