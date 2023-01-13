import {Component} from 'react'
import BurgerStack from './BurgerStack'

export default class BurgerPane extends Component {
    render() {
        return(
            <>
                <h2 className="
                    text-xl
                ">
                    Burger Stacking Area
                </h2>
                <h2>Burger Stacking Area</h2>
                <button
                    onClick={this.props.handleRemoveOne}
                >
                    Remove One
                </button>

                <BurgerStack
                    stack={this.props.stack}
                    handleRemoveOne={this.props.handleRemoveOne}
                />
                
                <button 
                    onClick={this.props.handleRemoveFromStack}
                    className="
                        p-1
                        bg-gray-300
                        border-4 border-grey-400
                ">
                    Clear
                </button>
            </>
        )
    }
}