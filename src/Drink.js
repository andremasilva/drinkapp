import React from 'react';
import { Link } from 'react-router-dom';
import './drink.css'

const Drink = ({ name, img, id }) => {
    return (
        <div className='card'>
            <Link to={`/details/${id}`}>
                <h1 className='drink-text'>{name}</h1>
                <img className='drink-img' src={img} alt="" />
            </Link>

        </div>
    )
}

export default Drink