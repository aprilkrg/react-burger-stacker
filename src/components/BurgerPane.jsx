import React, {Component} from 'react'
import Ingredient from './Ingredient'

class BurgerPane extends Component {
    render() {
        const stackToRender = this.props.stack.map((item, i) => {
            return <Ingredient
                item={item}
                i={i}
            />
        })
        return(
            <>
                <h2>Burger Stacking Area</h2>
                <button 
                    onClick={this.props.handleRemoveFromStack}
                >
                    Clear
                </button>
                {stackToRender.reverse()}
            </>
        )
    }
}

export default BurgerPane