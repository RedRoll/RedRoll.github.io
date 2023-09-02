import './ExpenseDate.css'
import Card from '../UI/Card'

const ExpenseDate = (props) => {

    const year = props.date.toLocaleString('en-us', {year: 'numeric'})
    const month = props.date.toLocaleString('en-US', { month: 'short' })
    const day = props.date.toLocaleString('en-US', { day: '2-digit' })
    
    // метод .toLocaleString() повертає об'єкт Data у форматі рядку, використовуючи деякі додаткові параметри, так як: 1 - формат (який формат мови використовувати), 2 - об'єкт {}, де будуть параметри дня, року чи години і тип візуалізації, наприклад словом чи цифрою
    
    return ( // наслідування стилів з Card компоненту
        <Card className='expense-date'> 
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </Card>
    )
}

export default ExpenseDate