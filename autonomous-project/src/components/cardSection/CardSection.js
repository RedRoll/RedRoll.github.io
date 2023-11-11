import styles from './CardSection.module.css'

import Card from './card/Card'
import CardMobile from './card/cardMobile/CardMobile'
import WidthListener from '../UI/mobileMode/MobileMode'

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

    const firstSection = data.slice(0, 2) /*ділю массив на 2, щоб вони елменти рендерились парами (для flex позиціонування)*/
    const secondSection = data.slice(2, 4)

  
    return (

        <WidthListener width={599}>

            <CardMobile data={data} />

            <div className={styles['card-section']}>
                <div className={styles.section_1} >
                    {firstSection.map(item => <Card key={item.img} data={item} />)}
                </div >
                <div className={styles.section_2}>
                    {secondSection.map(item => <Card key={item.img} data={item} />)}
                </div>
            </div>

        </WidthListener>

    )
}

export default CardSection





