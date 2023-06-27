import './App.css';
import {useState} from 'react';
import { Task } from './Task';
import styles from './Task.module.css'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newtask, setTask] = useState("");

  const addTask = () => {
    const task = {
      id : todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName : newtask,
      completed: false,
    }
    setTodoList([...todoList, task]);
  };

  const handleChange =(event) => {
    setTask(event.target.value);
  };

  const deleteTask =(id)=>{
    const newTodoList = todoList.filter((task) => {
      return task.id !== id;
    })

    setTodoList(newTodoList);
  };

  const completedTask =(id)=>{
   setTodoList(todoList.map((task) => {
    if(task.id === id){
      return {...task, completed : true};
    }
    else{
      return task;
    }
   }));
  };

  return (
    <div className="App">
      <br/><br/>
      <div className={styles.input}>
        <input onChange={handleChange}></input>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className={styles.task}>
        {todoList.map((task) => {
          return <Task taskName = {task.taskName} 
          id = {task.id} 
          completed = {task.completed}
          deleteTask = {deleteTask} 
          completedTask = {completedTask}/>
        })}
      </div>
    </div>
  );
}

export default App;
