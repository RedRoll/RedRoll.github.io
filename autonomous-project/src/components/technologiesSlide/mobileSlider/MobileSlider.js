import styles from './MobileSlider.module.css'

import { useState } from 'react'
import Slider from '../../UI/slider/Slider'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'

// import Button from '../../UI/button/Button'

const MobileSlider = props => {

    const [index, setIndex] = useState(0)

    const styling = {
        slider: styles.slider,
        slideWrapper: styles.slider__wrapper,
        nextButton: styles.nextButton,
        prevButton: styles.prevButton,
        activeButton: styles.activeButton
    }



    return (
        <Slider styling={styling} data={props.data} setIndex={setIndex} index={index}>

            <div className={styles['img-wrapper']}>
                <img className={`${styles.slide__img} ${index === 0 ? styles.slideFix : ''}`} src={props.data[index]} alt={props.data[index]} />
            </div>

        </Slider>

    )
}

export default MobileSlider



