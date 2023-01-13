import { Component } from 'react'

export default class Ingredient extends Component {
    render() {
        return (
            <div
                key={`ingred-${this.props.i}`}
                onClick={this.props.handleAddToStack}
                style={{
                    backgroundColor: this.props.item.color, 
                    width: "200px"
                }}
                // className="
                //     text-center
                // "
            >
                {this.props.item.name}
            </div>
        )
    }
}