import React from 'react'
import WorkListHeader from '../../components/WorkListHeader'
import "./mytask.css"
export default function MyTask() {
  return (
    <section className="work-list-container">
      <WorkListHeader />
      <div className="tasks-container">
        <div className="tasks">
          <div className="task-date-as-title">
            TODAY, AUG 4/2018
          </div>
          <div className="task-items-container">
            <div className="task-item-card">
              <div className="task-check-icon">
                <img src="" alt="" />
              </div>
              <div className="task-content">
                <div className="task-text"> Go fishing with Stephen</div>
                <div className="task-date">9:00am</div>
              </div>
              <div className="task-indicator-bar"></div>
            </div>
            <div className="task-item-actions">
              <div className="edit-task-icon">
                <img src="" alt="" /></div>
              <div className="delete-task-icon">
                <img src="" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
