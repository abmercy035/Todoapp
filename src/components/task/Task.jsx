import React, { useState } from 'react'
import deleteIcon from "../../assets/icons/delete.svg"
import editIcon from "../../assets/icons/pencil-alt.svg"

export default function Task({ taskData }) {
 const [ isChecked, setIsChecked ] = useState(taskData?.done);
 const handlecheck = () => {
  setIsChecked(!isChecked)
 }
 const taskOnDoubleClicked = (e) => {
  e.currentTarget.classList.toggle("active")
 }
 return (
  <div onDoubleClick={ taskOnDoubleClicked } className="task-items-container">
   <div className={ isChecked ? "task-item-card done" : "task-item-card" }>
    <div className="task-check-icon">
     <div class="container">
      <input type="checkbox" defaultChecked={ true } id="cbx2" style={ { display: "none" } } checked={ isChecked } />
      <label htmlFor="cbx2" className="check" onClick={ handlecheck }>
       <svg width="18px" height="18px" viewBox="0 0 18 18">
        <path strokeWidth="2px" stroke="royalblue" d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
        <polyline strokeWidth="2px" stroke="#fff" points="1 9 7 14 15 4"></polyline>
       </svg>
      </label>
     </div>
    </div>
    <div className="task-content">
     <div className="task-text">{ taskData?.note }
     </div>
     <div className="task-date">{ taskData?.time }</div>
    </div>
    <div className="task-indicator-bar"></div>
   </div>
   <div className="task-item-actions">
    <div className="task-action-icon edit-task-icon">
     <img src={ editIcon } alt="" />
    </div>
    <div className="task-action-icon delete-task-icon">
     <img src={ deleteIcon } alt="" />
    </div>
   </div>
  </div>
 )
}

