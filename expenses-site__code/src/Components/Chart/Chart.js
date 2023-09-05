import './Chart.css'

import ChartBar from './ChartBar'

const Chart = props => { // масив даних data отримано через props

    const monthValues = props.data.map( month =>  month.value) // data мапується на числа, які є значеннями value
    
    const monthMaxValue = Math.max(...monthValues) // визначається найбільше value (для того щоб використати його потім для математичного вичислення відсотку в компоненті chartBar)

    // ... spread operator витягує всі елементи з новго массиву monthMaxvalue і робить їх аргументами Math.max()

    return(
        <div className='chart'>
            {props.data.map(item => <ChartBar key={item.label} data={item} maxValue={monthMaxValue}/>)}
        </div>
    )
}

export default Chart