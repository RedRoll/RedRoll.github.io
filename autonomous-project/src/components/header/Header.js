import styles from './Header.module.css'
import Logo from '../../graphic/svg/Logo'
import Hydra from '../../graphic/svg/Hydra'
import Button from '../UI/button/Button'

const Header = () => {
    return (
        <div className={styles['main-header']}>

            <div className={styles.header__logo}>
                <a className={styles.logo__link} href="/">
                    <Logo className={styles['logo-display']}/>
                    <Hydra className={styles['hydra-display']}/>
                </a>
            </div>
            <div className={styles.header__links}>
                <ul className={styles.links__list}>
                    <li><a className={styles.list__link} href='/'>About</a></li>
                    <li><a className={styles.list__link} href='/'>Services</a></li>
                    <li><a className={styles.list__link} href='/'>Technologies</a></li>
                    <li><a className={styles.list__link} href='/'>How to</a></li>
                </ul>
            </div>
            <div className={styles.header__buttons}>
                <Button className={styles['header__modded-button1']}>Contact Us</Button>
                <Button className={styles['header__modded-button2']}>Join Hydra</Button>
            </div>

            <div className={styles['header__hidden-burger-menu']}>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>
    )
}

export default Header