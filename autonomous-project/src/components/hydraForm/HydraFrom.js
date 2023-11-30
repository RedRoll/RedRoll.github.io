import styles from './HydraForm.module.css'

import Button from '../UI/button/Button'
import VectorLine from '../../graphic/svg/hydraForm/VectorLine'

const HydraForm = props => {
    return(
        <form className={styles.form}>

            <div className={styles.form__header}>
                <h3 className={styles.header__supTitle}>Join Hydra</h3>
                <VectorLine className={styles.header__vector} />
                <h4 className={styles.header__subTitle}>Let`s Build Your VR Experience</h4>
            </div>

            <div className={styles.form__inputs}>

                <input placeholder='First Name' type="text" className={`${styles.inputs__item} ${styles.gridItem1}`} />
                <input placeholder='Last Name' type="text" className={`${styles.inputs__item} ${styles.gridItem2}`} />
                <input placeholder='Email' type="email" className={`${styles.inputs__item} ${styles.gridItem3}`} />
                <input placeholder='Phone number' type="tel" className={`${styles.inputs__item} ${styles.gridItem4}`} />
                <input placeholder='Subject' type="text" className={`${styles.inputs__item} ${styles.gridItem5}`} />
                <textarea placeholder='Tell us something...' type="text area" className={`${styles.inputs__item} ${styles.gridItem6}`} />
                
                
                
            </div>

            <Button className={styles.form__button}>Send to Hydra</Button>
        </form>
    )
}

export default HydraForm