import React, { useState,useContext, useEffect,useCallback } from 'react';
import Hero from '../components/Hero';
import bg from '../Assets/groups-hero.png';
import CocktailList from '../components/CocktailList';


 const url = 'https://restaurants.bsite.net/api/Restaurants/SearchRestaurants?localGovernmentId=639&restaurantName=Zen Restaurant' ;

const Groups = () => {

  return (

    <main>
      <Hero imgUrl={bg} title='Find your table' home={true} />
      {/* <ImageSlider /> */}
      <CocktailList
        title='Best Local Restaurant Around You'
        className='section-title'
      />
    </main>
  );
};

export default Groups;
