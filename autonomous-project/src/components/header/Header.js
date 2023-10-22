import styles from './Header.module.css'
import Logo from '../../graphic/svg/Logo'
import Hydra from '../../graphic/svg/Hydra'
import Button from '../UI/button/Button'

import { useState, useEffect, useRef } from 'react'

const Header = () => {



    const [isTrue, setIsTrue] = useState(false)



    // function for clicks outside of the burger menu

    const burgerRef = useRef(null)
    const menuRef = useRef(null)


    useEffect(() => {

        const clickHandlerOutside = e => {
            if (!isTrue) return
            // якщо не вказати умову вище, код в useEffect (useEffect буде cлухати івент весь час) буде спрацьовувати навіть тоді коли це не потрібно, а саме коли меню закрите (коли загальний стан - false)
            if (burgerRef.current && menuRef.current) {
                if (!menuRef.current.contains(e.target) && !burgerRef.current.contains(e.target)) {
                    setIsTrue(false)
                    console.log(!burgerRef.current.contains(e.target))
                }
            }
        }

        document.addEventListener('click', clickHandlerOutside)

        return () => {
            document.removeEventListener('click', clickHandlerOutside)
        }

    }, [isTrue]) // в квадратних дужках пишеться залежність - useEffect буде спрацьовувати, коли змінна isTrue зміниться (наприклад стане true). Тоді запуститься функція в тілі useEffect
    // Якщо не вказати залежність то useEffect буде запускатись при кожному ре-рендері, це всеодно, що просто прописати функцію тут, в цьому місці, вона і так буде запускатись після кожного нового рендеру.

    // end function

    const toggleClass = styles['no-scrollPage']

    const clickHandler = () => {
        if (!isTrue) {
            setIsTrue(true)
            document.body.classList.add(toggleClass) //для заборони скролу сторінки при відкритому бургері
        }
        else {
            setIsTrue(false)
            document.body.classList.remove(toggleClass)
        }
    }


    const activateBurger = isTrue ? styles['burger-open'] : null

    const activeBurgerStyle = {
        background: isTrue ? 'linear-gradient(93deg, rgba(2,0,36,1) 0%, rgba(140,168,191,1) 0%, rgba(125,36,111,1) 100%)' : ''
    }

    return (

        <div className={styles['main-header']} >

            <div className={styles.header__logo}>
                <a className={styles.logo__link} href="#">
                    <Logo className={styles['logo-display']} />
                    <Hydra className={styles['hydra-display']} />
                </a>
            </div>

            <div className={activateBurger} >

                <div className={styles.header__links} >

                    <ul className={styles.links__list} ref={menuRef}>
                        <li className={styles['hide-item']}><a onClick={event => event.preventDefault()} className={styles.list__link} href='/'>Join Hydra</a></li>
                        <li><a className={styles.list__link} href='#'>About</a></li>
                        <li><a className={styles.list__link} href='#'>Services</a></li>
                        <li><a className={styles.list__link} href='#'>Technologies</a></li>
                        <li><a className={styles.list__link} href='#'>How to</a></li>
                        <li className={styles['hide-item']}><a className={styles.list__link} href='#'>Contact us</a></li>
                        {/* Варнінг тут, бо не корректно вказана адреса посилання */}
                    </ul>
                </div>

            </div>

            <div className={styles.header__buttons} >
                <Button className={styles['header__modded-button1']}>Contact Us</Button>
                <Button className={styles['header__modded-button2']}>Join Hydra</Button>
            </div>


            <div className={styles['header__hidden-burger-menu']} onClick={clickHandler} ref={burgerRef}>
                <span style={activeBurgerStyle}></span>
                <span></span>
                <span style={activeBurgerStyle}></span>

            </div>

        </div>

    )
}

export default Header