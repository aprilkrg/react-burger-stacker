import {Component} from 'react'
import BurgerStack from './BurgerStack'

export default class BurgerPane extends Component {
    render() {
        return(
            <>
                <h2>Burger Stacking Area</h2>
                <button
                    onClick={this.props.handleRemoveOne}
                >
                    Remove One
                </button>

                <BurgerStack
                    stack={this.props.stack}
                />
                
                <button 
                    onClick={this.props.handleRemoveFromStack}
                >
                    Clear
                </button>
            </>
        )
    }
}