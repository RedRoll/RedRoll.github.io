import './CardMobile.css'

import { useState, cloneElement } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Card from '../Card'
import Button from '../../../UI/button/Button'

const CardMobile = props => {

    const [dynamicStyle, setDynamicStyle] = useState('next-slide')
    const [slideIndex, setSlideIndex] = useState(0)
    const [clicked, setCliked] = useState({
        prev: '',
        next: ''
        
    })

   

    const nextClickHandler = () => {
        setSlideIndex(prevState => prevState === props.data.length - 1 ? 0 : prevState + 1)
        setDynamicStyle(() => 'next-slide')
        setCliked(() => {
            return {
                next: 'active-button'
            }
        })
        setTimeout(() => {
            setCliked(() => {
                return {
                    next: ''
                }
            })
        }, 300);
    }

    const prevClickHandler = () => {
        setSlideIndex(prevState => prevState === 0 ? props.data.length - 1 : prevState - 1) // якщо замість props.data.length - 1 написати просто props.data.length, то на останньому слайді виб'є помилку (бо slideIndex буде 4, а елементу з таким порядковим номером немає в массиві даних)
        setDynamicStyle(() => 'prev-slide')
        setCliked(() => {
            return {
                prev: 'active-button'
            }
        })
        setTimeout(() => {
            setCliked(() => {
                return {
                    prev: ' '
                }
            })
        }, 300);
    }

    const childForsePushClass = dynamicClass => child => cloneElement(child, {
        classNames: dynamicClass
    })

    const classes1 = `mobile-button0 ${clicked.prev}`
    const classes2 = `mobile-button1 ${clicked.next}`

    return (

        <div className='card-mobile'>


            <div className='slide-wrapper'>
                
                <Button className={classes1} onClick={prevClickHandler}>{'<'}</Button>

                <TransitionGroup childFactory={childForsePushClass(dynamicStyle)}>
                    <CSSTransition key={props.data[slideIndex].img} timeout={1000} classNames={dynamicStyle}>


                        <Card data={props.data[slideIndex]} />


                    </CSSTransition>
                </TransitionGroup>

                <Button className={classes2} onClick={nextClickHandler}>{'>'}</Button>
            </div>

        </div>

    )
}

export default CardMobile