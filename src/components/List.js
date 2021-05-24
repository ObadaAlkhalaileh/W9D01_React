import React from 'react';
import ListItem from './ListItem'


// jsx
const List = (props) => {
    
    console.log(props);
    const {todos}=props;
    return <div > < ul > 
    {todos.map((elem,i)=>{
        return <ListItem key={i} todo={elem.todo} id={elem.id} />
    })}
        </ul></div >
};

export default List;