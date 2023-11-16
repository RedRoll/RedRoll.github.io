const NumberVector = props => {

    const externalClass = props.className

    return (
        <svg className={externalClass} xmlns="http://www.w3.org/2000/svg" width="1440" height="169" viewBox="0 0 1440 169" fill="none">
            <path d="M-9 21.7335C6.47753 71.4205 88.0505 181.243 245.37 106.768C350.5 57 405.361 2.72575 539.107 91.2619C672.853 179.798 776.317 173.796 841.423 82.2582C906.53 -9.27916 1076.11 -33.7892 1139.7 74.7552C1203.29 183.3 1417.79 196.305 1440 106.768" stroke="url(#paint0_linear_11_136)" strokeWidth="6" />
            <defs>
                <linearGradient id="paint0_linear_11_136" x1="0.49999" y1="84.9999" x2="1440" y2="84.9998" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#343045" />
                    <stop offset="0.302083" stopColor="#C0B7E8" />
                    <stop offset="0.739583" stopColor="#8176AF" />
                    <stop offset="1" stopColor="#343045" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default NumberVector