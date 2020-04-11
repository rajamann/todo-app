export const ADD_TODO = 'ADD_TODO'

export const addTodo = () => {
    return {
        type: ADD_TODO,
        payload: {id: 2, text: 'Make tea', completed: false}
    }
}