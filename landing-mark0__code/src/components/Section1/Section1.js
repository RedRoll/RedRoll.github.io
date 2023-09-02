import './Section1.css'
import TextContent from './TextContent/TextContent'
import ImgContent from './Imgcontent/ImgContent'

const Section1 = () => {
    return (
        <div className='section1'>
            <div className='section1__container'>
                <div className='section1__content'>
                    <TextContent  className='content-item'/>
                </div>
                <div className='section1__content'>
                    <ImgContent />
                </div>
            </div>
        </div>
    )
}

export default Section1