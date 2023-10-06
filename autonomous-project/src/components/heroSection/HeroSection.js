import styles from './HeroSextion.module.css'
import Button from '../UI/button/Button'

import HeroIMG from '../../graphic/img/hero-img1.jpeg'

import Vector1 from '../../graphic/svg/heroSection-vector/Vector1'
import Vector2 from '../../graphic/svg/heroSection-vector/Vector2'
import Vector3 from '../../graphic/svg/heroSection-vector/Vector3'
import Arrow from '../../graphic/svg/Arrow'

const HeroSection = props => {

    const classes = `${styles.hero} ${props.className}`

    return (
        <div className={classes}>
            <div className={styles.hero__presentation}>

                <div className={styles.presentation__text}>
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
                    <div className={styles.graphics__background}>
                        <div className={styles.background__img}></div>
                    </div>
                </div>

            </div>
            <nav className={styles.hero__navigation}>

                <div className={styles.navigation__item}></div>

            </nav>
            <Vector1 className={styles.graphics__vector1} />
            <Vector2 className={styles.graphics__vector2} />
            <Vector3 className={styles.graphics__vector3} />
        </div>
    )
}

export default HeroSection