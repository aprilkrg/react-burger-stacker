import {Component} from 'react'
import Ingredient from './Ingredient'
import BurgerStack from './BurgerStack'

export default class BurgerPane extends Component {
    render() {

        return(
            <>
                <h2>Burger Stacking Area</h2>
                <button 
                    onClick={this.props.handleRemoveFromStack}
                >
                    Clear
                </button>
                <BurgerStack
                    stack={this.props.stack}
                />
            </>
        )
    }
}