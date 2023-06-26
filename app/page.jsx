'use client';

import Image from 'next/image';
import { Fragment } from 'react';
import { gallery, footerGallery } from '@/data/get-images';
import { reviews } from '@/data/get-reviews';

const Home = () => {
  return (
    <Fragment>
      <section className="hero container">
        <div className="hero-picture">
          <picture>
            <Image
              src={'/assets/images/home.PNG'}
              width={600}
              height={100}
              alt="Me & Me"
            />
          </picture>
        </div>
        <div className="hero-text">
          <h1>IT&apos;S NICE TO SEE YOU</h1>
          <p>
            Welcome to Savidya&apos;s life. This blog is a collection of all my
            musings and I&apos;m so glad you&apos;ve stumbled upon this place.
            From life to career, to travel, I know I have something for you.
          </p>
        </div>
      </section>
      <section className="tagline">
        <div class="custom-shape divider-tagline">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <h1>
          POUR A CUP OF YOUR FAV SWEET TEA, SIT DOWN, <br />
          AND STAY FOR A WHILE.
        </h1>
        <p>I PROMISE YOU WON&apos;T REGRET IT.</p>
      </section>
      <section className="myself">
        <div class="custom-shape divider-myself">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="myself-description">
          <h2>A BIT ABOUT MYSELF</h2>
          <h1>HI, I&apos;M SAVIDYA</h1>
          <p>
            I&apos;m an unabashed aficionado of mountains, beaches, and all
            things nature! My heart leaps with joy at the mere thought of
            immersing myself in the awe-inspiring grandeur of towering peaks and
            the soothing embrace of sandy shores.
          </p>
          <br />
          <p>
            Picture this: as the sun gently sets, casting its golden glow, I
            find myself reclining in a cozy nook, book in hand, and a veritable
            feast sprawled out before me. Let the adventure begin!
          </p>
          <button className="shrink-border">CLICK FOR MORE</button>
        </div>
        <div className="myself-picture">
          <Image
            src={'/assets/images/home2.JPG'}
            width={300}
            height={300}
            alt="Me"
          />
        </div>
      </section>
      <section className="catalog container">
        <div className="catalog-image">
          <Image
            src={'/assets/images/cat1.JPG'}
            alt="Life"
            width={400}
            height={100}
          />
        </div>
        <div className="catalog-text bg-orange-100">
          <h1>L I F E</h1>
        </div>
        <div className="catalog-image">
          <Image
            src={'/assets/images/cat2.JPG'}
            alt="Life"
            width={400}
            height={100}
          />
        </div>
        <div className="catalog-text bg-orange-100">
          <h1>C A R E E R</h1>
        </div>
        <div className="catalog-image">
          <Image
            src={'/assets/images/cat3.JPG'}
            alt="Life"
            width={400}
            height={100}
          />
        </div>
        <div className="catalog-text bg-orange-100">
          <h1>T R A V E L</h1>
        </div>
      </section>
      <section className="reviews">
        <div className="testimonial-container">
          <span className="testimonial-subtext">Testimonials</span>
          <h1>Everybody loves me! Here are some proof.</h1>
          <div className="testimonials">
            {reviews.map((review) => (
              <figure key={review.id}>
                <Image
                  src={`/assets/images/reviews/${review.picture}`}
                  alt={`Picture of ${review.name}`}
                  width={50}
                  height={50}
                />
                <blockquote>&ldquo;{review.message}&rdquo;</blockquote>
                <span class="testimonial-name">
                  &mdash; {review.name} &#91;{review.relation}&#93;
                </span>
              </figure>
            ))}
          </div>
        </div>
        <div className="gallery">
          {gallery.map((image) => (
            <figure key={image.name} class="gallery-item">
              <Image
                className="gallery-img"
                src={`/assets/images/gallery/${image.name}`}
                width={300}
                height={300}
                alt={`${image.des}`}
              />
            </figure>
          ))}
        </div>
      </section>
      <section className="last container">
        <div className="last-line">
          <h1>More from my life</h1>
        </div>
        <div className="last-gallery">
          {footerGallery.map((image) => (
            <figure key={image.name} class="gallery-item">
              <Image
                src={`/assets/images/footer/${image.name}`}
                width={400}
                height={400}
                alt={`${image.des}`}
              />
            </figure>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
