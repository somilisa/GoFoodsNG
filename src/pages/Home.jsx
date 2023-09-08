import React from 'react';
import Hero from '../components/Hero';
import bg from '../Assets/home-hero-image.png';
import ImageSlider from '../components/ImageSlider';
import CocktailList from '../components/CocktailList';

const Home = () => {
  return (
    <main>
      <Hero
        imgUrl={bg}
        title='Find your table'
        description="GoFoodsNg helps you find out what's happening in your city. Let's explore!"
        home={true}
      />
      <ImageSlider />
      <CocktailList title="Featured Restaurant" className='section-title underline'/>
    </main>
  );
};

export default Home;
