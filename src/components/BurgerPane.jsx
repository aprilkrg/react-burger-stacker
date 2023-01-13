import {Component} from 'react'
import BurgerStack from './BurgerStack'

export default class BurgerPane extends Component {
    render() {
        return(
            <>
                <h2>Burger Stacking Area</h2>
                <div className="burger-stack">
                    <button
                        onClick={this.props.handleRemoveOne}
                    >
                        Remove One
                    </button>
                    
                    <button 
                        onClick={this.props.handleRemoveFromStack}
                    >
                        Clear
                    </button>
                </div>
                <BurgerStack
                    stack={this.props.stack}
                    handleRemoveOne={this.props.handleRemoveOne}
                />
            </>
        )
    }
}