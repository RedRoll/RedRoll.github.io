import styles from './CardSection.module.css'

import Card from './card/Card'

import img1 from '../../graphic/img/cardIMG1.png'
import img2 from '../../graphic/img/cardIMG2.png'
import img3 from '../../graphic/img/cardIMG3.png'
import img4 from '../../graphic/img/cardIMG4.png'

const data = [
    {
        img: img1,
        title: 'Simulation'
    },
    {
        img: img2,
        title: 'Education'
    },
    {
        img: img3,
        title: 'Self-care'
    },
    {
        img: img4,
        title: 'Outdoor'
    }
]

const CardSection = () => {
    return (
        <div className={styles['card-section']}>
            {data.map(item => <Card key={item.img} data={item} />)}
        </div>
    )
}

export default CardSection