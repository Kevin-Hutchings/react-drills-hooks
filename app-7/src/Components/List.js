import React from 'react';
import Todo from './Todo';

const List = (props) => {
    const list = props.tasks.map((el, index) => {
        return <Todo key={index} task={el} />
    });
    
    return(
        <div> {list} </div>
    )
}

export default List;