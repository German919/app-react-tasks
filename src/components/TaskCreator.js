import React, { useState } from "react"

const TaskCreator = ({addNewTask}) => {

    const[newTaskName, setNewTaskName] = useState("")
    
    const updateNewTaskValue = e => setNewTaskName(e.target.value)

    const createNewTask = () =>{
        
        addNewTask(newTaskName)
        setNewTaskName("")
    }
    return ( 
        <div className="my-1">
            <input
                type="text"
                className="form-control"
                value={newTaskName}
                onChange={updateNewTaskValue}
            />
            <button className="btn btn-primary" onClick={createNewTask}>Add Task</button>
        </div>
     );
}
 
export default TaskCreator;