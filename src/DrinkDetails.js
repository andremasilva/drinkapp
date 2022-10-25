import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import DrinkDetail from "./DrinkDetail";

const DrinkDetails = () => {
  const [details, setdetails] = useState([]);
  let params = useParams();

  const getDetailsDrink = async () => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`,
    );
    const data = await response.json();
    setdetails(data.drinks);
    console.log(data.drinks);
  };

  useEffect(() => {
    getDetailsDrink();
  }, []);

  return (
    <div>
      {details.map((detail) => (
        <DrinkDetail
          key={detail.idDrink}
          name={detail.strDrink}
          ctg={detail.strCategory}
          img={detail.strDrinkThumb}
          ing1={detail.strIngredient1}
          ing2={detail.strIngredient2}
          ing3={detail.strIngredient3}
          ing4={detail.strIngredient4}
          ing5={detail.strIngredient5}
          inst={detail.strInstructions} />
      ))
      }
    </div >
  );
};

export default DrinkDetails;
