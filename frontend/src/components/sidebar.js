import React from 'react'
import "./sidebar.css"
import { sidedata } from './sidedata'


function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className='sidelist'>
      {sidedata.map((val,key)=>{
      return (
      <li key={key} className="row" onClick={()=> {window.location.pathname = val.link}}>
      {val.title.toUpperCase()}</li>
      );
    })}
    </ul>
    </div>
  )
}

export default Sidebar