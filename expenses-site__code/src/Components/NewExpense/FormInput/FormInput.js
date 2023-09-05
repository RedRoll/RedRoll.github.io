import { useState } from 'react'



const FormInput = (props) => {
    const [isClicked, setClick] = useState(false)

    const clickHandlerAdd = () => {
        setClick(() => true)
        props.onGetData(setClick)
    }
    
    const clickHandlerCancel = () => setClick(() => false)
    // контент який буде відображатись в залежності від стану 
    const content =
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" onChange={props.data.titleInputHandler} value={props.data.state.title} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min='0.01' step='0.01' onChange={props.data.amountInputHandler} value={props.data.state.amount} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min='2019-01-01' max={props.data.today} onChange={props.data.dateInputHandler} value={props.data.state.date} />
            </div>
        </div>

    return (
        <div>
            {isClicked && content}
            <div className='new-expense__actions'>
                <button className={isClicked ? 'active' : 'inActive'} onClick={clickHandlerCancel}>Cancel</button>
                <button  type='submit' onClick={clickHandlerAdd}>Add expense</button>
            </div>
        </div>
    )
}

export default FormInput