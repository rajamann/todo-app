import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import Todo from '../components/Todo'

const TodoList = ({todos, toggleTodo}) => {
    const renderTodos = () => {
        return todos.map(todo => <Todo handleOnChange={() => toggleTodo(todo.id)} todo={todo} />)
    }

    return (
        <div>
            {renderTodos()}
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)