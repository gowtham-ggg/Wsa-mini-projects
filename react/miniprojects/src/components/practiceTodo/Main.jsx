import React, { useState } from 'react'
import AddTask from './AddTask';
import Tasks from './Tasks';

const Main = () => {
    const [tasks, setTask] = useState([]);

    const addTask = (task)=>{
        setTask([...tasks, task]);
    }

    const deleteTask = (index)=>{
        const newTask = tasks.filter((_,i)=>i !== index);
        setTask(newTask);

        }
           
  return (
    <div>
      <AddTask addTask={addTask}/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  )
}

export default Main
