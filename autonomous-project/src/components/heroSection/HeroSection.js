import styles from './HeroSextion.module.css'
import { useState } from 'react'
import Button from '../UI/button/Button'
import imgGirl from '../../graphic/img/hero-img1.jpeg'

import Vector1 from '../../graphic/svg/heroSection-vector/Vector1'
import Vector2 from '../../graphic/svg/heroSection-vector/Vector2'
import Vector3 from '../../graphic/svg/heroSection-vector/Vector3'
import Vector4 from '../../graphic/svg/heroSection-vector/Vector4'
import Arrow from '../../graphic/svg/Arrow'

import NavBar from './navbar/NavBar'



const HeroSection = () => {

    const [isTrue, setIsTrue] = useState('')
    const clickHandler = () => {
        setIsTrue(prevState => !prevState ? true : false)

    }

    const mouseHandlerEnter = () => setIsTrue(true)
    const mouseHandlerLeave = () => setIsTrue(false)

    return (
        <div className={styles.hero}>
            <div className={styles.hero__presentation}>

                <div className={styles.presentation__text}>

                    <Vector4 className={styles.text__vector4} />


                    <h1><span>Dive</span> Into The Depths</h1>
                    <h2>Of <span>Virtual Reality</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        nisl tincidunt eget. Lectus mauris eros in vitae .</p>
                    <div className={styles.text__interactive}>
                        <Button className={styles.interactive__button} onMouseEnter={mouseHandlerEnter} onMouseLeave={mouseHandlerLeave} onClick={clickHandler}>Build Your World</Button>
                        <Arrow className={`${styles.interactive__arrow} ${isTrue ? styles['clicked-arrow'] : ''}`} />
                    </div>
                </div>
                <div className={styles.presentation__graphics}>

                  
                        <Vector1 className={styles.graphics__vector1} />
                        <Vector2 className={styles.graphics__vector2} />
                        <Vector3 className={styles.graphics__vector3} />

                        <img src={imgGirl} alt="Girl" title='Girl' className={styles.background__img} />
                    
                </div>

            </div>

            <NavBar />

        </div>
    )
}

export default HeroSection