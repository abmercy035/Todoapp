import React, { useState } from 'react'
import WorkListHeader from '../../components/WorkListHeader'
import deleteIcon from "../../assets/icons/delete.svg"
import editIcon from "../../assets/icons/pencil-alt.svg"
import "./mytask.css"
import Input from '../../components/input/Input'
import Task from '../../components/task/Task'
export default function MyTask() {
  const [ isChecked, setIsChecked ] = useState(false);
  const handlecheck = () => {
    setIsChecked(!isChecked)
  }
  const tasklist = {
    "TODAy, AUG 4/2018": [
      {
        note: "Meet according with design team...",
        time: "10:00am",
        done: true
      },
      {
        note: "Read the book Zlatan...",
        time: "02:00pm",
        done: false
      },
      {
        note: "Read the book Zlatan...",
        time: "02:00pm",
        done: true
      },
      {
        note: "Meet according with design team...",
        time: "10:00am",
        done: true
      },
      {
        note: "Read the book Zlatan...",
        time: "02:00pm",
        done: false
      },
      {
        note: "Meet according with design team...",
        time: "10:00am",
        done: true
      },
      {
        note: "Read the book Zlatan...",
        time: "02:00pm",
        done: false
      },
      {
        note: "Read the book Zlatan...",
        time: "02:00pm",
        done: true
      },
      {
        note: "Meet according with design team...",
        time: "10:00am",
        done: true
      },
      {
        note: "Read the book Zlatan...",
        time: "02:00pm",
        done: false
      },
      {
        note: "Meet according with design team...",
        time: "10:00am",
        done: true
      },
      {
        note: "Read the book Zlatan...",
        time: "02:00pm",
        done: false
      },
      {
        note: "Read the book Zlatan...",
        time: "02:00pm",
        done: true
      },
      {
        note: "Meet according with design team...",
        time: "10:00am",
        done: true
      },
      {
        note: "Read the book Zlatan...",
        time: "02:00pm",
        done: false
      },
      {
        note: "Meet according with design team...",
        time: "10:00am",
        done: true
      },
      {
        note: "Read the book Zlatan...",
        time: "02:00pm",
        done: false
      },
      {
        note: "Read the book Zlatan...",
        time: "02:00pm",
        done: true
      },
      {
        note: "Meet according with design team...",
        time: "10:00am",
        done: true
      },
      {
        note: "Read the book Zlatan...",
        time: "02:00pm",
        done: false
      },
      {
        note: "Read the book Zlatan...",
        time: "02:00pm",
        done: true
      },
      {
        note: "Meet according with design team...",
        time: "10:00am",
        done: true
      },
      {
        note: "Read the book Zlatan...",
        time: "02:00pm",
        done: false
      },
      {
        note: "Read the book Zlatan...",
        time: "02:00pm",
        done: true
      },
      {
        note: "Go fishing with Stephen...",
        time: "05:00pm",
        done: false
      } ],
    "TOMORROW, AUG 5/2018": [  {
      note: "Meet according with design team...",
      time: "10:00am",
      done: false
    },
    {
      note: "Read the book Zlatan...",
      time: "02:00pm",
      done: false
    },
    {
      note: "Go fishing with Stephen...",
      time: "05:00pm",
      done: false
    } ],
  }
  return (
    <section className="work-list-container">
      <WorkListHeader />
      <div className="tasks-container">
        {
          Object.entries(tasklist).map(([ key, value ]) => {
            return (
              <div className="tasks">
                <div className="task-date-as-title">
                  { key }
                </div>
                { (typeof value === "object") && value.map(val => <Task taskData={ val } />) }
              </div>
            )
          })
        }
      </div>
    </section >
  )
}
