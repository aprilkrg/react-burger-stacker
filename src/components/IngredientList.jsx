import React, {Component} from 'react'
import Ingredient from './Ingredient'


export default class IngredientList extends Component {

    render() {
        // this.props.ingredients = [] our ingredients array 
        const ingredients = this.props.ingredients.map((ingredient, i) => {
            return (
            <div
                key={`Ingredient-${i}`}
                className="ingredient-container"
                onClick={this.props.handleIngredientClick}
                >
                <Ingredient 
                    
                    ingredient={ingredient}
                    handleIngredientClick={this.props.handleIngredientClick}
                /> 
            </div>
            )
        })
        return (
            <div className="ingredient-list">
                <h1>Ingredient List</h1>
               {ingredients}
    
            </div>
        )
    }
} 