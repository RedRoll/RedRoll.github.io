import styles from './NumbersSection.module.css'
import { useState } from 'react'

import CardBall from './CardBall/CardBall'
import NumberVector from '../../graphic/svg/numberSection/NumberVector'
import MobileMode from '../UI/mobileMode/MobileMode'
import Slider from '../UI/slider/Slider'

const data = [
    { title: '3D Conception', number: '01', subTitle: '& Design' },
    { title: 'Interaction', number: '02', subTitle: 'Design' },
    { title: 'VR World', number: '03', subTitle: 'User Testing' },
    { title: 'Hydra VR', number: '04', subTitle: 'Deploy' }
]

const NumbersSection = () => {

    const [index, setIndex] = useState(0)

    const styling = {
        slider: styles.slider,
        slideWrapper: styles.slideWrapper,
        nextButton: styles.nextButton,
        prevButton: styles.prevButton,
        activeButton: styles.activeButton
    }

    return (
        <div className={styles.wrapper}>
            <MobileMode width={599}>

                <Slider styling={styling} data={data} setIndex={setIndex} index={index}>
                    <div className={styles['card-wrapper']}>
                        <CardBall data={data[index]} />
                    </div>
                </Slider>


                <div>
                    <div className={styles['main-numbers']}>
                        {data.map((item, index) => <CardBall className={index === 1 || index === 3 ? styles.cardBallMarginRight : styles.cardBallMarginLeft} key={item.number} data={item} />)}
                    </div>
                    <NumberVector className={styles.numbers__vector} />
                    <NumberVector className={styles.numbers__vector1} />
                </div>

            </MobileMode>
        </div>
    )
}

export default NumbersSection