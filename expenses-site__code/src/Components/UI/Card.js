import './Card.css'
// Потрібні компоненти, які мають наслідувати стилі обгорнуті і знаходяться в середині компоненту Card. Але так просто, з коробки компонент Card працювати не буде (якщо на цьому кроці, просто обгорнувши потрібні компоненти подивитись на результат, то весь контент тих самих компонентів зникне). Для того, щоБ компоненти почали відображатись в середині Card, треба додати спеціальний prop = props.children. Цей проп зарезервований react, як спеціальний і дасть можливість відображати контент(компоненти) обгорнуті у компонент Card. 

// props.children - це завжди те, що знаходиться між відкриваючим та закриваючим тегом Card (в даному випадку тегом Card, але це просто назва, так що назвати можна і по іншому)

// Після додання props.children контент компонентів знову відображається, але зникли стилі! Вони зникли через те, що зараз компонент обгорнутий не простим div, якому заданий клас для стилізації, він обгорнутий у кастомний компонент (можна теж сказати кастомний div але з іншою назвою). А кастомні компоненти-обгортки підтримують тільки ті класи які будуть вказані самим розробником.

const Card = (props) => {

    const classes = 'card ' + props.className //В цій змінній є 2 речі. card - це клас по дефолту, який буде завжди вказаний для Card-компоненту, як стандартний. Далі вказуються дочірні класи (props.className значить класи дітей, тобто компонентів, які знаходяться в середині Card) ВАЖЛИВА РІЧ!!!!! ЯКЩО ПІСЛЯ CARD НЕ ПОСТАВИТИ ПРОБІЛ ТО ВСЕ ЗЛАМАЄТЬСЯ!!!! ПРАЦЮВАТИ НОРМАЛЬНО НЕ БУДЕ

    return <div className={classes}>{props.children}</div> // тут вказується модифікований клас для самого Card + класи компонентів
}

export default Card

// Часто буває так, що деякі стилі повторюються і треба дублювати код, щоб цього уникнути можна створювати так звані компоненти-обгордки, які будуть нести в собі код, який потрібен іншим компонентам (мається на увазі код, який буде переходити елементам , як нащадкам)