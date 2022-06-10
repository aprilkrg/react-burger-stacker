import React, { Component } from 'react'
import Ingredient from './Ingredient'

class BurgerPane extends Component {
    render() {
        const stackToRender = this.props.stack.map((item, i) => {
            return <Ingredient
                item={item}
                i={i}
                key={`stack-${i}`}
            />
        })
        return (
            <div
                className="
                    cols-start-2
                "
            >
                <h2
                    className="
                        text-xl
                        row-start-2
                    "
                >Burger Pane</h2>
                <button
                    onClick={this.props.handleRemoveFromStack}
                    className="
                        bg-gray-400
                        border-gray-600
                        p-2
                    "
                >
                    Clear
                </button>
                {stackToRender.reverse()}
            </div>
        )
    }
}

export default BurgerPane