import { useState } from "react"


const PrevButton = props => {

    const externalStyle = props.className

    const [dynamicColor, setDynamicColor] = useState('white')

    const clickHandler = () => {
        props.onClick()
        setDynamicColor(() => 'black')
        setTimeout(() => {
            setDynamicColor(() => 'white')
        }, 600);
        
    }

    return (
        <svg onClick={clickHandler} className={externalStyle} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M17.5 21.25L11.25 15L17.5 8.75M3.75 15C3.75 21.2132 8.7868 26.25 15 26.25C21.2132 26.25 26.25 21.2132 26.25 15C26.25 8.7868 21.2132 3.75 15 3.75C8.7868 3.75 3.75 8.7868 3.75 15Z" stroke={dynamicColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>)
}

export default PrevButton