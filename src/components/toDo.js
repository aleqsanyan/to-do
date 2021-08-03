import React, {Fragment, useRef} from "react"
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {addToCompleted, deleteInTodo, hideShowInput, setValueToDO} from "../actions/actions";

const Todo = (props) => {

    let checked = (e, id, text, isActive) => {
        let isCheckbox = e.target.checked
        props.addToCompleted({id, isCheckbox, isActive, text})

    }

    let edit = (id, isActive) => {
        let active = !isActive
        props.hideShowInput({id, active})
    }

    let getValue = (id, e) => {
        let text = e.target.value
        props.setValueToDO({id, text})
    }

    let remove = (id) => {
        props.deleteInTodo(id)
    }

    return (
        <Fragment>
            <h3>Todo</h3>
            <ul id="incomplete-tasks">
                {props.toDo && props.toDo.map((elem) => {
                    return <li key={elem.id}><input type="checkbox" onChange={(e) => checked(e, elem.id, elem.text, elem.isActive)} />
                        {!elem.isActive && <label>{elem.text}</label>}
                        {elem.isActive && <input type="text" value={elem.text}  onChange={(e) => getValue(elem.id, e)}/>}
                        <button className="edit" onClick={() => edit(elem.id, elem.isActive)}>Edit</button>
                        <button className="delete" onClick={() => remove(elem.id)}>Delete</button>
                    </li>
                })}
            </ul>
        </Fragment>
    )
}

export default connect(state => ({
    toDo: state.form.toDo
}), dispatch => bindActionCreators({
    hideShowInput, deleteInTodo,
    addToCompleted, setValueToDO

}, dispatch))(Todo);