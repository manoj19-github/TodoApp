import React,{useState} from 'react'

function ToDoItem(props) {
  const [line,setLine]=useState(false)
  const ClickHandler_check=()=>{
    setLine(!line)
  }

  return (

      <li  className="list-group-item text-center mt-2  d-flex justify-content-between">
      <div className="custom-control custom-checkbox" style={{cursor:'pointer'}}>
        <input type="checkbox" onClick={ClickHandler_check} name="" className="custom-control-input"  />
      </div>
      <div style={{textDecoration:line?'line-through':'none'}}>{props.items.text}</div>
    <div style={{cursor:'pointer'}}><i class="fa fa-pencil" aria-hidden="true"  onClick={()=>props.updateFunc(props.items.id)}></i></div>
      <div style={{cursor:'pointer'}}><i class="fa fa-trash" aria-hidden="true" onClick={()=>props.delFunc(props.items.id)}></i></div>
      </li>



  )
}

export default ToDoItem
