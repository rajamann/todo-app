import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const TodoList = ({dispatch, todos}) => {
    const renderTodos = () => {
        return todos.map(todo => <div>{todo.text}</div>)
    }

    return (
        <div>
            {renderTodos()}
            <button onClick={() => dispatch(addTodo())}>Add Todo</button>
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps)(TodoList)