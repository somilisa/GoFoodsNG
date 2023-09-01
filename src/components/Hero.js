import React from 'react';
import SearchForm from '../components/SearchForm';


interface HeroBannerProps {
  imgUrl: string;
  title: string;
  description: string;
  home:Boolean;
}
const Hero = ({ imgUrl, title, description, home }: HeroBannerProps) => {
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
          {home && <SearchForm />}
        </div>
      </div>
    </section>
  );
};

export default Hero;
