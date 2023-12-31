'use client';

import Image from 'next/image';
import { Fragment, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { gallery, footerGallery } from '@/data/get-images';
import { reviews } from '@/data/get-reviews';
import { NavigationData } from '@/context/NavigationContext';

const Home = () => {
  const router = useRouter();
  const { setActive } = useContext(NavigationData);

  const handleClick = (e) => {
    const id = e.target.id;
    router.push(`/${id}`);
  };

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
        <div className="custom-shape divider-tagline">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
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
        <div className="custom-shape divider-myself">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="myself-description">
          <h2>A BIT ABOUT MYSELF</h2>
          <h1>HI, I&apos;M SAVIDYA</h1>
          <p>
            I absolutely adore mountains, beaches, and everything nature has to
            offer! The very idea of immersing myself in the breathtaking
            splendor of towering peaks and the serene comfort of sandy shores
            fills my heart with pure bliss.
          </p>
          <br />
          <p>
            Now, imagine this enchanting scene: as the sun gracefully sets,
            casting its golden rays, I find myself nestled in a snug corner,
            holding a captivating book, with a delightful feast spread out
            before me. It&apos;s the perfect beginning for a thrilling
            adventure.
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
        <div
          id="life"
          className="catalog-text bg-orange-100"
          onClick={(e) => handleClick(e)}
        >
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
        <div
          id="career"
          className="catalog-text bg-orange-100"
          onClick={(e) => handleClick(e)}
        >
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
        <div
          id="travel"
          className="catalog-text bg-orange-100"
          onClick={(e) => handleClick(e)}
        >
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
                <span className="testimonial-name">
                  &mdash; {review.name} &#91;{review.relation}&#93;
                </span>
              </figure>
            ))}
          </div>
        </div>
        <div className="gallery">
          {gallery.map((image) => (
            <figure key={image.name} className="gallery-item">
              <img
                className="gallery-img"
                src={`/assets/images/gallery/${image.name}`}
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
            <figure key={image.name} className="item-card">
              <Image
                src={`/assets/images/footer/${image.name}`}
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

export default Home;
