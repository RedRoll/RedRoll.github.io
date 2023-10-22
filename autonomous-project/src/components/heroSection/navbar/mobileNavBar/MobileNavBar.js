// import styles from './MobileNavBar.module.css'
import './MobileNavBar.css'

import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useState } from 'react'

import PrevButton from '../../../../graphic/svg/heroSection-vector/navArrows/PrevButton'
import NextButton from '../../../../graphic/svg/heroSection-vector/navArrows/NextButon'
import Item from '../item/Item'


const MobileNavBar = props => {



    const [index, setIndex] = useState(0)

    const nextSlideHadler = () => {
        setIndex(prevIndex => prevIndex === props.data.length - 1 ? 0 : prevIndex + 1)
    }
    const prevSlideHadler = () => {
        setIndex(prevIndex => prevIndex === 0 ? props.data.length - 1 : prevIndex - 1)
    }
    // якщо props.data.length === 0 і якщо відняти від неї -1 то результатом буде максимальний props.data.length, тобто 2 (елементів в массиві 3, нумерація йде - 0,1,2; 2 - останній можливий елемент массиву)

    console.log(props.data[index])

    // transitionGroupe test



    // end test 



    return (

        <nav className='nav-bar'>
            <PrevButton className='nav-bar__arrow1' onClick={prevSlideHadler} />

            <div className='slide-wrapper'>
                <TransitionGroup style={{ width: '100%', textAlign: 'center' }}>
                    <CSSTransition key={props.data[index].title} timeout={1000} classNames='next-slide'>
                        {/* <h1 >{props.data[index].title}</h1> */}
                        <Item data={props.data[index]} />
                    </CSSTransition>
                </TransitionGroup>
            </div>
            {/* csstransition не реагує зміну index, але якщо додати title (до index) props.data[index].title, тоді починає спрацьовувати (поки що не знаю чому так, наразі працює так) */}


            {/* <Item data={props.data[index]} ref={nodeRef} style={{ ...defaultStyle, ...transitionStyles[state] }} /> */}



            <NextButton className='nav-bar__arrow2' onClick={nextSlideHadler} />
        </nav>

    )
}

export default MobileNavBar