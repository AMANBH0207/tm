import React, { useEffect, useState } from 'react'
import "../style/TaskForm.css"
import TaskList from './TaskList';

function TaskForm() {
   const [task,setTask]=useState({
    tasktitle:"",
    dueDate:"",
    taskStatus:"created",
    taskPriority:"default"
   })

   const [toggle,setToggle]=useState(false)

   const [allData, setAllData] = useState([])
   useEffect(()=>{
      setAllData(JSON.parse(localStorage.getItem("tasks")) || [])
   },[toggle])

   const submitTaskData =(e)=>{
    e.preventDefault();
    let TaskArr = allData;
    TaskArr.push(task);
    localStorage.setItem("tasks",JSON.stringify(TaskArr));
    setToggle(!toggle)
   }

  return (
    <>
        <form className='TaskForm'>
            <label><b>Task Titile:</b></label>
            <input type="text" placeholder='Please Enter A Task Title' value={task.tasktitle} onChange={(e)=>setTask({...task,tasktitle:e.target.value})}/><br/>
            <label><b>Task Date:</b></label>
            <input type="date" value={task.dueDate} onChange={(e)=>setTask({...task,dueDate:e.target.value})}/><br/>
            <label><b>Task Priority:</b></label>
            <select value={task.taskPriority} onChange={(e)=>setTask({...task,taskPriority:e.target.value})}>
                <option value="default">Please select a priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select><br/>
            <button className='CreateTask' onClick={submitTaskData}>Create Task</button>
        </form>
        <TaskList allData={allData}/>
    </>
  )
}

export default TaskForm