import React, { useState } from 'react'

const CompletedPart = ({task, onDelete}) => {
    const [checked, setChecked] = useState(false);

    const handleChange = ()=>{
        setChecked(!checked);
    }
  return (
   <>
    <li>
        <input type='checkbox' checked={checked} onChange={handleChange}/>
        <span style={{
            textDecoration : checked ? "line-through" : "none"
        }}>
            {task}
        </span>
        <button onClick={onDelete}>Delete</button>
    </li>
   </>
  )
}

export default CompletedPart
