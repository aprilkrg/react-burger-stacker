import React, {Component} from 'react'
import Ingredient from './Ingredient'


export default class BurgerPane extends Component {
    render() {
        // this.props.ingredients = [] our ingredients array 
        const burgerIngredients = this.props.ingredients.map((ingredient, i) => {
            return (
                <div
                key={`Ingredient-${i}`}
                className="ingredient-container"
                >
                <Ingredient 
                    
                    ingredient={ingredient}
                /> 
            </div>
            )
        })
        return (
            <div className="burger-pane">
                <h1>Burger Pane</h1>
               <div className="burger-ingredients">{burgerIngredients}</div>
               <button
               onClick={this.props.handleClearBurger}
               >
                   Clear Burger
                </button>
    
            </div>
        )
    }
} 