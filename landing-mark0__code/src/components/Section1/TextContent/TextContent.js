import './TextContent.css'
import Button from '../../Button/Button'

const TextContent = (props) => {

    const classes = 'text-content ' + props.className
    return (
        <div className={classes}>
            <h1 className='text-content__title'>Marketing solutions<br/> that grow your<br/> business.</h1>
            <p className='text-content__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> suspendisse varius enim in eros elementum tristique.<br/> Duis cursus, mi quis viverra ornare, eros dolor.</p>
            <div className='text-content__buttons'>
                <Button className='buttons__item1'>Our Services</Button>
                <Button className='buttons__item2'>Contact Us</Button>
            </div>
        </div>
    )
}

export default TextContent