import styles from './IntroductionSection.module.css'

import HydraArrow from './hydraArrow/HydraArrow'

import VRMan from '../../graphic/img/man_introduction.png'
import Vector1Introduction from '../../graphic/svg/introductionSection-vector/vectors/Vector1'
import Vector2Introduction from '../../graphic/svg/introductionSection-vector/vectors/Vecto2'
import Button from '../UI/button/Button'

const data = [
    {
        title: 'introduction',
        title2: 'to hydra VR'
    },
    {
        title: 'Why Build',
        title2: 'With Hydra'
    }
]

const IntroductionSection = () => {
    return (
        <div className={styles['main-introduction']}>

            <HydraArrow className={styles.introduction__header} data={data[0]} />

            <div className={styles.introduction__middleSection}>

                <div className={styles.middleSection__picture}>

                    <img src={VRMan} alt="VR-man" className={styles['picture__img-man']} />

                </div>

                <Vector1Introduction className={styles.middleSection__vector1} />
                <Vector2Introduction className={styles.middleSection__vector2} />

                <div className={styles.middleSection__information}>

                    <div className={styles.information__title}>
                        <h2 className={styles.title__top}>About</h2>
                        <h3 className={styles.title__bottom}>Hydra VR</h3>
                    </div>

                    <div className={styles.information__text}>
                        <p>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus
                            urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida
                            dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
                            Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet
                            sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
                            etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet
                            cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                            retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                            n tempor.</p>
                    </div>

                    <Button className={styles.information__button}>Let`s get in touch</Button>

                </div>

                

            </div>

            <HydraArrow className={styles.introduction__footer} data={data[1]} />
        </div>
    )
}

export default IntroductionSection