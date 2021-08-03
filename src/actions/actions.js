import {
    ADD_ITEM, DELETE_IN_COMPLETED,
    DELETE_IN_TODO, HIDE_SHOW_INPUT,
    ADD_TO_COMPLETED, HIDE_SHOW_COMPLETED,
    ADD_TODO, SET_VALUE_TODO, SET_VALUE_COMPLETED
} from '../constants';

export const addItem = (data) => (dispatch) => {
    setTimeout(() => {
        dispatch({
            type: ADD_ITEM,
            payload: data
        })
    }, 0)
}

export const hideShowInput = (data) => ({type: HIDE_SHOW_INPUT, payload: data})
export const setValueCompleted = (data) => ({type: SET_VALUE_COMPLETED, payload: data})
export const setValueToDO = (data) => ({type: SET_VALUE_TODO, payload: data})
export const hideShowInputCompleted = (data) => ({type: HIDE_SHOW_COMPLETED, payload: data})
export const addToCompleted = (data) => ({type: ADD_TO_COMPLETED, payload: data})
export const deleteInCompleted = (text) => ({type: DELETE_IN_COMPLETED, payload: text})
export const deleteInTodo = (id) => ({type: DELETE_IN_TODO, payload: id})
export const addToDo = (data) => ({type: ADD_TODO, payload: data})
