import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosChatbubbles } from 'react-icons/io';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';
const ContactCards = () => {
  return (
    <section className='contact-cards'>
      <div className='contact-card'>
        <p>
          <BiPhoneCall className='contact-icons'/>
        </p>
        <p>Talk to Us</p>
        <p>+234 (0) 802 233 4455</p>
      </div>
      <div className='contact-card'>
        <p>
          <AiOutlineMail className='contact-icons'/>
        </p>
        <p>Send a mail</p>
        <p>hello@gofoodsng.ng</p>
      </div>
      <div className='contact-card'>
        <p>
          <IoIosChatbubbles className='contact-icons'/>
        </p>
        <p>Let’s Link Up</p>
        <div>
          {' '}
          <FaInstagram className='icons'/> <FaFacebookF className='icons'/>{' '}
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
