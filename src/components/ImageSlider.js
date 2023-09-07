import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Link} from "react-router-dom";

import { cards } from '../data';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const ImageSlider = () => {
  return (
    <section className='group-cards'>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass='custom-dot-list-style'
      >
        {cards.map(({ imgUrl, id, text }) => {
          return (
            <Link to='/groups'>
              <div
                className='group-card'
                key={id}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${imgUrl})`,
                }}
              >
                <p>{text}</p>
              </div>
            </Link>
          );
        })}
      </Carousel>
    </section>
  );
};

export default ImageSlider;
