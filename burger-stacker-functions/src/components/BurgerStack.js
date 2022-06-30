import React, { useState, useEffect } from 'react'



export default function BurgerStack(props) {
        const ingredients = props.pickedIngredients.map((ingredient, i) => {
            return <li key={`ingredient${i}`} style={{ backgroundColor: ingredient.color }}>{ingredient.name}</li>
        })
        return (
            <>
                <ul>
                    {ingredients}
                </ul>
            </>
        )
    }