import './ImgContent.css'

import img1 from '../../../img/section1/01.jpg'
import img2 from '../../../img/section1/02.jpg'
import img3 from '../../../img/section1/03.jpg'
import img4 from '../../../img/section1/04.jpg'

const ImgContent = () => {
    return (
        <div className='immages'>
            <div className='immages__column column1'>
                <img className='img1' src={img1} alt="Person" />
                <img className='img2' src={img2} alt="Person" />
            </div>
            <div className='immages__column column2'>
                <img className='img3' src={img3} alt="Person" />
                <img className='img4' src={img4} alt="Person" />
            </div>
        </div>
    )
}

export default ImgContent