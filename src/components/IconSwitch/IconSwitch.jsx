export const IconSwitch = (props) => {
    const { icon, onSwitch } = props;
    return (
        <span onClick = {onSwitch} className="material-icons pointer">{icon}</span>
    )
}
