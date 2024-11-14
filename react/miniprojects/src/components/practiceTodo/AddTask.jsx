import React, { useState } from 'react'

const AddTask = ({addTask}) => {
    const [newTask, setNewTask] = useState("");

    const handleAddTask = ()=>{
        if(newTask.trim()){
            addTask(newTask)
            setNewTask("");
        }
    }
  return (
    <>
        <h1>To-Do Lists</h1>
        <input type='text' placeholder='Add a new task' value={newTask} onChange={(e)=>setNewTask(e.target.value)} />
        <button onClick={handleAddTask}>ADD TASK</button>
    </>
  )
}

export default AddTask
