import BurgerStack from './BurgerStack'

export default function BurgerPane(props) {
    return (
        <>
            <h2>BurgerPane</h2>
            <button
                onClick={props.handleClearStack}
            >
                Clear All
            </button>
            <button
                onClick={props.handleRemoveOne}
            >
                Clear One
            </button>
            <BurgerStack
                stack={props.stack}
            />
        </>
    )
}