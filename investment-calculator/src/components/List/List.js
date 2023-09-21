import ListItem from "./ListItem"

const List = props => {

    
    if(props.data.length === 0) {
        return <h1 style={{textAlign: 'center'}}>No Calculations yet.</h1>
    }

    return (
        <ul style={{padding: 0}}>
            <ListItem data={props.data}/>
        </ul>
    )
}

export default List