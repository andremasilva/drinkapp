import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './home.css'

const Home = () => {
    const [randonDrink, setrandonDrink] = useState([]);

    const getRandonDrink = async () => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        const data = await response.json()
        setTimeout(() => {
            setrandonDrink(data.drinks)
        }, 1000);
        console.log(data.drinks);
    }

    useEffect(() => {
        getRandonDrink()
    }, []);

    return (
        <div className='card-container-home'>
            {randonDrink.map(random => (
                <div className='card-home' key={random.idDrink}>
                    <h1 className='title-home'>Random Coktail</h1>
                    <Link to={`/details/${random.idDrink}`}>
                        <h1 className='drink-text-home'> {random.strDrink}</h1>
                        <img className='drink-img-home' src={random.strDrinkThumb} alt="" />
                    </Link>
                </div>))}
        </div>
    )
}

export default Home