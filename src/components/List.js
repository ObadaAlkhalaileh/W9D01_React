import React from 'react';
import ListItem from './ListItem'


// jsx
const List = (props) => {
    
    console.log(props);
    const {todos}=props;

    // const todoList=todos.map((elem,i)=>{
    //     return <ListItem key={i} todo={elem.todo} id={elem.id} />
    // })
    return <div > < ul > 
     {todos.map((elem,i)=>{
         return <ListItem key={i} todo={elem.todo} id={elem.id} />
    })}
    {/* {todoList} */}
        </ul></div >
};

export default List;