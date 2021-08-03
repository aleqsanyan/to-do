import React from "react"
import AddItem from "./addItem";
import Todo from "./toDo";
import Completed from "./completed";

const Index = () => {
    return (
        <div className="container">
            <AddItem/>
            <Todo/>
            <Completed/>
        </div>
    )
}

export default Index;