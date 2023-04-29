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
		indegredList: [...ingredientsArr],
		input: ""
	}

	handleAddToStack = (e) => {
		console.log("add to stack", e.target.innerText, e.target.style.backgroundColor)
		const newStackIngredient = {
			name: e.target.innerText,
			color: e.target.style.backgroundColor
		}
		console.log("new stack", newStackIngredient)
		this.setState(prevState => {
			const stack = [...prevState.stack, newStackIngredient]
			return {stack}
		})
	}

	handleClearStack = () => {
		this.setState({
			stack: []
		})
	}

	handleRemoveOne = () => {
		// what is stack.length == 0?
		// get index of final element in stack
		let index = this.state.stack.length - 1
		console.log("remove =>", this.state.stack[index])
		this.setState({
			stack: this.state.stack.filter((item, i) => {
				return i !== index
			})
		})
	}

	handleAddOne = (e) => {
		e.preventDefault()
		console.log(this.state.indegredList, e.target[0].value)
		const ingredToAdd = {
			name: e.target[0].value,
			color: "#FFFFFF"
		}
		console.log("new =>", ingredToAdd)
		this.setState({
			indegredList: [...this.state.indegredList, ingredToAdd],
			input: ""
		})
	}

	handleChange = (e) => {
		this.setState({
			input: e.target.value
		})
	}

	render() {
        return (
			<>
				<h1>Burger Stacker</h1>
				<IngredientList 
					items={this.state.indegredList}
					handleAddToStack={this.handleAddToStack}
					handleAddOne={this.handleAddOne}
					input={this.state.input}
					handleChange={this.handleChange}
				/>
				<BurgerPane 
					stack={this.state.stack}
					handleClearStack={this.handleClearStack}
					handleRemoveOne={this.handleRemoveOne}
				/>
			</>
        );
    }
}