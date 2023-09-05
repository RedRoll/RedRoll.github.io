import { useState } from "react";

import Expense from "./Components/Expenses/Expense";

import NewExpense from "./Components/NewExpense/NewExpense";


const initialSataExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2020, 2, 22),
  },
];




const App = () => {

  const [expenses, setExpenses] = useState(initialSataExpenses)


  const expenseHandler = (expenseData) => { // функція, яка отримує дані з дочірнього елементу
    console.log('data here')
    // для того щоб рендер ExpenseItem пройшов успішно, треба трошки змінити значення ключа date, тобто використати ті дані, які є в отримуваному об'єкті ExpenseData і зміеити ключ date:'2020-02-22' на date: new Date(2020-02-22). Тому що при рендері компоненту ExpenseDate будуть використовуватись влаштовані методи об'єкту new Date, які не будуть працювати з постим стрічковимс знаяченням, яке передається по замовчуванню з форми.
    expenseData['date'] = new Date(expenseData.date)
    expenseData['amount'] = Number(expenseData.amount) // змінив тип данних на число, бо в кінцевий об'єкт приходила стрічка з числом

    
    setExpenses(prevExpenseData => {
      return(
        [expenseData, ...prevExpenseData]
      )
    })
    
    
  }
  

  return (
    <div>
      <NewExpense onExpenseRecive={expenseHandler} /> {/* передача функції отримання даних в дочірній елемент*/}

      {/* можна використати такий синтаксис (рядок під коментом), тоді в дочірньому компоненті можна буде деструктуризовати об'єкт на змінні. ВАЖЛИВО!!! Деструктуризовати вийде тільки, якщо параметри будуть передані таким синтаксисом, як нижче (окремо передані параметри) */}
      {/* <ExpenceItem title = {expenses[0].title} amount = {expenses[0].amount} date = {expenses[0].date} /> */}

      {/* можна також просто передати дані, а в дочіреьому елементі скористатись ними через props.data....  і так далі  */}

      <Expense data={expenses} />

    </div>
  );
}

export default App;

// shift + alt + f - format document
