import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const today = new Date().toISOString().split('T')[0];
    // метод spit() використовується для розбиття стрічки на массив стрічок, використовуючи розділювач, який вказується в дужках(в данному випадку розділювач вказаний великою буквою Т, бо змінна today має такий вигляд: 2023-08-18T10:43:50.990Z. Тобто 'T' розділяєя стрічку на 2 стрічкові елементи массиву і вибирає перший з них [0])

    // const textChangeHandler = event => console.log(event.target.value)

    //Кожного разу, коли спрацьовує обробник івенту (в даному випадку це onChange) можна повернути (щоб використати в своїх цілях) об'єкт даного івенту(event). Цей об'єкт event має багато різних ключів-значеннь, до яких є доступ. В даному випадку використовується ключ value, який повертає значення об'єкту(current об'єкту, на якому спрацював event) event на даний момент(дані які на данний момент введені в input)

    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [enteredAmount, setEnteredAmount] = useState('')
    // const [enteredDate, setEnteredDate] = useState('')
    // Також альтернативою такого багатострічково запису станів є об'єднання всіх даних змінних в одному стані, використавги об'єкт для цього
    const [inputState, setInputState] = useState({
        title: '',
        amount: '', // ці всі 3 ключі-значення (цей весь об'єкт) - це початковий стан inputState
        date: ''
    })

    const [isClicked, setClick] = useState(false)

    const textChangeHandler = event => setInputState(prevState => { // при спрацьовуванні обробника івенту буде визвана функція зміни загального стану input - setInputState, яка буде мати в собі значення попереднього стану - prevState інших input, які зараз не задіяні в event (щоб він не загубився) + зміна актуального input(заміна, бо змінна перезапишеться, якщо надати ключ з тією самою назвою, але це так просто щоб знати)
        return (
            {
                ...prevState,
                title: event.target.value
            }
        )
    })
    // Якщо, наприклад в setInputState замість функції вказати просто об'єкт {} і в середині зміни, які в ньому будуть 

    // {
    //    ...inputState, 
    //    enteredTitle: event.target.value)
    // } 

    // то можливо(але не точно) іноді при спрацьовуванні оновлення стану може передатись не актуальне (наприклад застаріле на один крок). Функція в середині SetInputState це найперевіреніший спосіб отримати найактуальнішу інформацію зміни стану.

    const amountInputHandler = event => setInputState(prevState => {
        return (
            {
                ...prevState,
                amount: event.target.value
            }
        )
    })
    const dateInputHandler = event => setInputState(prevState => {

        return (
            {
                ...prevState,
                date: event.target.value
            }
        )
    })



    const formSubmitHandler = event => {
        event.preventDefault()// reventDefault() запобігає відпрацюванню чогось по замовчуванню, наприклад в цьому випадку треба відключити відправку форми при натисканні на button.

        // додав перевірку чи заповнені всі поля форм + якщо всі поля заповнені тільки тоді спрацює закриття всіх input і кнопки cancel
        if (inputState.title && inputState.amount && inputState.date) {
            const formData = inputState


            props.onSaveExpenseData(formData) // А тут, в дочірньому елементі вже цю передану функцію треба викликати
            // таким чином в React працює зворотній зв'язок, так тут передаються дані від дочірніх до батьківських елементів (тобто на рівень вище) 

            setInputState({
                title: '',    //користуючись useState можна також після передачі даних до нового об'єкту (після натискання button) очистити поля форми (вказати новий стан на вході функції так сказати) за допомогою атрибуту value, який по замовчуванню є вбулованим атрибутом input (так звана двостороння прив'язка)
                amount: '',
                date: ''
            })
            setClick(() => false)
        }
    }

    const clickHandlerAdd = () => {
        setClick(() => true)

    }
    const clickHandlerCancel = () => setClick(() => false)

    let renderedContent = ''

    if (isClicked) {
        renderedContent = <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" onChange={textChangeHandler} value={inputState.title} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min='0.01' step='0.01' onChange={amountInputHandler} value={inputState.amount} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min='2019-01-01' max={today} onChange={dateInputHandler} value={inputState.date} />
            </div>
        </div>
    }




    return (// якщо button знаходиться між тегами form, то при натисканні кнопки дані форми будуть відправлені
        <form onSubmit={formSubmitHandler}>
            {renderedContent}
            <div className='new-expense__actions'>
                <button className={isClicked ? 'active' : 'inActive'} onClick={clickHandlerCancel}>Cancel</button>
                <button className='actions__button' type='submit' onClick={clickHandlerAdd}>Add expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm