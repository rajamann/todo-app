import * as actions from '../actions'
const initialState = [{id: 1, text: 'Buy milk', completed: false}]

const todoReducer = (state = initialState, action) => {
    console.log('action', action)
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
        default:
            return state
    }
}

export default todoReducer