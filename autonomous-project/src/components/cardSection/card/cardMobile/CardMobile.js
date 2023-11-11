import styles from './CardMobile.module.css'

import { useState } from 'react'
import Card from '../Card'

import Slider from '../../../UI/slider/Slider'

const CardMobile = props => {

    const [index, setIndex] = useState(0)


    const styling = {
        slider: styles['card-mobile'],
        slideWrapper: styles['slide-wrapper'],
    }

    return (

        <Slider styling={styling} data={props.data} setIndex={setIndex} index={index}> 
            <Card data={props.data[index]} />
        </Slider>


    )
}

export default CardMobile