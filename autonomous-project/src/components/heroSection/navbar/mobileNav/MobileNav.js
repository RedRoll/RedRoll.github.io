import './MobileNav.css'

import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useState } from 'react'

import Item from '../item/Item'
import PrevButton from '../../../../graphic/svg/heroSection-vector/navArrows/PrevButton'
import NextButton from '../../../../graphic/svg/heroSection-vector/navArrows/NextButon'

const MobileNav = props => {

    const [index, setIndex] = useState(0)

    const nextSlideHadler = () => {
        setIndex(prevIndex => prevIndex === props.data.length - 1 ? 0 : prevIndex + 1)
    }
    const prevSlideHadler = () => {
        setIndex(prevIndex => prevIndex === 0 ? props.data.length - 1 : prevIndex - 1)
    }

    return (
        <div className='mobile-nav'>
            <PrevButton className='nav-bar__arrow1' onClick={prevSlideHadler} />
            <div className='slide-wrapper'>
                <TransitionGroup >
                    <CSSTransition key={props.data[index].title} timeout={1000} classNames='next-slide'>
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