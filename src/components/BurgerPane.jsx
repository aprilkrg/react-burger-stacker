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
                <h2 className="
                    text-xl
                ">
                    Burger Stacking Area
                </h2>
                <button 
                    onClick={this.props.handleRemoveFromStack}
                    className="
                        p-1
                        bg-gray-300
                        border-4 border-grey-400
                ">
                    Clear
                </button>
                {stackToRender.reverse()}
            </>
        )
    }
}

export default BurgerPane