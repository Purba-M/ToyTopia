import React from 'react';
import { Link } from 'react-router';

const ToyDeatilsCard = ({toys}) => {
    return (
        <div className='space-y-6'>
            <img className='w-full h-[450px] object-cover' src={toys.thumbnail}></img>
           <h2>{toys.description}</h2>
           <Link className='btn' to={`/home`}>Back to the cards
           </Link>
        </div>
    );
};

export default ToyDeatilsCard;