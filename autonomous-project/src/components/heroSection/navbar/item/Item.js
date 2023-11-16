import styles from './Item.module.css'

const Item = props => {

    // const classes = `${styles.item} ${props.className}`

    return (
        <div className={styles.item}>
            <div className={styles.item__icon}>{props.data.ico}</div>
            <div className={styles.item__text}>
                <h1 className={styles.text__title}>{props.data.title}</h1>
                <p className={styles.text__info}>{props.data.text}</p>
            </div>
        </div>
    )
}

export default Item