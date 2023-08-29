import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  const { restaurants, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (restaurants.length < 1) {
    return (
      <h2 className='section-title'>
        {' '}
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <section>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {restaurants.map((restaurant) => {
          return <Cocktail key={restaurant.id} {...restaurant} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
