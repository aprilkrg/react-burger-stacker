import { Component } from 'react'
import Ingredient from './Ingredient'

export default class BurgerStack extends Component {
    render() {
        const stackToRender = this.props.stack.map((item, i) => {
            return <Ingredient
                item={item}
                i={i}
                key={`ingredient-${i}`}
            />
        })
        return (
            <>
                {stackToRender.reverse()}
            </>
        )
    }
}