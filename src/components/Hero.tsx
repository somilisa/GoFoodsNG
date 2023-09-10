import React from 'react';
import SearchForm from './SearchForm';

import { Filterkeys } from '../types';

interface HeroBannerProps {
  imgUrl: string;
  title: string;
  description: string;
  home: Boolean;
  filters: { [T in Filterkeys]: string };
  setFilters: Function;
}

const Hero = ({
  imgUrl,
  title,
  description,
  home,
  filters,
  setFilters,
}: HeroBannerProps) => {
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
          {home && <SearchForm filters={filters} setFilters={setFilters} />}
        </div>
      </div>
    </section>
  );
};

export default Hero;
