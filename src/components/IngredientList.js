import Ingredient from './Ingredient'

export default function IngredientList(props) {
    const listToRender = props.items.map((item, i) => {
        return <Ingredient
            key={"ingred-" + i}
            item={item}
            handleAddToStack={props.handleAddToStack}
        />
    })
    return (
        <>
            <h2>IngredientList</h2>
            <form
                onSubmit={props.handleAddOne}
            >
                <label
                    htmlFor="ingredInput"
                >
                    Add a new ingredient:
                </label>
                <input
                    type="text"
                    id="ingredInput"
                    placeholder="add a new ingredient to the list"
                    value={props.input}
                    onChange={props.handleChange}
                />
                <input type="submit" value="Submit" />
            </form>

            {listToRender}
        </>
    )

}