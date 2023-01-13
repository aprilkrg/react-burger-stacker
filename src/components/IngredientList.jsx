import { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
    render() {
        const listToRender = this.props.items.map((item, i) => {
           return <Ingredient 
                item={item}
                i={i}
                key={"ingred"+i}
                handleAddToStack={this.props.handleAddToStack}
            />
        })
        return(
            <>
                <h2>Ingredient List</h2>
                {listToRender}
            </>
        )
    }
}