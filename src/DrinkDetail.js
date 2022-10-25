import React, { useState } from 'react'
import './drinkDetail.css'

const DrinkDetail = ({ img, name, ctg, ing1, ing2, ing3, ing4, ing5, inst }) => {

    const [activeTab, setActiveTab] = useState("instructions");

    return (
        <section className='detail-container'>
            <div className='detail-left'>
                <h1 className='details-name'> {name === "Long vodka" ? "Vodka longa" : name}</h1>
                <h3 className='details-desc'>{ctg === 'Other/Unknown' ? 'Cocktail' : ctg}</h3>
                <img className='details-image' src={img} alt="" />
            </div>
            <div className='details-right'  >
                <button className={activeTab === "instructions" ? "active" : ""}
                    onClick={() => setActiveTab("instructions")}>
                    Instructions
                </button>
                <button className={activeTab === "ingredients" ? "active" : ""}
                    onClick={() => setActiveTab("ingredients")}>
                    Ingredients
                </button>

                {activeTab === "instructions" && (
                    <div>
                        <h3 className='details-inst'>{inst}</h3>
                    </div>
                )}
                {activeTab === "ingredients" && (
                    <div>
                        <ul className='details-ing'>
                            <li>{ing1}</li>
                            <li>{ing2}</li>
                            <li>{ing3}</li>
                            <li>{ing4 === '' ? 'none' : ing4}</li>
                            <li>{ing5}</li>
                        </ul>
                    </div>
                )}
            </div>
        </section>
    )
}

export default DrinkDetail