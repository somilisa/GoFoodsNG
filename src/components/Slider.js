import React, { useState, useEffect } from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { data } from '../data.ts';

type Props = {};

const Slider = (props: Props) => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1);
  //   }, 3000);
  //   return () => clearInterval(slider);
  // }, [index]);

  return (
    <section className='slider-section'>
      <div
        className='slider
      '
      >
        {people.map((person, personIndex) => {
          const { id, quote, name } = person;
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article className={position} key={id}>
              <div className='quote'>
                <FaQuoteLeft className='quote-icon' />
                <p className='slider-quote'>
                  {' '}
                
                  {quote}
                </p>
                <FaQuoteRight className='quote-icon' />
              </div>
              <hr></hr>
              <p className='slider-title'>{name}</p>
            </article>
          );
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <BsChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <BsChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Slider;
