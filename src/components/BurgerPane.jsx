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
                <button
                    onClick={this.props.handleRemoveOne}
                    className="
                        p-1
                        bg-yellow-300
                        border-4 border-yellow-400
                    "
                >
                    Remove One
                </button>

                <button 
                    onClick={this.props.handleRemoveFromStack}
                    className="
                    p-1
                    bg-red-300
                    border-4 border-red-400
                    "
                >
                    Clear
                </button>
                <div
                    className="grid justify-items-center"
                >
                    <BurgerStack
                        stack={this.props.stack}
                        handleRemoveOne={this.props.handleRemoveOne}
                    />                    
                </div>
            </>
        )
    }
}