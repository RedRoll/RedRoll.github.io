import Chart from "./Chart";


const ExpensesChart = props => { // відфільтровані витрати приходять сюди у вигляді props
    

    
    const data = [
        {label:'Jan', value: 0},
        {label:'Feb', value: 0},
        {label:'Mar', value: 0},
        {label:'Apr', value: 0},
        {label:'May', value: 0},
        {label:'Jun', value: 0},
        {label:'Jul', value: 0},
        {label:'Aug', value: 0},
        {label:'Sep', value: 0},
        {label:'Oct', value: 0},
        {label:'Nov', value: 0},
        {label:'Dec', value: 0}
        
    ]

    // потім з відфільтрованих витрат беруться дані, які змінюють массив data

    for (const item of props.filteredExpenses) { // такий запис for означає, що кожен елемент props.expenses пройде ітерацію (елементу надана назва const item. За цією назвою можна звертатися до того самого елементу, що і відбуважться в тілі for)
        const monthOfExpense = item.date.getMonth() // змінна з номером місяця (від 0 до 11)

        // ВАЖЛИВО!!!! ЯКЩО PROPS.FILTEREDEXPENSES БУВ БИ ОБ'ЄКТОМ, ТО В FOR ЗАМІСТЬ OF ТРЕБА ПИСАТИ IN
    
        data[monthOfExpense].value += item.amount // в цьому рядку змінюються дані массиву data (зміна пройде в тому єлементі, яикй буде відповідати порядковому числу в массиві, тобто номеру місяця (monthOfExpense). Змінюватись буде значення value, до нього буде додаватись число з актуального ітерованого елементу. 
    }

    // Якщо, наприклад буде 2 витрати в одному місяці(2 ітеровані елементи з массива props.readyExpenses, які мають в date один і той же місяць), то спочатку в value додасться витрата з першого місяця а потім до тієї суми додасться витрата з дуругого місяця(коли буде ітеруватись другий елемент массиву)


    return(
        <Chart data={data} /> // массив даних data (змінений на основі витрат отриманих через props) відправлено до колонки 
    )
}

export default ExpensesChart