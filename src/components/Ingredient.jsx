import {Component} from 'react'

export default class Ingredient extends Component {
    render() {
        return(
            <div
                onClick={this.props.handleAddToStack}
            >
                {this.props.item.name}
            </div>
        )
    }
}