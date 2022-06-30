import React, {Component} from 'react'
import IngredientList from './components/IngredientList'
import BurgerPane from './components/BurgerPane'

const ingredients = [
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
  {name: 'Cheese', color: 'yellow'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]


export default class App extends Component {
  state = {
    clickedIngredients: []
  }
  
  handleIngredientClick = (e) => {
    console.log(e.target.value)
    let clickedIngredient = {name: e.target.innerText, color: e.target.style.backgroundColor}
    // let newIngredients = this.state.clickedIngredients.concat(clickedIngredient)
    // this.setState( {
    //   clickedIngredients: newIngredients
    // })
    this.setState((previousState) => {
      // console.log(previousState.clickedIngredients)
      // console.log(...previousState.clickedIngredients)
      // console.log(clickedIngredient)
      const burger = [...previousState.clickedIngredients]
      burger.push(clickedIngredient)
      return { clickedIngredients: burger }
    })

    }
  
  handleClearBurger = () => {
    this.setState({clickedIngredients:[]})
  }
        
  
  render() {
    return (
      <div id="app-container">
        <IngredientList ingredients={ingredients}
          handleIngredientClick={this.handleIngredientClick}
        /> 

        <BurgerPane 
          ingredients={this.state.clickedIngredients}
          handleClearBurger={this.handleClearBurger}
        /> 
      </div>
    )
  }
}