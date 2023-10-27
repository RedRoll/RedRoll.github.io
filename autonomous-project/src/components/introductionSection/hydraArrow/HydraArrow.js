import styles from './HydraArrow.module.css'

import BigArrow from '../../../graphic/svg/introductionSection-vector/BigArrow'

const HydraArrow = props => {


    const classes = `${props.className} ${styles.hydraArrow}`

    return (
        <div className={classes}>
            <h1 className={styles.hydraArrow__title}>{props.data.title}</h1>
            <div className={styles.hydraArrow__arrow}>
                <h2 className={styles.arrow__title1}>{props.data.title2}</h2>
                <BigArrow />
            </div>
        </div>
    )
}

export default HydraArrow