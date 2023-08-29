import React from 'react';
import Hero from '../components/Hero';
import bg from '../Assets/home-hero-image.png';
import { cards } from '../data';
import CocktailList from '../components/CocktailList';

const Home = () => {
  return (
    <main>
      <div>
        <h2>home page</h2>
      </div>
      <Hero
        imgUrl={bg}
        title='Find your table'
        description="GoFoodsNg helps you find out what's happening in your city. Let's explore!"
        home={true}
      />
      <section className='group-cards'>
        {cards.map(({ imgUrl, id }) => (
          <div
            className='group-card'
            key={id}
            style={{
              backgroundImage: ` url(${imgUrl})`,
            }}
          ></div>
        ))}
      </section>
      <CocktailList />
    </main>
  );
};

export default Home;
