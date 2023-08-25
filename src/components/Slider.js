import React,{useState,useEffect} from 'react'
import { BsChevronRight,BsChevronLeft,FaQuoteLeft,FaQuoteRight } from "react-icons";

type Props = {}

const Slider = (props: Props) => {
  const [people,setPeople] = useState(data)
  const [index,setIndex] =useState(0);
  return (
    <section className='slider'>
      {people.map(person,personIndex)=>{
        const{id,quote,name}= person;
        return{
          <article key={id}>
          <FaQuoteLeft/>
            <p>{quote}</p>
            <p>{name}</p>
          <FaQuoteRight/>
          </article>
        }
      }}
      <button className='prev'><BsChevronLeft/></button>
      <button className='next'><BsChevronRight/></button>
    </section>
  )
}

export default Slider