import styles from './MobileNav.module.css'

import { useState } from 'react'

import Item from '../item/Item'
import Slider from '../../../UI/slider/Slider'


const MobileNav = props => {

    const [index, setIndex] = useState(0)
    const styling = {
        slider: styles.slider,
        slideWrapper: styles.slideWrapper,
        nextButton: styles.nextButton,
        prevButton: styles.prevButton,
        activeButton: styles.activeButton
    }


    return (
        <Slider styling={styling} data={props.data} setIndex={setIndex} index={index}>
            <div className={styles['item-wrapper']}>
                <Item data={props.data[index]} />
            </div>
        </Slider>

    )
}

export default MobileNav


