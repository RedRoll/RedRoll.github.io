import './MobileNav.css'

import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useState, cloneElement } from 'react'

import Item from '../item/Item'
import PrevButton from '../../../../graphic/svg/heroSection-vector/navArrows/PrevButton'
import NextButton from '../../../../graphic/svg/heroSection-vector/navArrows/NextButon'

const MobileNav = props => {

    const [index, setIndex] = useState(0)
    const [dynamicClass, setDinamicClass] = useState('next-slide')

    console.log(dynamicClass)

    const nextSlideHadler = () => {
        setIndex(prevIndex => prevIndex === props.data.length - 1 ? 0 : prevIndex + 1)
        setDinamicClass('next-slide')
    }

    const prevSlideHadler = () => {
        setIndex(prevIndex => prevIndex === 0 ? props.data.length - 1 : prevIndex - 1)
        setDinamicClass('prev-slide')
    }

    // функція яка фіксить не правильне спрацьовування анімації при зміні сторони обертання слайдера (після прокрутки в право, коли відразу нажати на прокрутку в ліво один раз слайдер всеодно прокрутиться в попередню сторону)
    const childFactory = customClass => child => cloneElement(child, {
        classNames: customClass
    })
    // childFactory як би форсовано заміняє значення в елементі перед його рендером на сторінці і тільки після цього реакт робить перерендер вже з заздалегіть втиснутим актуальним значенням для елементу (в даному випадку з актуальним значенням класу від якого залежить анімація)

    // cloneElement ствоює новий реакт елемент базуючись на іншому рект елементі, як на стартовій точці

    return (
        <div className='mobile-nav'>
            <PrevButton className='nav-bar__arrow1' onClick={prevSlideHadler} />
            <div className='slide-wrapper'>
                <TransitionGroup childFactory={childFactory(dynamicClass)}>
                    <CSSTransition key={props.data[index].title} timeout={1000} classNames={dynamicClass}>
                        {/* <h1 >{props.data[index].title}</h1> */}
                        <Item data={props.data[index]} />
                    </CSSTransition>
                    {/* csstransition не реагує зміну index, але якщо додати title (до index) props.data[index].title, тоді починає спрацьовувати (поки що не знаю чому так, наразі працює так) */}
                </TransitionGroup>
            </div>
            <NextButton className='nav-bar__arrow2' onClick={nextSlideHadler} />
            
        </div>
    )
}

export default MobileNav


// зробити більші кнопки перемикання слайду