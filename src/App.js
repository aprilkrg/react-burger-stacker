import "./App.css";
import { useState } from 'react'
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

export default function App() {
	const [stack, setStack] = useState([])
	const [ingredList, setIngredList] = useState([...ingredientsArr])
	const [input, setInput] = useState("")

	const handleAddToStack = (e) => {
		console.log("add to stack", e.target.innerText, e.target.style.backgroundColor)
		const newStackIngredient = {
			name: e.target.innerText,
			color: e.target.style.backgroundColor
		}
		console.log("new stack", newStackIngredient)
		setStack([...stack, newStackIngredient])
	}

	const handleClearStack = () => {
		setStack([])
	}

	const handleRemoveOne = () => {
		// what is stack.length == 0?
		if (!stack.length) {
			return
		}
		// get index of final element in stack
		let index = stack.length - 1
		console.log("remove =>", stack[index])
		const filteredStack = stack.filter((item, idx) => {
			return idx !== index
		})
		setStack([...filteredStack])
	}

	const handleAddOne = (e) => {
		e.preventDefault()
		console.log(ingredList, e.target[0].value)
		const ingredToAdd = {
			name: e.target[0].value,
			color: "#FFFFFF"
		}
		console.log("new =>", ingredToAdd)
		setIngredList([...ingredList, ingredToAdd])
		setInput("")
	}

	const handleChange = (e) => {
		setInput(e.target.value)
	}


	return (
		<>
			<h1>Burger Stacker</h1>
			<IngredientList
				items={ingredList}
				handleAddToStack={handleAddToStack}
				handleAddOne={handleAddOne}
				input={input}
				handleChange={handleChange}
			/>
			<BurgerPane
				stack={stack}
				handleClearStack={handleClearStack}
				handleRemoveOne={handleRemoveOne}
			/>
		</>
	);
}