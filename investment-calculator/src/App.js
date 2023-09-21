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

  const calculate = arrivedData => {
    setData(() => { return arrivedData })
  } 
  

  const readyData = []

  if (data) {


  
    const initialSavings = +data.currentSavings 
    let currentSavings = +data.currentSavings 
    const yearlyContribution = +data.yearlyContribution 
    const expectedReturn = +data.expectedReturn / 100 
    const duration = +data.duration 

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn 
      currentSavings += yearlyInterest + yearlyContribution 

      readyData.push({

        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        initialSavings: initialSavings
      });
    }

    console.log('executed')
    
  }

  return (
    <Wrapper>
      <Header />
      <Form onCalculate={calculate} setState={setData} />
      <List data={readyData} />
    </Wrapper>
  );
}

export default App;
