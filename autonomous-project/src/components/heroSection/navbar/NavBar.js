import styles from './Navbar.module.css'

import Icon1 from '../../../graphic/svg/heroSection-vector/heroIcons/Icon1'
import Icon2 from '../../../graphic/svg/heroSection-vector/heroIcons/Icon2'
import Icon3 from '../../../graphic/svg/heroSection-vector/heroIcons/Icon3'

import Item from './item/Item'

const NavBar = () => {

    const data = [
        {
            id: '1',
            ico: <Icon1 className={styles.icon1}/>,
            title: 'Pay Us a Visit',
            text: 'Union St, Seattle, WA 98101, United States'
        },
        {
            id: '2',
            ico: <Icon2 className={styles.icon2}/>,
            title: 'Give Us a Call',
            text: '(110) 1111-1010'
        },
        {
            id: '3',
            ico: <Icon3 className={styles.icon3}/>,
            title: 'Send Us a Message',
            text: 'Contact@HydraVTech.com'
        }
    ]

    console.log(data)

    return (
        <nav className={styles['nav-bar']}>
            {data.map((item, index) => <Item  key={index} className={index === 1 ? styles['item-border'] : ''} data={item} />)}
        </nav>
    )
}

export default NavBar