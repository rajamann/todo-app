import React from 'react'

const Todo = ({handleOnChange, todo}) => {
    return(
    <div>
        <input type='checkbox' checked={todo.completed} onChange={handleOnChange} />
        {todo.text}<hr />
    </div>
    )
}

export default Todo