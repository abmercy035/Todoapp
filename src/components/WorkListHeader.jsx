import React, { useState } from 'react'
import menu_icon from "../assets/icons/menu.svg"
import './worklistheader.css'
export default function WorkListHeader() {
  const [ filteredList, setFilteredList ] = useState(true);
  const filterList = (e) => {
    setTimeout(() => setFilteredList(prev => !prev), 1000)
    console.log(e.currentTarget.id)
  }
  return (
    <div className='header-container'>
      <div className="header-title">
        Work List
      </div>
      <div className="header-option-icon" onClick={ () => setFilteredList(prev => !prev) }>
        <img src={ menu_icon } alt="" />
      </div>
      <div className="header-nav">
        <div className="nav-item active">Today</div>
        <div className="nav-item">Month</div>
      </div>
      <div className={ filteredList ? "popup-filter-menu" : 'popup-filter-menu show' }>
        <div className="menu-wrapper">
          <label className="opt" htmlFor="incomp-task">
            Incomplete Tasks
            <div class="checkbox-container">
              <input type="radio" name="task-filter" id="incomp-task" defaultChecked={ false } className="task-check" style={ { display: "none" } } onChange={ filterList } />

              <label htmlFor="incomp-task" className="check" >
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path strokeWidth="2px" stroke="royalblue" d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                  <polyline strokeWidth="3px" stroke="green" points="1 9 7 14 15 4"></polyline>
                </svg>
              </label>
            </div>
          </label>
          <label className="opt" htmlFor="comp-task">
            Complete Tasks
            <div class="checkbox-container">
              <input type="radio" name="task-filter" id="comp-task" defaultChecked={ false } style={ { display: "none" } } className="task-check" onChange={ filterList } />
              <label htmlFor="comp-task" className="check" >
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path strokeWidth="2px" stroke="royalblue" d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                  <polyline strokeWidth="3px" stroke="green" points="1 9 7 14 15 4"></polyline>
                </svg>
              </label>
            </div>
          </label>
          <label className="opt" htmlFor="all-task">All Tasks
            <div class="checkbox-container">
              <input type="radio" name="task-filter" id="all-task" defaultChecked={ true } className="task-check" style={ { display: "none" } }  onChange={ filterList } />
              <label htmlFor="all-task" className="check">
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path strokeWidth="2px" stroke="royalblue" d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                  <polyline strokeWidth="3px" stroke="green" points="1 9 7 14 15 4"></polyline>
                </svg>
              </label>
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}
