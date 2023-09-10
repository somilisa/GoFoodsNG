import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  name: string;
  image: string;
  glass: string;
  info: string;
  id: number;
}

const Cocktail = (props: Props) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={props.image} alt={props.name} />
      </div>
      <div>
        <h3>{props.name}</h3>
        <h4>{props.glass}</h4>
        <p>{props.info}</p>
        <Link
          to={`/cocktail/${props.id}`}
          className='btn btn-primary btn-details'
        >
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
