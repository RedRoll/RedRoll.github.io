import styles from './BigArrow.module.css'

const BigArrow = () => {



    return (
        <div className={styles.arrow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="185" height="4" viewBox="0 0 158 4" fill="none">
                <path d="M157.5 2H0" stroke="#C0B7E8" strokeWidth="3" />
            </svg>
            <div className={styles.arrow__arrowEnd}>
                <svg className={styles.arrowEnd__item} xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 96" fill="none">
                    <path d="M70.8333 50L29.1667 50M70.8333 50L54.1667 66.6667M70.8333 50L54.1667 33.3334" stroke="#C0B7E8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    )
}

export default BigArrow