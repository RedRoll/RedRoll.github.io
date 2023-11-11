import styles from './CardBall.module.css'

import SmallArrow from '../../../graphic/svg/cardBall/SmallArrow'

const CardBall = props => {

    const classes = `${props.className} ${styles['card-ball']}`

    return(
        <div className={classes}>
            <div className={styles.ball__bigBall}>
                <div className={styles.bigBall__content}>
                    <div className={styles.content__number}>{props.data.number}</div>
                </div>
            </div>
            <div className={styles.ball__text}>
                <SmallArrow />
                <h1 className={styles.text__title}>{props.data.title}<br/><span>{props.data.subTitle}</span></h1>
            </div>
        </div>
    )
}

export default CardBall