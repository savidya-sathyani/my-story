'use client';

import Image from 'next/image';

const Career = () => {
  return (
    <section className="carrier-container container">
      <div className="carrier-bg">
        <div className="timeline-element">
          <div className="left-card">
            <div className="card">
              <h5>Ceylinco Life Insurance</h5>
              <ul>
                <li>- Trainee Software Engineer</li>
              </ul>
              <p>
                I&apos;ve completed my six months training when I was already in
                collage, in one of the leading insurance company in Sri Lanka.
                I&apos;ve had the opportunity to work with ASP.Net web
                development with C#.
              </p>
            </div>
          </div>
          <div className="right-date">
            <div className="icon">
              <Image
                src={'/assets/icons/ceylinco.webp'}
                width={80}
                height={80}
                alt="Ceylinco"
              />
            </div>
            <span className="date">June 2016</span>
          </div>
        </div>
        <div className="timeline-element">
          <div className="left-date">
            <div className="icon">
              <Image
                src={'/assets/icons/pearson.png'}
                width={80}
                height={80}
                alt="Pearson"
              />
            </div>
            <span className="date">September 2017</span>
          </div>
          <div className="right-card">
            <div className="card">
              <h5>Pearson Lanka</h5>
              <ul>
                <li>- Software Engineer Intern</li>
                <li>- Associate Software Engineer</li>
              </ul>
              <p>
                Then after completing my studies, I&apos;ve joined Pearson
                Lanka, one of the leading Educational service providers in the
                world. I have worked in multiple projects with different
                technologies such as AngularJS, Electron and ReactJS in Pearson.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline-element">
          <div className="left-card">
            <div className="card">
              <h5>Wiley Global Technology</h5>
              <ul>
                <li>- Associate Software Engineer</li>
                <li>- Software Engineer</li>
                <li>- Senior Software Engineer</li>
              </ul>
              <p>
                After gained valuable experience in Pearson, I&apos;ve joined
                Wiley Global Technology, another leading competitor in
                world&apos;s education sector. I have gained experience as a
                full stack engineer working with Java Spring-boot and ReactJS.
              </p>
            </div>
          </div>
          <div className="right-date">
            <div className="icon">
              <Image
                src={'/assets/icons/wiley.webp'}
                width={80}
                height={80}
                alt="Wiley"
              />
            </div>
            <span className="date">December 2019</span>
          </div>
        </div>
        <div className="timeline-element">
          <div className="left-date">
            <div className="icon">
              <Image
                src={'/assets/icons/skillfield.png'}
                width={80}
                height={80}
                alt="Pearson"
              />
            </div>
            <span className="date">March 2023</span>
          </div>
          <div className="right-card">
            <div className="card">
              <h5>Skillfield</h5>
              <ul>
                <li>- Software Engineer Consultant</li>
              </ul>
              <p>
                After moving to Australia, I had the opportunity to join
                Skillfield, as a software Engineer consultant and follow my
                passion in frontend development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
