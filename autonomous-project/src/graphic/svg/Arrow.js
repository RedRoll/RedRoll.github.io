const Arrow = props => {

    const externalClass = props.className

    return (
        <svg onClick={props.onClick} className={externalClass}  xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
            <path d="M70.8334 50L29.1667 50M70.8334 50L54.1667 66.6667M70.8334 50L54.1667 33.3333" stroke="#C0B7E8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default Arrow