import React from 'react';


// jsx
const List = (props) => {
    
    console.log(props);
    const {todos}=props;
    return <div > < ul > unordered list </ul></div >
};

export default List;