import './Button.css'

const Button = (props) => {

    const classes = 'button__link ' + props.className

    return (
        <a className={classes} href=" ">{props.children}</a>
    )
}


export default Button

