import styles from './Form.module.css'
import { useState } from 'react'


const Form = props => {

    const initialInputState = { // створив змінну стартового стану, щоб не прописувати цей об'єкт кілька разів (він буде потрібен кілька разів в такому стані)
        currentSavings: '',
        yearlyContribution: '',
        expectedReturn: '',
        duration: ''
    }

    const [inputData, setInputData] = useState(initialInputState)



    const changeHandler = event => setInputData(prevState => {   // тут без змін

        const { id, value } = event.target  //деструктуризація обєкту event (id = id(id ідентифікатор input) / value = value(актуальне value з input))

        return {
            ...prevState, // вертається попередній стан 
            [id]: value    // + змінюється актуальне значення (з мінюється значення стану актуального input - де зараз проходить event onChange) id треба писати в квадратних дужках, бо так це буде динамічне значення, а не строго закодована назва(якщо написати без квадратних дужок в input додасть нове значення з назвою id)
        }

    })

    const submitHandler = event => {
        event.preventDefault() // запобігає перезавантаженню сторінки та скидуванню state (при перезавантаженні state автоматично скидується)
        props.onCalculate(inputData)
    }

    const resetHandler = () => {
        props.onReset()
        setInputData(initialInputState)
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="currentSavings" >Current Savings ($)</label> {/*htmlFor зв'язує label з form, тобто це все стає єдиним цілим. Клікнувши на текст label активується поле вводу input*/}
                    <input type="number" id="currentSavings" onChange={changeHandler} />
                </p>
                <p>
                    <label htmlFor="yearlyContribution">Yearly Savings ($)</label>
                    <input type="number" id="yearlyContribution" onChange={changeHandler} />
                </p>
            </div>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="expectedReturn">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expectedReturn" onChange={changeHandler} />
                </p>
                <p>
                    <label htmlFor="duration" >Investment Duration (years)</label>
                    <input type="number" id="duration" onChange={changeHandler} />
                </p>
            </div>
            <p className={styles.actions}>
                <button type="reset" className={styles.buttonAlt} onClick={resetHandler}>
                    Reset
                </button>
                <button type="submit" className={styles.button}>
                    Calculate
                </button>
            </p>
        </form>
    )
}

export default Form