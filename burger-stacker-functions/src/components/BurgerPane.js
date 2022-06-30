import React, { useState, useEffect } from 'react'
import BurgerStack from '../components/BurgerStack'
import ClearBurger from '../components/ClearBurger'

export default function BurgerPane(props) {
        return (
            <>
                <h1>BurgerPane</h1>
                <BurgerStack pickedIngredients={props.pickedIngredients} />
                <ClearBurger clearBurger={props.clearBurger} />
            </>
        )
    }