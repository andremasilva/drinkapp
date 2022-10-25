import React, { useEffect, useState } from 'react';
import './drink.css'
import Drink from './Drink';
import { useParams } from "react-router-dom";


const Dinks = () => {
    const [drinks, setdrinks] = useState([]);
    let params = useParams();

    const getDrinks = async (name) => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        const data = await response.json()
        setdrinks(data.drinks)
        console.log(data.drinks[0]);
    }

    useEffect(() => {
        getDrinks(params.type);
    }, [params.type]);

    return (
        <div className='card-container'>
            {drinks.map(drink => (
                <Drink
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    img={drink.strDrinkThumb} />
            ))}
        </div>
    )
}

export default Dinks