import './CardMobile.css'

import { useState, cloneElement } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Card from '../Card'
import Button from '../../../UI/button/Button'

const CardMobile = props => {

    const [dynamicStyle, setDynamicStyle] = useState('next-slide')
    const [slideIndex, setSlideIndex] = useState(0)

    const nextClickHandler = () => {
        setSlideIndex(prevState => prevState === props.data.length - 1 ? 0 : prevState + 1)
        setDynamicStyle(() => 'next-slide')
    }

    const prevClickHandler = () => {
        setSlideIndex(prevState => prevState === 0 ? props.data.length - 1 : prevState - 1) // якщо замість props.data.length - 1 написати просто props.data.length, то на останньому слайді виб'є помилку (бо slideIndex буде 4, а елементу з таким порядковим номером немає в массиві даних)
        setDynamicStyle(() => 'prev-slide')
    }

    const childForsePushClass = dynamicClass => child => cloneElement(child, {
        classNames: dynamicClass
    })

    console.log(dynamicStyle)

    return (

        <div className='card-mobile'>


            <div className='slide-wrapper'>
                <div className='mobile-buttons'>
                    <Button className='mobile-button0' onClick={prevClickHandler}>{'<'}</Button>
                    <Button className='mobile-button1' onClick={nextClickHandler}>{'>'}</Button>
                </div>
                <TransitionGroup childFactory={childForsePushClass(dynamicStyle)}>
                    <CSSTransition key={props.data[slideIndex].img} timeout={1000} classNames={dynamicStyle}>


                        <Card data={props.data[slideIndex]} />


                    </CSSTransition>
                </TransitionGroup>

            </div>

        </div>

    )
}

export default CardMobile