import styles from './Button.module.css'

const Button = props => {

    const classes = `${styles.button} ${props.className}`

    return(
        <button onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className={classes}>{props.children}</button>
    )
}

export default Button