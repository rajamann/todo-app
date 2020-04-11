import * as actions from '../actions'
const initialState = []

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.ADD_TODO:
            return [
                ...state,
                {
                    id: action?.payload?.id,
                    text: action?.payload?.text,
                    completed: action?.payload?.completed
                }
            ]
        case actions.TOGGLE_TODO:
            return state.map(todo => 
                (todo.id === action.payload) ? {...todo, completed: !todo.completed} : todo)
        default:
            return state
    }
}

export default todoReducer