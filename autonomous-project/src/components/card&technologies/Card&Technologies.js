import styles from './Card&Technologies.module.css'

import CardSection from '../cardSection/CardSection'
import TechnologiesSlide from '../technologiesSlide/TechnoligiesSlide'

const CardnTechnologies = () => {
    return (
        <div className={styles['main-wrapper']}>
            <CardSection />
            <TechnologiesSlide />
        </div>
    )
}

export default CardnTechnologies