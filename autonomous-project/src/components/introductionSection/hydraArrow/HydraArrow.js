import styles from './HydraArrow.module.css'

import BigArrow from '../../../graphic/svg/introductionSection-vector/BigArrow'

const HydraArrow = props => {


    const classes = `${props.className} ${styles.hydraArrow}`

    return (
        <div className={classes}>
            <div className={styles.hydraArrow__leftSide}>
                <h1 className={styles.hydraArrow__title}>{props.data.title}</h1>
                <div className={styles.hydraArrow__arrow}>
                    <h2 className={styles.arrow__title1}>{props.data.title2}</h2>
                    <BigArrow className={styles.arrow__item}/>
                </div>
            </div>

            <div className={styles.hydraArrow__rightSide}>
                <p className={styles.rightSide__text}>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
            </div>
        </div>
    )
}

export default HydraArrow



