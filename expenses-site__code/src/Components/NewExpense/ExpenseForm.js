import { useState } from 'react';
import './ExpenseForm.css'
import FormInput from './FormInput/FormInput';

const ExpenseForm = (props) => {

    const [inputState, setInputState] = useState({
        title: '',
        amount: '', // ці всі 3 ключі-значення (цей весь об'єкт) - це початковий стан inputState
        date: ''
    })



    const dataToSend = {
        dateInputHandler: event => setInputState(prevState => { return ({ ...prevState, date: event.target.value }) }),
        amountInputHandler: event => setInputState(prevState => { return ({ ...prevState, amount: event.target.value }) }),
        titleInputHandler: event => setInputState(prevState => { return ({ ...prevState, title: event.target.value }) }),
        today: new Date().toISOString().split('T')[0],
        state: inputState
    }

    const formSubmitHandler = event => {
        event.preventDefault()// reventDefault() запобігає відпрацюванню чогось по замовчуванню, наприклад в цьому випадку треба відключити відправку форми при натисканні на button.

        // додав перевірку чи заповнені всі поля форм + якщо всі поля заповнені тільки тоді спрацює закриття всіх input і кнопки cancel
        if (inputState.title && inputState.amount && inputState.date) {
            


            props.onSaveExpenseData(inputState) // А тут, в дочірньому елементі вже цю передану функцію треба викликати
            // таким чином в React працює зворотній зв'язок, так тут передаються дані від дочірніх до батьківських елементів (тобто на рівень вище) 

            setInputState({
                title: '',    //користуючись useState можна також після передачі даних до нового об'єкту (після натискання button) очистити поля форми (вказати новий стан на вході функції так сказати) за допомогою атрибуту value, який по замовчуванню є вбулованим атрибутом input (так звана двостороння прив'язка)
                amount: '',
                date: ''
            })

            
            changeStateComponent(() => false)     /*керує станом FormInput через props (коли нажимається кнопка add expense => дані висилаються + закриваються поля input + кнопка cancel) */
            

        }
    }
    
    let changeStateComponent

    const getDataFromComponent = setState => changeStateComponent = setState
    



    return (// якщо button знаходиться між тегами form, то при натисканні кнопки дані форми будуть відправлені
        <form onSubmit={formSubmitHandler}>
            <FormInput data={dataToSend} onGetData={getDataFromComponent} />
        </form>
    )
}

export default ExpenseForm