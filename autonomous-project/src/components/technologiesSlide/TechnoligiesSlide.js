import styles from './TechnologiesSlide.module.css'

import { useState, useEffect } from 'react'

import Button from '../UI/button/Button'
import MobileSlider from './mobileSlider/MobileSlider'

import backIMG from '../../graphic/img/technologiesBackground.png'
import img1 from '../../graphic/img/hydraTech1.png'
import img2 from '../../graphic/img/hydraTech2.png'
import img3 from '../../graphic/img/hydraTech3.png'
import img4 from '../../graphic/img/hydraTech4.png'

const data = [img1, img2, img3, img4]

const TechnologiesSlide = () => {

    const [mobile, setMobile] = useState(window.innerWidth <= 599)
    const [open, setOpen] = useState(false)

    useEffect( () => {

        const onResize = () => setMobile(window.innerWidth <= 599)

        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
        }

    }, [mobile])

    const clickHandler = () => setOpen(prevState =>  !prevState)

    console.log(open)


    return (
        <div className={styles['main-wrapper']}>

            <div className={styles['main-wrapper__technologies']}>

                <img className={styles.technologies__background} src={backIMG} alt="backGirl" />

                <div className={styles.technologies__content}>
                    <div className={styles.content__text}>
                        <h1>TECHNOLOGIES & HARDWARE</h1>
                        <h2>USED BY HYDRA VR.</h2>
                    </div>
                    <Button className={styles.content__button} onClick={clickHandler}>
                        <div className={styles.button__arrow}></div>
                    </Button>
                </div>

            </div>

            <div className={styles['main-wrapper__slides']}>
                
                {
                mobile ?

                <MobileSlider data={data}/>

                :

                open ? <div className={styles['slides__navbar-wrapper']}>
                    <div className={styles['wrapper-box']}>{data.map( (item, index) => <img className={styles.box__img} key={index} src={item} alt='img' />)}</div>
                </div> : ''
            }

            </div>
            
        </div>
    )
}

export default TechnologiesSlide