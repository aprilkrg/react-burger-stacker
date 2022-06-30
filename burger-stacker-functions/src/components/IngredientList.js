import React, { useState, useEffect } from 'react'
import Ingredient from './Ingredient'

export default function IngredientList(props) {


    //handler
    const handleClick = (ingredient) => {
        props.addIngredients(ingredient)
    }

    render() {
        const ingredients = props.ingredients.map((ingredient, i) => {
            return <li key={`ingredient ${i}`} onClick={() => { handleClick(ingredient) }} style={{ backgroundColor: ingredient.color }}> {ingredient.name} </li>
        })

        return (
            <>
                <h1>IngredientList</h1>
                <ul>
                    <Ingredient ingredients={props.ingredients} />
                </ul>

            </>
        )
    }
}