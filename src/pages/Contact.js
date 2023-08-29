import React from 'react';
import Hero from '../components/Hero';
import bg from '../Assets/contact-hero-image.png';
import ContactCards from '../components/ContactCards';

const Contact = () => {
  return (
    <main>
      {/* <div>
        <h2>Contact</h2>
      </div> */}
      <Hero
        imgUrl={bg}
        title='Get In Touch!'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing, amet luctus venenatis.'
      />
      <ContactCards />
    </main>
  );
};

export default Contact;
