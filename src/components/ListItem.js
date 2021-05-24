import React from 'react';


// jsx
const ListItem = ({todo,id}) => {
    const handleClick=(e)=>{
        console.log(e.target.innertext);
      }
    return < li onClick={handleClick} >{todo}</li>
};

export default ListItem;