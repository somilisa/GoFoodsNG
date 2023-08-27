import React from 'react';

interface HeroBannerProps{
  imgUrl: string;
  title: string;
  description: string; 
}
const Hero = ({imgUrl, title,description}:HeroBannerProps) => {
  return (
    <section>
      <div className='hero'>
        {/* <div className='hero-banner'>
          <img src={imgUrl} alt='hero-banner'/>
        </div> */}
        <div className="hero-text">
          <h3>{title}</h3>
          <p>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
