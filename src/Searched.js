import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './drink.css'


const Searched = () => {
    const [searchedRecipes, setSearcedhRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        const data = await response.json()
        setSearcedhRecipes(data.drinks)
        console.log(data.drinks[0]);
    }

    useEffect(() => {
        setTimeout(getSearched(params.search), 1000);
    }, [params.search]);

    return (
        <div className='card-container'>
            {searchedRecipes.map(drink => (
                <div className='card' key={drink.idDrink}>
                    <Link to={`/details/${drink.idDrink}`}>
                        <h1 className='drink-text'> {drink.strDrink}</h1>
                        <img className='drink-img' src={drink.strDrinkThumb} alt="" />

                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Searched