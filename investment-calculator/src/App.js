import styled from "styled-components";
import { useState } from "react";

// components 
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import List from './components/List/List'

// styled wrapper
const Wrapper = styled.div`
margin-right: 10px;
margin-left: 10px;
`
const App = () => {



  const [data, setData] = useState(null)

  const calculate = arrivedData => setData(arrivedData) // при натисканні кнопки 'calculate' в формі, запуститься функція calculate, змінивши стан data. Змінений стан data змусить запуститись код файлу (поточного файлу) ще раз, таким чином запуститься код, той зо нижче (який відповідає за наповнення константи readyData), який зробить все необхідне для обробки даних і додаванні їх у константу readyData, на основі якої і відрендеряться потрібні списки.(readyData буде передана до компоненту, який відповідає за рендер - List)


  const readyData = []

  if (data) {// код запуститься, якщо в data будудуть присутні якісь дані

    
    // визначення змінних на основі даних з input
    const initialSavings = +data.currentSavings // 10000 (приклад)
    let currentSavings = +data.currentSavings // 10000
    const yearlyContribution = +data.yearlyContribution //1200
    const expectedReturn = +data.expectedReturn / 100 // відсоток  5 / 100
    const duration = +data.duration // якщо прописати + перед назвою змінної, то дані будуть передані, як числа
console.log('executed')
    // якщо, наприклад один з ключів в об'єкті мав би назву з "-" тере, то синтаксис був би таким: приклад -  +data['current-savings']
    // Така форма запису валідна для доступу до ключа об'єкту, якщо в назаві він має тере.

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn // очікуваний дохід під вказаний відсоток
      currentSavings += yearlyInterest + yearlyContribution // сума заощадженнь + очікуваний дохід + річний внесок (ця сума лишається на наступну ітерацію (бо змінюється змінна => змінена змінна бере участь в наступній ітерації))

      readyData.push({

        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        initialSavings: initialSavings
      });

    }

  }

  const reset = () => setData('')

  return (
    <Wrapper>
      <Header />
      <Form onCalculate={calculate} onReset={reset} />
      <List data={readyData} />
    </Wrapper>
  );
}

export default App;
