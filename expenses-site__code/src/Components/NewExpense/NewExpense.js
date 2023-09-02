import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const saveExpenseHandler = (enteredDataInForm) => {
        const expenseData = {
            ...enteredDataInForm,
            id: Math.random().toString()
        }
//Щоб передати дані ще на рівень вище треба зробити ще раз все так само тільки дописати ще одну функцію в батьківському елементі, яка буде передана сюди через props
        props.onExpenseRecive(expenseData)
    }// Для того, щоб взаємодіяти з даними дочірнього елементу (щоб витягнути їх з дочірнього елементу і скористатися ними на рівень вище) можна створити функцію (створити функці. в батьківському елементі!), яка буде створювати новий об'єкт на основі переданих в параметрах функції даних і передати її як props для дочірнього елементу.

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseHandler}/> 
        </div>
    ) // onSaveExpenseData -  ця назва може бути якою завгодно але такий синтаксис з приставкою on (просто так прийнято писати для більшої зрозумілості коду) дає зрозуміти, що переданим параметром буде саме функція
}

export default NewExpense