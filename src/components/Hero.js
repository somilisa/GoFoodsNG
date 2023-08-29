import React from 'react';

interface HeroBannerProps {
  imgUrl: string;
  title: string;
  description: string;
}
const Hero = ({ imgUrl, title, description }: HeroBannerProps) => {
  return (
    <section>
      <div
        className='hero'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${imgUrl})`,
        }}
      >
        <div className='hero-text'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
