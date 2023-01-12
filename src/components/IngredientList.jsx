import { Component } from 'react'
import Ingredient from './Ingredient'
import Input from './Input'

export default class IngredientList extends Component {
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
                <Input 
                    handleAddOne={this.props.handleAddOne}
                    handleChange={this.props.handleChange}
                    input={this.props.input}
                />
                <h2>Ingredient List</h2>
               {listToRender}
            </>
        )
    }
}