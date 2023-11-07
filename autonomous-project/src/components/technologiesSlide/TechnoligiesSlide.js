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

    useEffect(() => {

        const onResize = () => setMobile(window.innerWidth <= 599)

        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
        }

    }, [mobile])

    const clickHandler = () => setOpen(prevState => !prevState)

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
                    <Button className={`${styles.content__button} ${open ? styles['button-open'] : ''}`} onClick={clickHandler}>
                        <div className={styles.button__arrow}></div>
                    </Button>
                </div>

            </div>

            <div className={styles['main-wrapper__slides']}>

                {
                    mobile ?

                        <MobileSlider data={data} />

                        :

                        <div className={` ${styles['slides__navbar-wrapper']} ${open ? styles.open : ''}`}>
                            <div className={styles['wrapper-box']}>{data.map((item, index) => <div><img className={styles.box__img} key={index} src={item} alt='img' /></div>)}</div>
                        </div> 
                }
                {/* крч... початково їбався я з цими картинками в флекс контейнері дуже довго: (не масштабувались при зменьшенні viewport) i max-width: 100% і dislay:block.. нічого не допомогло. Почали масштабуватись коли кожну картинку обгорнув в div - почало працювати прям з коробки(масштабування) */}

            </div>

        </div>
    )
}

export default TechnologiesSlide