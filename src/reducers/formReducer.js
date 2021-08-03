import {
    ADD_ITEM, ADD_TO_COMPLETED, ADD_TODO,
    DELETE_IN_COMPLETED, DELETE_IN_TODO,
    HIDE_SHOW_COMPLETED, HIDE_SHOW_INPUT, SET_VALUE_COMPLETED,
    SET_VALUE_TODO
} from '../constants';


const ACTION_HANDLERS = {
    [ADD_ITEM]: (state, action) => {
        return {
            ...state,
            toDo: [...state.toDo, action.payload],
        }
    },
    [ADD_TO_COMPLETED]: (state, action) => {
        return {
            ...state,
            toDo: state.toDo.filter(elem => elem.id !== action.payload.id),
            completed: [...state.completed, action.payload]
        }
    },
    [ADD_TODO]: (state, action) => {
        return {
            ...state,
            completed: state.completed.filter(elem => elem.id !== action.payload.id),
            toDo: [...state.toDo, action.payload]
        }
    },
    [DELETE_IN_TODO]: (state, action) => {
        return {
            ...state,
            toDo: state.toDo.filter(elem => elem.id !== action.payload),
        }
    },
    [DELETE_IN_COMPLETED]: (state, action) => {
        return {
            ...state,
            completed: state.completed.filter(elem => elem.id !== action.payload),
        }
    },
    [HIDE_SHOW_INPUT]: (state, action) => {
        return {
            ...state,
            toDo: state.toDo.map(elem => {
                if (elem.id === action.payload.id) {
                    elem.isActive = action.payload.active
                    return elem
                }
                return elem
            })

        }
    },
    [HIDE_SHOW_COMPLETED]: (state, action) => {
        return {
            ...state,
            completed: state.completed.map(elem => {
                if (elem.id === action.payload.id) {
                    elem.isActive = action.payload.active
                    return elem
                }
                return elem
            })

        }
    },
    [SET_VALUE_TODO]: (state, action) => {
        return {
            ...state,
            toDo: state.toDo.map(elem => {
                if(elem.id === action.payload.id) {
                    elem.text = action.payload.text
                    return elem
                }
                return elem
            })
        }
    },
    [SET_VALUE_COMPLETED]: (state, action) => {
        return {
            ...state,
            completed: state.completed.map(elem => {
                if(elem.id === action.payload.id) {
                    elem.text = action.payload.text
                    return elem
                }
                return elem
            })
        }
    }
}


const initialState = {
    toDo: [
        {id: 10000, text: 'Pay Bills', isActive: false, isCheckbox: false},
        {id: 20000, text: 'Go Shopping', isActive: true, isCheckbox: false}
    ],
    completed: [{id: 30000, text: 'See the Doctor', isActive: false, isCheckbox: true}],

}

const formReducer = (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}

export default formReducer;