import styles from './Form.module.css'
import { useState } from 'react'


const Form = props => {

    const initialInputState = {
        currentSavings: '',
        yearlyContribution: '',
        expectedReturn: '',
        duration: ''
    }

    const [inputData, setInputData] = useState(initialInputState)



    const changeHandler = event => setInputData(prevState => {

        const { id, value } = event.target
        return {
            ...prevState,
            [id]: value
        }


    })

    const submitHandler = event => {
        event.preventDefault()
        if (inputData.currentSavings && inputData.yearlyContribution && inputData.expectedReturn && inputData.duration) {
            props.onCalculate(inputData)
            console.log('data departed to app')
        }
    }


    const resetHandler = () => {
        setInputData(() => initialInputState)
        props.setState(null)
    }

    


    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="currentSavings" >Current Savings ($)</label>
                    <input type="number" id="currentSavings" value={inputData.currentSavings} onChange={changeHandler} />
                </p>
                <p>
                    <label htmlFor="yearlyContribution">Yearly Savings ($)</label>
                    <input type="number" id="yearlyContribution" value={inputData.yearlyContribution} onChange={changeHandler} />
                </p>
            </div>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="expectedReturn">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expectedReturn" value={inputData.expectedReturn} onChange={changeHandler} />
                </p>
                <p>
                    <label htmlFor="duration" >Investment Duration (years)</label>
                    <input type="number" id="duration" value={inputData.duration} onChange={changeHandler} />
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