import React, {useRef} from "react"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addItem} from "../actions/actions";



const AddItem = (props) => {

    let textChange = useRef("")

    let getCurrentValue = () => {
        let isActive = false
        let isCheckbox = false
        let id = Math.floor(Math.random() * 10 * props.toDo.length)
        let text = textChange.current.value
        props.addItem({text, id, isActive, isCheckbox})
        textChange.current.value = " "
    }

    return (
        <p>
            <label htmlFor="new-task">Add Item</label><input id="new-task" type="text"  ref={textChange}/>
            <button onClick={getCurrentValue}>Add</button>
        </p>

    )
};

export default connect(
    state => ({
        toDo: state.form.toDo

    }),
    dispatch => bindActionCreators({
        addItem
    }, dispatch)
)(AddItem);