import styles from './NumbersSection.module.css'

import CardBall from './CardBall/CardBall'

const data = [
    { title: '3D Conception', number: '01', subTitle: '& Design' },
    { title: 'Interaction', number: '02', subTitle: 'Design' },
    { title: 'VR World', number: '03', subTitle: 'User Testing' },
    { title: 'Hydra VR', number: '04', subTitle: 'Deploy' }
]

const NumbersSection = () => {
    return (
        <div className={styles['main-numbers']}>
            {data.map(item => <CardBall data={item} />)}
        </div>
    )
}

export default NumbersSection