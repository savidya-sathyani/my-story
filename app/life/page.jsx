'use client';

import { foodGallery, me, fam } from '@/data/get-images';
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
          <div className="details left-details">
            <span>01</span>
            <h2>Childhood</h2>
            <p>
              I was born in a cozy little town in Anuradhapura, Sri Lanka. It
              was a place where simplicity thrived and made everything
              beautiful.
            </p>
            <p>
              Right from the start, I was a small but energetic and happy child,
              always enjoying life to the max. Every day was like a colorful
              painting, giving me a chance to dive into the exciting world
              around me and delight in all its endless wonders.
            </p>
          </div>
          <div className="images right-image">
            {me.map((item) => (
              <Image
                key={item.name}
                src={`/assets/images/life/${item.name}`}
                width={300}
                height={300}
                alt={item.des}
              />
            ))}
          </div>
          <div className="images left-image">
            {fam.map((item) => (
              <Image
                key={item.name}
                src={`/assets/images/life/${item.name}`}
                width={300}
                height={300}
                alt={item.des}
              />
            ))}
          </div>
          <div className="details right-details flex flex-col justify-center items-end text-right">
            <span>02</span>
            <h2>Family</h2>
            <p>
              In my family, I have my mom, dad, and three adorable little
              brothers. I feel incredibly fortunate to have such a large and
              wonderful family who is always by my side, supporting and caring
              for me. Their love and presence fill my life with joy and make
              every day truly special.
            </p>
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
