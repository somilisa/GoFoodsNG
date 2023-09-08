import React from 'react';
import Hero from '../components/Hero';
import bg from '../Assets/groups-hero.png';
import CocktailList from '../components/CocktailList';

const Groups = () => {
  return (
    <main>
      <Hero imgUrl={bg} title='Find your table' home={true} />
      {/* <ImageSlider /> */}
      <CocktailList title='Best Local Restaurant Around You' />
    </main>
  );
};

export default Groups;
