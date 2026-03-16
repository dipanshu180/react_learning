import React , {useState} from "react"

function TodoList()
{
    const [tasks , setTask] = useState([]);
    const[newTask , setNewTask] = useState(""); 
    
    function handleInputChange(event)
    {
        setNewTask(event.target.value)
        
    } 

    function addTask(){
       
       if(newTask.trim() !="")
       {
        setTask(t=>[...t , newTask])
        setNewTask("")
       }
    }
    function deleteTask(index)
    {
        const updateTask = tasks.filter((_,i) => i!==index);
        setTask(updateTask);
    }

    function moveTaskUp(index)
    {
        if(index>0)
        {
            const updateTask = [...tasks];
            [updateTask[index] , updateTask[index-1]] = [updateTask[index-1] , updateTask[index]]
            setTask(updateTask)
        }
    }

    function moveTaskDown(index)
    {
        if(index<tasks.length-1)
        {
            const updateTask = [...tasks];
            [updateTask[index] , updateTask[index+1]] = [updateTask[index+1] , updateTask[index]]
            setTask(updateTask)
        }
    }

    return(
        <div className="todolist">

                <h1 className="h1">To DO List</h1>
                <div className="todol">
                    <input type="text" placeholder="Add a new Task" 
                    value={newTask} onChange={handleInputChange} />

                    <button className="add-button " onClick={addTask}>Add</button>
                </div>

                <ol>
                  {tasks.map((task, index)=>
                  <li key={index}>
                        <span className="task">{task}</span>
                        <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                        <button className="t-button" onClick={()=>moveTaskUp(index)}>Up</button>
                        <button className="t-button" onClick={()=>moveTaskDown(index)}>Down</button>
                  </li>)}
                </ol>

            </div>
    );
}

export default TodoList