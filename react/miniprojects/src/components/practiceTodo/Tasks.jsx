import React from 'react'
import CompletedPart from './CompletedPart'

const Tasks = ({tasks, onDelete}) => {

  return (
   <>
   <ul >
       {tasks.map((task, index)=>(
        <CompletedPart key={index} 
         task= {task}
         onDelete= {()=>onDelete(index)}
        />
       ))} 
   </ul>
   </>
  )
}

export default Tasks
