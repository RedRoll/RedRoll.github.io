import styles from './Wrapper.module.css'

const Wrapper = props => {

    const classes = `${styles.container} ${props.className}`

    return(
        <div className={styles['main-wrapper']}>
            <div className={classes}>{props.children}</div>
        </div>
    )
}

export default Wrapper