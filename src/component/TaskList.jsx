import React from "react";
import '../style/TaskList.css'

function TaskList({allData}) {

  const markCompleted =(task)=>{
    task.taskStatus="Completed"
  }
  const markUncompleted =(task)=>{
    task.taskStatus="Uncompleted"
  }

  return (
    <>
      <div className="listComp">
        <ul>
          {allData.map((task) => {
            return (
              <li>
                <div className="taskList">
                <div>{task.tasktitle}</div> <div> {task.dueDate}</div>{" "}
                <div>{task.taskStatus}</div> <div>{task.taskPriority}</div>

                <div className="ActionButtons">
                    <button className="completed pointer" onClick={()=>markCompleted(task)}>Mark Completed</button>
                    <button className="uncompleted pointer" onClick={()=>markUncompleted(task)}>Mark Uncompleted</button>
                </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TaskList;
