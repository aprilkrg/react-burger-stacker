import { Component } from 'react'
import BurgerStack from './BurgerStack'

export default class BurgerPane extends Component {
    render() {
        return(
            <>
                <h2>BurgerPane</h2>
                <button
                    onClick={this.props.handleClearStack}
                >
                    Clear All
                </button>
                <button
                    onClick={this.props.handleRemoveOne}
                >
                    Clear One
                </button>
                <BurgerStack 
                    stack={this.props.stack}
                />
            </>
        )
    }
}