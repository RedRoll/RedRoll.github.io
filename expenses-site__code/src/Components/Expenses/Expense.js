import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import { useState } from 'react'

import Card from '../UI/Card'
import ExpensesList from './ExpensesList/ExpensesList'
import ExpensesChart from '../Chart/ExpensesChart'

const Expense = (props) => {
    const [filterData, setFilterData] = useState('2020')

    // фІЛЬТР ЕЛЕМЕНТІВ СПИСКУ НА ОСНОВІ ВИБРАНОГО РОКУ В КОМПОНЕНТІ EXPENSESFILTER
    const filteredItems = props.data.filter(item => item.date.getFullYear().toString() === filterData)//новий массив об'єктів враховує стан filterData. Массив залежить від компоненту expensesFilter. Тобто, створюється новий массив об'єктів, який перевіряє ключ кожного об'єкту на рівність змінній FilterData, якщо itemDate === filterData - об'єкт потрапляє до нового відфільтрованого массиву .

    // ВАЖЛИВО!!!!! item.date це об'єкт (new Date()). Скористуватись методом .getFullYear() недостатньо, отримане значення треба ще перевести в формат стрічки (.toString()) бо filterData має стрічкове значення. Якщо цього не зробити, то тип даних номер 2020 не знайде рівності зі стрічковим типом даних "2020"


    const changeHandler = enteredData => {
        setFilterData(enteredData)
        

    }

    // {filteredItems === 0 && filteredItems.map(item => (<ExpenseItem key={item.id} data={item} />))}

    return (
        <li>
            <Card>
                <ExpensesFilter defaultValue={filterData} onFilterChange={changeHandler} />
                <ExpensesChart filteredExpenses={filteredItems} /> {/*відфільтровані витрати по року =>*/}
                <ExpensesList data={filteredItems} />

            </Card>
        </li>
        // за допомогою map можна динамічно рендерити (не прописувати в ручну весь jsx код) списки даних (массиви даних) передаючи потрібні значення до компонентів де вони будуть використані

    )
}


export default Expense