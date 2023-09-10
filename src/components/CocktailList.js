import React, { useState } from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';

const CocktailList = ({ title, className, loading, data = [] }) => {
  if (loading) {
    return <Loading />;
  }
  if (data.length < 1) {
    return (
      <h2 className='section-title'>
        {' '}
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <section>
      <div className={className}>
        <p>{title}</p>
      </div>
      <div className='cocktails-center'>
        {data.map((restaurant) => {
          return <Cocktail key={restaurant.id} {...restaurant} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
