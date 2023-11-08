import styles from './Card&Technologies.module.css'

import CardSection from '../cardSection/CardSection'
import TechnologiesSlide from '../technologiesSlide/TechnoligiesSlide'
import HydraArrow from '../introductionSection/hydraArrow/HydraArrow'

const data = [
    {
        title: 'How we build',
        title2: 'Whit Hydra VR?'
    }
]


const CardnTechnologies = () => {
    return (
        <div className={styles['main-wrapper']}>
            <CardSection />
            <TechnologiesSlide />
            <HydraArrow className={styles.wrapper__hydraArrow} data={data[0]}/>
        </div>
    )
}

export default CardnTechnologies