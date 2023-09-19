import styles from './ListItem.module.css'

const ListItem = props => {
    return (
        <table className={styles.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.data.year}</td>
                    <td>{Math.round(props.data.savingsEndOfYear)}</td>
                    <td>{Math.round(props.data.yearlyInterest)}</td>
                    <td>{Math.round(props.data.savingsEndOfYear - props.data.initialSavings - props.data.yearlyContribution * props.data.year)}</td>
                    <td>{props.data.initialSavings + props.data.yearlyContribution * props.data.year}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ListItem