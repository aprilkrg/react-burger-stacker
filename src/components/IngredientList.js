import { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
    render() {
        const listToRender = this.props.items.map((item, i) => {
            return <Ingredient 
                key={"ingred-" + i}
                item={item}
                handleAddToStack={this.props.handleAddToStack}
            />
        })
        return(
            <>
                <h2>IngredientList</h2>
                <form
                    onSubmit={this.props.handleAddOne}
                >
                    <label
                        htmlFor="ingredInput"
                    >
                        Add a new ingredient:
                    </label>
                    <input 
                        type="text"
                        id="ingredInput"
                        placeholder="add a new ingredient to the list"
                        value={this.props.input}
                        onChange={this.props.handleChange}
                    />
                    <input type="submit" value="Submit"/>
                </form>

                {listToRender}
            </>
        )
    }
}