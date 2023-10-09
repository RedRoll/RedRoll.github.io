import styles from './Navbar.module.css'
import { useState } from 'react'

import Icon1 from '../../../graphic/svg/heroSection-vector/heroIcons/Icon1'
import Icon2 from '../../../graphic/svg/heroSection-vector/heroIcons/Icon2'
import Icon3 from '../../../graphic/svg/heroSection-vector/heroIcons/Icon3'

import Item from './item/Item'



const NavBar = () => {

    const [index, setIndex] = useState(1)

    const data = [
        {
            id: '1',
            ico: <Icon1 className={styles.icon1} />,
            title: 'Pay Us a Visit',
            text: 'Union St, Seattle, WA 98101, United States'
        },
        {
            id: '2',
            ico: <Icon2 className={styles.icon2} />,
            title: 'Give Us a Call',
            text: '(110) 1111-1010'
        },
        {
            id: '3',
            ico: <Icon3 className={styles.icon3} />,
            title: 'Send Us a Message',
            text: 'Contact@HydraVTech.com'
        }
    ]

    const width = 1200
    const mobile = window.innerWidth <= width

    const nextSlideHadler = () => {
        setIndex(prevIndex => prevIndex === data.length - 1 ? 0 : prevIndex + 1)
    }
    const prevSlideHadler = () => {
        setIndex(prevIndex => prevIndex === 0 ? data.length - 1 : prevIndex - 1)
    }



    return (
        <div>
            {mobile ? (<nav className={styles['nav-bar']}>
                <button onClick={prevSlideHadler}>prev</button>
                <Item data={data[index]} />
                <button>next</button>
            </nav>) : (<nav className={styles['nav-bar']}>
                {data.map((item, index) => <Item key={index} className={`${index === 1 ? styles['item-border'] : ''} ${index === 2 ? styles['item-padding'] : ''}`} data={item} />)}
            </nav>)}
        </div>

    )
}

export default NavBar