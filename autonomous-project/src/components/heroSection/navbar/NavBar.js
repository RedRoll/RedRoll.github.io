import styles from './Navbar.module.css'
import { useState, useEffect } from 'react'


import Icon1 from '../../../graphic/svg/heroSection-vector/heroIcons/Icon1'
import Icon2 from '../../../graphic/svg/heroSection-vector/heroIcons/Icon2'
import Icon3 from '../../../graphic/svg/heroSection-vector/heroIcons/Icon3'

import Item from './item/Item'
import MobileNavBar from './mobileNavBar/MobileNavBar'

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



const NavBar = () => {


    const [mobile, setMobile] = useState(window.innerWidth <= 1080)



    useEffect(() => {
        const resizeHandler = () => {
            setMobile(window.innerWidth <= 1080)
            // функція, яка робить update state - mobile
        }

        window.addEventListener('resize', resizeHandler)
        // частина написана нижче потрібна(тобто спрацює вона тільки тоді), коли компонент буде забраний з DOM (коли він буде unmounted) - тоді listener буде прибраний (більше не буде слухати подію), це робиться для оптимізації і економії ресурсів пк

        return () => {
            window.removeEventListener('resize', resizeHandler)
        }

    }, [mobile]) // пустий массив, як другий аргумент useEffect означає що хук useEffect запуститься/спрацює тільки раз при візуалізації компоненту



    return (
        <div>
            <MobileNavBar data={data} />
            {/* тестовий сетап. Після тесту cssTransition повернути 2 стани (desktop/mobile) */}

        </div>

    )
}

export default NavBar

