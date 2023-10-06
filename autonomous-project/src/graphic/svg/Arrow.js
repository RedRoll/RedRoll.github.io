const Arrow = props => {

    const externalClass = props.className

    return (
        <svg className={externalClass} xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
            <path d="M70.8334 50L29.1667 50M70.8334 50L54.1667 66.6667M70.8334 50L54.1667 33.3333" stroke="#C0B7E8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default Arrow