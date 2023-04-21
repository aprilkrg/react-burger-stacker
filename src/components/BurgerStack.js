import Ingredient from './Ingredient'

export default function BurgerStack(props) {
    const stackToRender = props.stack.map((item, i) => {
        return <Ingredient
            key={"stack-" + i}
            item={item}
        />
    })
    return (
        <>
            {stackToRender.reverse()}
        </>
    )

}