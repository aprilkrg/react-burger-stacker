export default function Ingredient(props) {
    return (
        <>
            <p
                onClick={props.handleAddToStack}
                style={{
                    backgroundColor: props.item.color
                }}
            >{props.item.name}</p>
        </>
    )
}