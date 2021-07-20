import React,{useState,useEffect} from 'react'
import ToDoItem from './ToDoItem'

const getMessage=()=>{
  let mylist=localStorage.getItem('todoList')
  if(mylist){
      return JSON.parse(localStorage.getItem('todoList'))
  }else{
    return []
  }
}

function ToDoList() {
   const [message,setMessage]=useState('')
   const [mytask,setMytask]=useState(getMessage())
   const [toggleSubmit,setToggleSubmit]=useState(true)
   const [update,setUpdate]=useState(null)

  const addMessage=()=>{

    if(!message){
      alert("please fill any message")
    }
    else if(!toggleSubmit && update && message){
      setMytask(mytask.map((item)=>{
        if(item.id===update){
          return {...item,text:message}
        }
      }
    ))
    setToggleSubmit(true)
    setMessage('')
    setUpdate(null)

    }
    else{
      const inputMessage={id:new Date().getTime().toString(),text:message}
      setMytask([...mytask,inputMessage])
      setMessage('')

    }
  }
  useEffect(()=>{
    localStorage.setItem('todoList',JSON.stringify(mytask))
  },[mytask])
  const updateMessage=(update_id)=>{
    const updateTxt=mytask.find(item=>{
      return item.id===update_id
    })
    setMessage(updateTxt.text)
    setToggleSubmit(false)
    setUpdate(updateTxt.id)
  }
  const deleteMessage=(delete_id)=>{
    const newMessage=mytask.filter(item=>{
      return item.id !== delete_id
    })
    setMytask(newMessage)
  }
  const clearAll=()=>{
    setMytask([])
  }


  return (
    <div className="container-fluid todo_container ">
      <div className="center_div">
        <div className="main_logo mx-auto">
          <img src="./images/download.png" style={{height:'100%',width:'100%'}} alt="" />
        </div>
        <div className="to-parent ">
            <div className="input-group mt-3   ">
              <div className="input-group-prepend">
                <span className=" text-primary fa fa-pencil-square-o" aria-hidden="true"></span>
              </div>
              <input type="text"  value={message} onChange={(event)=>{setMessage(event.target.value)}} className="form-control" />
            <div className="input-group-append">
                <span className="input-group-text second_btn" aria-hidden="true"  onClick={addMessage}>

                {
                  toggleSubmit ?<i className="fa fa-plus-circle" aria-hidden="true"></i>:<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                }
              </span>
            </div>

            </div>
            <ul className="list-group">
               {
                  mytask.map((item)=>{
                    return <ToDoItem  items={item} delFunc={deleteMessage} updateFunc={updateMessage}/>
                  })
              }
          </ul>
          <button type="button" className="btn btn-outline-primary mt-5" onClick={clearAll}>Remove All Task</button>
        </div>
      </div>
    </div>
  )
}

export default ToDoList
