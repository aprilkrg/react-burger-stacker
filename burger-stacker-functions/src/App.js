import React, {useState, useEffect} from 'react'
import "./App.css";
import IngredientList from './components/IngredientList'
import BurgerPane from './components/BurgerPane'

export default function App() {
  const [ingredient, setIngredients] = useState ({
    ingredients: [
      {name: 'Kaiser Bun', color: 'saddlebrown'},
	    {name: 'Sesame Bun', color: 'sandybrown'},
	    {name: 'Gluten Free Bun', color: 'peru'},
	    {name: 'Lettuce Wrap', color: 'olivedrab'},
	    {name: 'Beef Patty', color: '#3F250B'},
	    {name: 'Soy Patty', color: '#3F250B'},
	    {name: 'Black Bean Patty', color: '#3F250B'},
	    {name: 'Chicken Patty', color: 'burlywood'},
	    {name: 'Lettuce', color: 'lawngreen'},
	    {name: 'Tomato', color: 'tomato'},
	    {name: 'Bacon', color: 'maroon'},
	    {name: 'Onion', color: 'lightyellow'}

    ],
  })
}
  const[pickedIngredients, setPickedIngredients] = useState([])

  const addIngredients = (ingredient) => {
    setPickedIngredients[pickedIngredients]
  }

  const clearBurger = () => {
    setPickedIngredients({ pickedIngredients: [] })
  }


    return (
      <>
        <IngredientList ingredients={ingredients.ingredients} addIngredients={addIngredients} />
        <BurgerPane pickedIngredients={pickedIngredients} clearBurger={clearBurger} />
      </>
    )
  }

