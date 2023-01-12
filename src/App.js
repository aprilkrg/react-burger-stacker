import "./App.css";
import React, { Component } from "react";
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
		stack: []
	}

	handleAddToStack = (e) => {
		console.log("add to stack", e.target.innerText, e.target.style.backgroundColor)
		const newStateIngredient = {
			name: e.target.innerText,
			color: e.target.style.backgroundColor
		}
		// === ! OLD BAD WAY, making a shallow copy of state ! === //
		// const stateCopy = this.state.stack
		// stateCopy.push(newStateIngredient)
		// this.setState({
		// 	stack: stateCopy
		// })
		// === ! BETTER WAY, callback function with prevState ! === //
		this.setState(prevState => {
			// found that declared var needs to be named same as state otherwise it won't work
			// adding the new ingredient at the end of the array will cause the ingredients to stack from the bottom up the way we want
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
	render() {
        return (
			<>
				<h1>Burger Stacker</h1>
				<div className="list-div">
					<IngredientList 
						items={ingredientsArr} 
						handleAddToStack={this.handleAddToStack}
					/>
				</div>
				<div className="stack-div">
					<BurgerPane 
						stack={this.state.stack}
						handleRemoveFromStack={this.handleRemoveFromStack}
					/>
				</div>
			</>
        );
    }
}