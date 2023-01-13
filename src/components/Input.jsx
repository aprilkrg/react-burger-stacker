import { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
            <>
                <form 
                    onSubmit={this.props.handleAddOne}
                >
                    <label htmlFor='ingredInput'>New Ingredient: </label>
                    
                    <input
                        type='text'
                        id='ingredInput'
                        placeholder=' add a new ingredient'
                        onChange={this.props.handleChange}
                        value={this.props.input}
                        />
                    <div
                        className="
                            flex justify-center
                        "
                    >
                        <input type="submit" value="Submit" 
                            className="
                            p-1
                            bg-green-300
                            border-4 border-green-400
                            "
                            />
                    </div>
                </form>
            </>
        )
    }
}