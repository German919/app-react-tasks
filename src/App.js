import React, { useState, useEffect } from 'react';
import TaskRow from "./components/TaskRow"
import TaskBanner from "./components/TaskBanner"
import TaskCreator from "./components/TaskCreator"
import Visibility from "./components/Visibility"

function App() {

  const [userName, setUserName] = useState("German")

  const [taskItems, setTaskItems] = useState([
    {name:"Task One", done: false},
    {name:"Task Two", done: false},
    {name:"Task Three", done: true},
    {name:"Four One", done: false}
  ])

  const [showCompleted, setShowCompleted] = useState(true)

  useEffect(()=>{
    const data = localStorage.getItem("tasks")
    if (data !=null){
      setTaskItems(JSON.parse(data))
    }else{
      setTaskItems(taskItems)
      setShowCompleted(true)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(taskItems))

  }, [taskItems])


  const taskTableRows = (doneValue) => 
     taskItems.filter(taks => taks.done === doneValue ).map((task, i) => (<TaskRow key={i} task={task} toggleTask={toggleTask}/>))
   
  const toggleTask = (task) => (
      setTaskItems(taskItems.map(t => t.name === task.name ? {...t, done : !t.done} : t))
  )
  
  const addNewTask = (task) =>{
    if(task === ""){
      alert(`${userName} debes ingresar una tarea`)
      return
    }
    if(!taskItems.find(t => t.name === task)){
      setTaskItems([...taskItems, {name:task, done:false}])
    }
  }

  return (
    <div>
      <TaskBanner userName= {userName} taskItems={taskItems}/>
      <TaskCreator addNewTask={addNewTask}/>
       <table className="table table-striped table-bordered">
         <thead>
           <tr>
             <th>Description</th>
             <th>Done</th>
           </tr>
           </thead>
         <tbody>
             {taskTableRows(false)}
         </tbody>
       </table>

       <div className="bg-secondary-text-white text-center p-2">
          <Visibility
            description = "Completed Task"
            isChecked={showCompleted}
            callback={checked=>setShowCompleted(checked)}
          />
       </div>
        {
          showCompleted && 
        
       <table className="table table-striped table-bordered">
         <thead>
           <tr>
             <th>Description</th>
             <th>Done</th>
           </tr>
          </thead>
         <tbody>
             {taskTableRows(true)}
         </tbody>
       </table>
      }
    </div>
  );
}

export default App;
