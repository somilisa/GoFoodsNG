// @ts-nocheck

import React, { useState } from 'react';
import Hero from '../components/Hero';
import bg from '../Assets/home-hero-image.png';
import ImageSlider from '../components/ImageSlider';
import CocktailList from '../components/CocktailList';
import { useGlobalContext } from '../context';

import { Filterkeys } from '../types';

const Home = () => {
  const { restaurants, loading, searchRestaurant, searchState } =
    useGlobalContext();

  const [filters, setFilters] = useState<{ [T in Filterkeys]: string }>({
    name: '',
    state: '',
    lga: '',
  });

  const handleFilter = () => {
    const filteredData = restaurants.filter((item) => {
      const matchesName = item.name
        .toLowerCase()
        .includes(searchRestaurant.toLowerCase());

      const matchesState = item.name
        .toLowerCase()
        .includes(searchState.toLowerCase());

      return matchesName && matchesState;
    });
    return filteredData;
  };

  return (
    <main>
      <Hero
        imgUrl={bg}
        title='Find your table'
        description="GoFoodsNg helps you find out what's happening in your city. Let's explore!"
        home={true}
        filters={filters}
        setFilters={setFilters}
      />
      <ImageSlider />
      <CocktailList
        title='Featured Restaurant'
        className='section-title underline'
        loading={loading}
        data={() => handleFilter()}
      />
    </main>
  );
};

export default Home;
