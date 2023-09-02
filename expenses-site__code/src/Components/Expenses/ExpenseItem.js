import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'




// function ExpenceItem ({title, amount, date}) {
// // можна скористатися можливістю деструктуризації об'єкту (переданих даних, які зараз задіяні в цьому копоненті) переданого в батьківському елементі і вказати назви самих ключів, щоб не прописувати props.something.something

//     return (
//         <div className='expense-item'>
//             <div>{date.toISOString()}</div>
//             <div className='expense-item__description'>
//                 <h2>{title}</h2>
//                 <div className='expense-item__price'>{amount}</div>
//             </div>
//         </div>
//     )
// }

// .toIsoString() - використовується для перетворення об'єкта Date у рядкове подання ISO 8601. ISO 8601 - це стандартизований формат дати і часу, який широко викроситовується.

const ExpenseItem = (props) => { //props передає всі вхідні параметри як об'єкт (тобто доступ буде - props.data....)

    // для зміни даних в змінній і подальшого їх рендеру на сторінці потрібно використовувати useState. Бо react при запуску сторінки проходиться тільки раз по всім компонентам і рендерить їх. Навіть якщо якась змінна, яка відповідає за візуалізацію чогось на екрані зміниться, то результату на сторінці ніякого не буде, бо react відрендерив все на початку і другий рах рендерити нічого не буде. А коли до якоїсь змінної приі'язаний useState, то react буде слідкувати за станом цієї змінної і при її зміні відрендерить контент коспоненту ще раз.
    // const [title, setTitle] = useState(props.data.title)

    // const clickHandler = () => setTitle('New Title')


    return (// наслідування стилів з Card компоненту
        <Card className='expense-item'>
            <ExpenseDate date={props.data.date} />
            <div className='expense-item__description'>
                <h2>{props.data.title}</h2>
                <div className='expense-item__price'>${props.data.amount}</div>
            </div>
        </Card>
    )
}



export default ExpenseItem