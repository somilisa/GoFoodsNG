import React from 'react';
import Hero from '../components/Hero';
import bg from '../Assets/about-hero-image.png';
import {
  BsChevronRight,
  BsChevronLeft,
} from 'react-icons/bs';
import {FaQuoteLeft,
  FaQuoteRight} from 'react-icons/fa'

const About = () => {
  return (
    <main>
      <div>
        <h2>about page</h2>
      </div>
      <Hero
        imgUrl={bg}
        title='GoFoodsNG'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, 
lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, 
vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim 
lobortis scelerisque fermentum dui faucibus in ornare quam viverra'
      />
      <section className='slider-section'>
        <div class="slider">
          <article>
            <FaQuoteLeft />
            <p></p>
            <p></p>
            <FaQuoteRight />
          </article>
          <button className='prev'>
            <BsChevronLeft />
          </button>
          <button className='next'>
            <BsChevronRight />
          </button>
        </div>
      </section>
    </main>
  );
};

export default About;
