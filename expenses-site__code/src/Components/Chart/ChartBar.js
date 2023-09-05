import './ChartBar.css'

const ChartBar = props => {

    let dynamicValue = '0%'

    if (props.maxValue > 0) { 

        dynamicValue = Math.round((props.data.value / props.maxValue) * 100) + '%' // якщо данний елемент буде мати якесь значення value, те що знаходиться в expensesChart в массиві data, то воно поділиться на максимальне значення value з того ж самого массиву, а потім помножиться на 100(формула вичислення відсотку) і отриманий результат буде значення властивості висоти(заливки колби, тобо відсотком на скільки колба повинна бути залита кольором)
    }

    return(
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height: dynamicValue}}></div>
            </div>
            <div className='chart-bar__label'>{props.data.label}</div>
        </div>
    )
}

export default ChartBar