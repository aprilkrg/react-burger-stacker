import React, {Component} from 'react'
import Ingredient from './Ingredient'

class IngredientList extends Component {
    render() {
        const listToRender = this.props.items.map((item, i) => {
            return <Ingredient 
                item={item}
                i={i}
                handleAddToStack={this.props.handleAddToStack}
            />
        })
        return(
            <>
                <h2 className="
                    text-xl
                ">
                    Ingredient List
                </h2>
               {listToRender}
            </>
        )
    }
}

export default IngredientList