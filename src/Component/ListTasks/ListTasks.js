import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Task from '../Task/Task'
import {Button} from 'react-bootstrap'
const ListTasks = () => {

const list = useSelector (state => state.listReducer.listTasks)
const [status , setStatus] = useState("ALL")
  return (
    <div>
      <Button onClick={()=>setStatus("ALL")} >ALL</Button>
      <Button onClick={()=>setStatus("DONE")} >DONE</Button>
      <Button onClick={()=>setStatus("UNDONE")}>unDone</Button>
      
      { status === "DONE" ?
        list.filter((el)=> el.isDone===true)
        .map((el)=> <Task task={el} key={el.id} />):
        status ==="UNDONE" ?
        list.filter((el)=> el.isDone===false)
        .map(el=> <Task task={el} key={el.id} />) :
        list.map( el => <Task task={el} key={el.id}/>)}
    </div>
  )
}


export default ListTasks