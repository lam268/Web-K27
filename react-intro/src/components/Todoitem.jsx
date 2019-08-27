import React from 'react';

const TodoItem = (props) => {
    const handledone = (event) => {
        props.updateTodoItem(props.itemIndex);
    }
    const handledelete = (event) => {
        props.deleteTodoItem(props.itemIndex);
    }

    return (
        <div className='mt-2'>
            {props.finished ? <strike className='mr-3'>{props.value}</strike> : <span className='mr-3'>{props.value}</span>}
            <button className='btn btn-success mr-1' onClick={handledone}>Done</button>
            <button className='btn btn-danger' onClick={handledelete}>Delete</button>
        </div>
    );
}

export default TodoItem;