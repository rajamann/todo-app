import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions/index'

const AddTodo = ({dispatch}) => {
    let input
    const handleOnSubmit = (event) => {
        event.preventDefault()
        dispatch(addTodo(input.value))
        input.value = ''
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input type='text' ref={node => input = node} />
            <button type='submit'>Add Todo</button>
        </form>
    )
}

export default connect()(AddTodo)