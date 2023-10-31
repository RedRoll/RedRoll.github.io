import './CardMobile.css'

import { useState, cloneElement } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Card from '../Card'
import Button from '../../../UI/button/Button'

const CardMobile = props => {

    const [dynamicStyle, setDynamicStyle] = useState('next-slide')
    const [slideIndex, setSlideIndex] = useState(0)

    const clickRightHandler = () => {
        setSlideIndex(prevState => prevState === props.data.length - 1 ? 0 : prevState + 1)
    }

    const clickLeftHandler = () => {
        setSlideIndex(prevState => prevState === 0 ? props.data.length - 1 : prevState - 1) // якщо замість props.data.length - 1 написати просто props.data.length, то на останньому слайді виб'є помилку (бо slideIndex буде 4, а елементу з таким порядковим номером немає в массиві даних)
    }

    const childForsePushClass = dynamicClass => child => cloneElement(child, {
        classNames: dynamicClass
    })

    return (
        <div className='card-mobile'>
            <Button onClick={clickLeftHandler}>{'<'}</Button>
            <div className='slide-wrapper'>

                <TransitionGroup childFactory={childForsePushClass(dynamicStyle)}>
                    <CSSTransition>
                        <Card data={props.data[slideIndex]} />
                    </CSSTransition>
                </TransitionGroup>

            </div>
            <Button onClick={clickRightHandler}>{'>'}</Button>
        </div>
    )
}

export default CardMobile