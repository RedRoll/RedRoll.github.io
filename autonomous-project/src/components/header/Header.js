import styles from './Header.module.css'
import Logo from '../../graphic/svg/Logo'
import Hydra from '../../graphic/svg/Hydra'
import Button from '../UI/button/Button'

import { useState } from 'react'

const Header = () => {

    const [isTrue, setIsTrue] = useState(false)

    const clickHandler = () => {
        if (!isTrue) {
            setIsTrue(true)
        }
        else {
            setIsTrue(false)
        }
    }

    console.log(isTrue)

    const activateBurger = isTrue ? styles['burger-open'] : null

    const activeBurgerStyle = {
        background: isTrue ? 'linear-gradient(90deg, #ff0000 0%, #00ff00 100%)' : ''
    }


    return (

        <div className={styles['main-header']}>

            <div className={styles.header__logo}>
                <a className={styles.logo__link} href="/">
                    <Logo className={styles['logo-display']} />
                    <Hydra className={styles['hydra-display']} />
                </a>
            </div>

            <div className={activateBurger}>

                <div className={styles.header__links}>
                    <ul className={styles.links__list}>
                        <li className={styles['hide-item']}><a className={styles.list__link} href='/'>Join Hydra</a></li>
                        <li><a className={styles.list__link} href='/'>About</a></li>
                        <li><a className={styles.list__link} href='/'>Services</a></li>
                        <li><a className={styles.list__link} href='/'>Technologies</a></li>
                        <li><a className={styles.list__link} href='/'>How to</a></li>
                        <li className={styles['hide-item']}><a className={styles.list__link} href='/'>Contact us</a></li>
                    </ul>
                </div>

            </div>

            <div className={styles.header__buttons}>
                <Button className={styles['header__modded-button1']}>Contact Us</Button>
                <Button className={styles['header__modded-button2']}>Join Hydra</Button>
            </div>

            <div className={styles['header__hidden-burger-menu']} onClick={clickHandler}>
                <span style={activeBurgerStyle}></span>
                <span></span>
                <span style={activeBurgerStyle}></span>
            </div>

        </div>

    )
}

export default Header