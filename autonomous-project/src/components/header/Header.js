import styles from './Header.module.css'
import Logo from '../../graphic/svg/Logo'
import Hydra from '../../graphic/svg/Hydra'

const Header = () => {
    return (
        <div className={styles['main-header']}>

            <div className={styles.header__logo}>
                <Logo />
                <Hydra />
            </div>
            <div className={styles.header__links}>something...</div>
            <div className={styles.header__buttons}>something...</div>

        </div>
    )
}

export default Header