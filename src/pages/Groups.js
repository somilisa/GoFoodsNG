import React from 'react';
import Hero from '../components/Hero';
import bg from '../Assets/groups-hero.png';
import ImageSlider from '../components/ImageSlider';
import CocktailList from '../components/CocktailList';

const Groups = () => {
  return (
    <main>
      <Hero imgUrl={bg} title='Find your table' home={true} />
      {/* <ImageSlider /> */}
      <CocktailList />
    </main>
  );
};

export default Groups;
