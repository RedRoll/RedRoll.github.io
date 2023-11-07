import styles from './MobileSlider.module.css'

import { useState, cloneElement } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Button from '../../UI/button/Button'

const MobileSlider = props => {

    const [index, setIndex] = useState(0)


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


    const nextClickHandler = () => {
        setIndex(index === props.data.length - 1 ? 0 : index + 1)
        setDynamicClass(nextClasses)
    }
    const prevClickHandler = () => {
        setIndex(index === 0 ? props.data.length - 1 : index - 1)
        setDynamicClass(prevClasses)
    }

    const forsedChangeClass = myClass => child => cloneElement(child, {
        classNames: myClass
    })


    console.log(index)
    return (
        <div className={styles.slider}>

            <Button className={styles.slider__prevBut} onClick={prevClickHandler}><div className={styles.prevBut__child}></div></Button>

            <div className={styles.slider__wrapper}>

                <TransitionGroup childFactory={forsedChangeClass(dynamicClass)}>
                    <CSSTransition key={props.data[index]} timeout={1000} classNames={dynamicClass}>
                        <img className={`${styles.slide__img} ${index === 0 ? styles.slideFix : ''}`} src={props.data[index]} alt={props.data[index]} /> 
                        {/*slideFIx - жахливо підібрані картинки (всі різні по розміру), тому потрібен додатковий стиль для однієї картинки, щоб вона адекватно відображалась*/}
                    </CSSTransition>
                </TransitionGroup>

            </div>
            <Button className={styles.slider__nextBut} onClick={nextClickHandler}><div className={styles.nextBut__child}></div></Button>


        </div>
    )
}

export default MobileSlider