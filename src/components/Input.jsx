import { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
            <>
                <form onSubmit={this.props.handleAddOne}>
                    <label htmlFor='ingredInput'>Add New Ingredient: </label>
                    
                    <input
                        type='text'
                        id='ingredInput'
                        placeholder='add a new ingredient to the list'
                        onChange={this.props.handleChange}
                        value={this.props.input}
                    />
                    <input type="submit" value="Submit" 
                        className="
                            p-1
                            bg-green-300
                            border-4 border-green-400
                        "
                    />
                </form>
            </>
        )
    }
}