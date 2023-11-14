import styles from './Slider.module.css'

import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useState, cloneElement } from 'react'

import Button from '../button/Button'


const Slider = props => {

    const [clicked, setCliked] = useState({
        prev: '',
        next: ''

    })


    // css transition classes
    const nextClasses = {
        enter: styles.nextImgEnter,
        enterActive: styles.nextImgEnterActive,
        enterDone: styles.nextImgEnterDone,
        exit: styles.nextImgExit,
        exitActive: styles.nextImgExitActive,
        exitDone: styles.nextImgExitDone
    }

    const prevClasses = {
        enter: styles.prevImgEnter,
        enterActive: styles.prevImgEnterActive,
        enterDone: styles.prevImgEnterDone,
        exit: styles.prevImgExit,
        exitActive: styles.prevImgExitActive,
        exitDone: styles.prevImgExitDone
    }

    const [dynamicClass, setDynamicClass] = useState(nextClasses)

    const buttonClasses = `${props.styling.activeButton} ${styles['active-button']}` // додав модифікатор (можливість зимінювати стиль на пряму там, де цей компонент буде імпортований) стилю кліку, бо дефолтний не завжди підходить

    const nextClickHandler = () => {
        props.setIndex(prevState => prevState === props.data.length - 1 ? 0 : prevState + 1)
        setDynamicClass(() => nextClasses)
        setCliked(() => {
            return {
                next: buttonClasses
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
        props.setIndex(prevState => prevState === 0 ? props.data.length - 1 : prevState - 1) // якщо замість props.data.length - 1 написати просто props.data.length, то на останньому слайді виб'є помилку (бо slideIndex буде 4, а елементу з таким порядковим номером немає в массиві даних)
        setDynamicClass(() => prevClasses)
        setCliked(() => {
            return {
                prev: buttonClasses
            }
        })
        setTimeout(() => {
            setCliked(() => {
                return {
                    prev: ''
                }
            })
        }, 300);
    }

    const forsedChangeClass = myClass => child => cloneElement(child, {
        classNames: myClass
    })

    const classes1 = `${styles.buttonPrev} ${clicked.prev} ${props.styling.prevButton}` /*основний стиль кнопки + стиль кліку по кнопці*/
    const classes2 = `${styles.buttonNext} ${clicked.next} ${props.styling.nextButton}`

    return (
        <div className={props.styling.slider}>

            <div className={props.styling.slideWrapper}>

                <Button className={classes1} onClick={prevClickHandler}><div className={styles.contentBprev}></div></Button>
                <TransitionGroup childFactory={forsedChangeClass(dynamicClass)}>
                    <CSSTransition key={props.index} timeout={1000} classNames={dynamicClass}>
                        {props.children}
                    </CSSTransition>
                </TransitionGroup>
                <Button className={classes2} onClick={nextClickHandler}><div className={styles.contentBnext}></div></Button>

            </div>
        </div>
    )
}

export default Slider

// propses needed: 
// const styling = {
//     slider: styles.slider, - required props!
//     slideWrapper: styles.slideWrapper, - required props!
//     nextButton: styles.nextButton, - optional props(slider has a standard style)
//     prevButton: styles.prevButton, - optional props(slider has a standard style)
//     activeButton: styles.activeButton - optional props(slider has a standard style)
// }
