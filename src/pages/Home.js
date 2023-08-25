import React from 'react';
import Hero from '../components/Hero';
import bg from '../Assets/home-hero-image.png';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

const Home = () => {
  return (
    <>
      <div>
        <h2>home page</h2>
      </div>
      <Hero
        imgUrl={bg}
        title="Find your table"
        description="GoFoodsNg helps you find out what's happening in your city. Let's explore!"
      />
    </>
  );
};

export default Home;
