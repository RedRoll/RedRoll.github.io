import { useState} from "react"


const NextButton = props => {

    const [dynamicColor, setDynamicColor] = useState('white')

    const externalStyle = props.className

    const clickHandler = () => {
        props.onClick()
        setDynamicColor(() => 'black')
        setTimeout(() => {
            setDynamicColor(() => 'white')
        }, 600);
        
    }

   

    // const mouseEnterHandler = () => {
    //     setDynamicColor(() => 'red')
    // } 

    return (
        <svg onClick={clickHandler} className={externalStyle}  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M12.5 21.25L18.75 15L12.5 8.75M26.25 15C26.25 21.2132 21.2132 26.25 15 26.25C8.7868 26.25 3.75 21.2132 3.75 15C3.75 8.7868 8.7868 3.75 15 3.75C21.2132 3.75 26.25 8.7868 26.25 15Z" stroke={dynamicColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default NextButton