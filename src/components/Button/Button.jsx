import { Btn } from "./Button.styled"

const Button = ({onClick}) => {
    return (
        <Btn onClick={onClick}>Load More</Btn>
    )
}
export default Button