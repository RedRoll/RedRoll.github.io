import styles from './Card.module.css'

import Button from '../../UI/button/Button'
import LineVector from '../../../graphic/svg/cardSection/LineVector'

const Card = props => {
    return (
        <div className={styles.card}>

            <img className={styles.card__img} src={props.data.img} alt={props.data.img} />

            <h1 className={styles.card__title}>{props.data.title}</h1>

            <LineVector className={styles.card__vector} />

            <p className={styles.card__description}>
                Vitae sapien pellentesque habitant morbi
                nunc. Viverra aliquet  porttitor rhoncus
                libero justo laoreet sit amet vitae.
            </p>

            <Button className={styles.card__button} >Try it now</Button>
        </div>
    )
}

export default Card