import styles from './CardBall.module.css'

import SmallArrow from '../../../graphic/svg/cardBall/SmallArrow'

const CardBall = props => {


    return(
        <div className={styles['card-ball']}>
            <div className={styles.ball__bigBall}>
                <div className={styles.bigBall__content}>
                    <div className={styles.content__number}>{props.data.number}</div>
                </div>
            </div>
            <div className={styles.ball__text}>
                <SmallArrow className={styles.text__vector} />
                <h1 className={styles.text__title}>{props.data.title}<br/><span>{props.data.subTitle}</span></h1>
            </div>
        </div>
    )
}

export default CardBall