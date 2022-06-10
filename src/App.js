import "./App.css";
// TODO import React, and component files

// save given ingredients to array
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

class App extends Component {
	// TODO state class field declaration

	// function to add ingredients to state
	handleAddToStack = (e) => {
		console.log("add to stack")
		// TODO set state
	}
	// function to reset state to empty array
	handleRemoveFromStack = (e) => {
		console.log("remove from stack")
		// TODO set state

	}
	
	render() {
        return (
			<>
				<h1>Burger Stacker</h1>
				{/* Ingredients Component */}
				{/* Burger Stacker Component */}
			</>
        );
    }
}

export default App
