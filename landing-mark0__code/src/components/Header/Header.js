import { useState } from 'react'

import './Header.css'

import imgLogo from '../../img/logo.svg'
import Button from '../Button/Button'


const Header = () => {

    const [isActiveDisplay, setActiveDisplay] = useState(false)


    const burgerHandler = () => {
        if (isActiveDisplay === false) {
            setActiveDisplay(true)
        }

        else {
            setActiveDisplay(false)
        }
    }




    const burgerStyle = {
        backgroundColor: isActiveDisplay ? 'violet' : 'white'
    }

    let isActive = isActiveDisplay ? 'menu-open' : null /*class activates burger menu content*/



    return (
        <div className='header'>

            <div className='header__container'>
                {/* start content */}
                <div className='header__logo'>
                    <a href=" ">
                        <img src={imgLogo} alt="Logo" />
                    </a>
                </div>

                <div className='header__navBar'>
                    <div className={isActive}>
                        <div className='navBar-body'>
                            <ul className='navBar__menu'  >
                                <li className='menu__item'>
                                    <a href=" " className='item__link'>Home</a>
                                </li>
                                <li className='menu__item'>
                                    <a href=" " className='item__link'>About</a>
                                </li>
                                <li className='menu__item'>
                                    <a href=" " className='item__link'>Pages</a>
                                </li>
                                <li className='menu__item'>
                                    <a href=" " className='item__link'>Services</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='header__cart'>
                    <a className='cart__link' href=" ">Cart</a>

                    <div className='cart__count'>0</div>
                </div>

                {/* button here */}
                <Button className='header__button'>Get Started</Button>
                
                <div className='header__hidden-burger-menu' onClick={burgerHandler}>
                    <span style={burgerStyle}></span>
                    <span></span>  {/*burger lines*/}
                    <span style={burgerStyle}></span>
                </div>
                {/* end content */}
            </div>
        </div>
    )
}


export default Header