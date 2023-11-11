import styles from './NumbersSection.module.css'

import CardBall from './CardBall/CardBall'
import NumberVector from '../../graphic/svg/numberSection/NumberVector'

const data = [
    { title: '3D Conception', number: '01', subTitle: '& Design' },
    { title: 'Interaction', number: '02', subTitle: 'Design' },
    { title: 'VR World', number: '03', subTitle: 'User Testing' },
    { title: 'Hydra VR', number: '04', subTitle: 'Deploy' }
]

const NumbersSection = () => {

    


    return (
        <div className={styles.wrapper}>
            <div className={styles['main-numbers']}>
                {data.map((item, index) => <CardBall className={index === 1 || index === 3 ? styles.cardBallMarginRight : styles.cardBallMarginLeft} key={item.number} data={item} />)}
            </div>
            <NumberVector className={styles.numbers__vector} />
        </div>
    )
}

export default NumbersSection