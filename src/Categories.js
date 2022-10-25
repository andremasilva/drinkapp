import React from 'react';
import { Link } from 'react-router-dom';
import { BiDrink } from "react-icons/bi";
import './categories.css'

const Categories = () => {
    return (

        <div className='cat'>
            
            <Link to={'./drinks/Scotch'}>
                <BiDrink />
                <h4> Scotch </h4>
            </Link>
            <Link to={'./drinks/Vodka'}>
                <BiDrink />
                <h4> Vodka </h4>
            </Link>
            <Link to={'./drinks/Gin'}>
                <BiDrink />
                <h4> Gin </h4>
            </Link>
            <Link to={'./drinks/Tequila'}>
                <BiDrink />
                <h4> Tequila </h4>
            </Link>
            <Link to={'./drinks/Port'}>
                <BiDrink />
                <h4> Port </h4>
            </Link>
        </div>
    )
}

export default Categories