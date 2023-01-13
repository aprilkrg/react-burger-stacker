import "./App.css";
import { Component } from "react";
import IngredientList from "./components/IngredientList";
import BurgerPane from "./components/BurgerPane";

const ingredientsArr = [
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
];

export default class App extends Component {
	state = {
		stack: [],
		input: "",
		ingredList: [...ingredientsArr]
	}

	handleAddToStack = (e) => {
		console.log("add to stack", e.target.innerText, e.target.style.backgroundColor)
		const newStateIngredient = {
			name: e.target.innerText,
			color: e.target.style.backgroundColor
		}
		this.setState(prevState => {
			const stack = [...prevState.stack, newStateIngredient]
			return {stack}
		})
	}

	handleRemoveFromStack = (e) => {
		console.log("remove from stack", this.state.stack)
		this.setState({
			stack: []
		})
	}

    handleRemoveOne = (e) => {
		if(!this.state.stack.length) {
			return
		}
		let start = this.state.stack.length - 1
		console.log("remove one", this.state.stack[start])
		this.setState({
			stack: this.state.stack.filter((item, idx) => {
				return idx !== start
			})
		})
    }

	handleAddOne = (e) => {
		e.preventDefault()
		console.log(this.state.ingredList, e.target[0].value)
		const ingredToAdd = {
			name: e.target[0].value,
			color: "#FFFFFF"
		}
		this.setState({
			input: "",
			ingredList: [...this.state.ingredList, ingredToAdd]
		})
	}

	handleChange = e => {
        console.log('handling input change...')
        this.setState({
            input: e.target.value
        })
    }

	render() {
        return (
			<>
				<h1>Burger Stacker</h1>
				<div className="container-div">
					<div className="list-div">
						<IngredientList 
							items={this.state.ingredList} 
							input={this.state.input}
							handleAddToStack={this.handleAddToStack}
							handleAddOne={this.handleAddOne}
							handleChange={this.handleChange}
						/>
					</div>
					<div className="stack-div">
						<BurgerPane 
							stack={this.state.stack}
							handleRemoveFromStack={this.handleRemoveFromStack}
							handleRemoveOne={this.handleRemoveOne}
						/>
					</div>
				</div>
			</>
        );
    }
}