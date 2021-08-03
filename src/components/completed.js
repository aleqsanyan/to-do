import React, {Fragment} from "react"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {addToDo, hideShowInputCompleted, deleteInCompleted, setValueCompleted} from "../actions/actions";


const Completed = (props) => {


    let edit = (id, isActive) => {
        let active = !isActive
        props.hideShowInputCompleted({id, active})
    }

    let remove = (id) => {
        props.deleteInCompleted(id)
    }

    let checked = (e, id, text, isActive) => {
        let isCheckbox = e.target.checked
        props.addToDo({id, isCheckbox, isActive, text})
        //console.log(e.target.checked)
    }

    let getValue = (id, e) => {
        let text = e.target.value
        props.setValueCompleted({id, text})
    }


    return (
        <Fragment>
            <h3>Completed</h3>
            <ul id="completed-tasks">
                {props.completed && props.completed.map(elem => {
                    return <Fragment>
                        <li key={elem.id}>
                            <input type="checkbox" checked={elem.isCheckbox}
                                   onChange={(e) => checked(e, elem.id, elem.text, elem.isActive)}/>
                            {!elem.isActive && <label>{elem.text}</label>}
                            {elem.isActive &&
                            <input type="text" value={elem.text}
                                   onChange={(e) => getValue(elem.id, e)}/>}
                            <button className="edit" onClick={() => edit(elem.id, elem.isActive)}>Edit
                            </button>
                            <button className="delete" onClick={() => remove(elem.id)}>Delete</button>
                        </li>

                    </Fragment>
                })
                }
            </ul>
        </Fragment>
    )
}

export default connect(state => ({
    completed: state.form.completed
}), dispatch => bindActionCreators({
    hideShowInputCompleted, addToDo,
    deleteInCompleted, setValueCompleted
}, dispatch))(Completed)