import styles from './HeroSextion.module.css'
import Button from '../UI/button/Button'

import Vector1 from '../../graphic/svg/heroSection-vector/Vector1'
import Vector2 from '../../graphic/svg/heroSection-vector/Vector2'
import Vector3 from '../../graphic/svg/heroSection-vector/Vector3'
import Vector4 from '../../graphic/svg/heroSection-vector/Vector4'
import Arrow from '../../graphic/svg/Arrow'

import NavBar from './navbar/NavBar'

const HeroSection = () => {

    return (
        <div className={styles.hero}>
            <div className={styles.hero__presentation}>

                <div className={styles.presentation__text}>
                    <div className={styles['vectors-main']}>
                        <Vector4 className={styles.text__vector4}/>
                    </div>

                    <h1><span>Dive</span> Into The Depths<br />Of <span>Virtual Reality</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        nisl tincidunt eget. Lectus mauris eros in vitae .</p>
                    <div className={styles.text__interactive}>
                        <Button>Build Your World</Button>
                        <Arrow className={styles.interactive__arrow} />
                    </div>
                </div>
                <div className={styles.presentation__graphics}>

                    <div className={styles['vectors-main']}>
                        <Vector1 className={styles.graphics__vector1} />
                        <Vector2 className={styles.graphics__vector2} />
                        <Vector3 className={styles.graphics__vector3} />
                    </div>
                    <div className={styles.graphics__background}>
                        <div className={styles.background__img}></div>
                    </div>

                </div>

            </div>
            <NavBar />
        </div>
    )
}

export default HeroSection