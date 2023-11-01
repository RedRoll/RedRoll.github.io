import styles from './CardSection.module.css'

import { useState, useEffect } from 'react'

import Card from './card/Card'
import CardMobile from './card/cardMobile/CardMobile'

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

    const [mobile, setMobile] = useState(window.innerWidth <= 599)


    // rewrote the slider for practice! 
    useEffect(() => {
        const onWindowResize = () => {
            setMobile(window.innerWidth <= 599)
        }

        window.addEventListener('resize', onWindowResize) // кожен раз при зміні ширини viewport заупускається цей listener

        return () => {
            window.removeEventListener('resize', onWindowResize) // коли (в даному випадку ні, але це хороша практика - така метода написання) компонент демонтується з DOM дерева цей listener теж демонтується (зроблено для оптимізації)
        }
    },
        [mobile])


    return (
        <div> {
            mobile ?

                <CardMobile data={data} />

                :

                <div className={styles['card-section']}>
                    <div className={styles.section_1} >
                        {firstSection.map(item => <Card key={item.img} data={item} />)}
                    </div >
                    <div className={styles.section_2}>
                        {secondSection.map(item => <Card key={item.img} data={item} />)}
                    </div>
                </div>

        }</div>
    )
}

export default CardSection





