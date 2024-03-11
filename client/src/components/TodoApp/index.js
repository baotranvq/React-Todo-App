import classNames from 'classnames/bind'
import styles from './TodoApp.module.scss'
import { useState, useEffect } from 'react';
import BtnCreateTask from './BtnCreateTask';
import InputTask from './InputTask';
import TaskList from './TaskList';

const cx = classNames.bind(styles)


function TodoApp() {
    // let initState =  JSON.parse(localStorage.getItem('tasks')) || [];
    
    const [update, setUpdate] = useState(null)
    const [toggle, setToggle] = useState(false)
    const [tasks, setTasks] = useState([])

    
    // useEffect(() =>{
    //     localStorage.setItem('tasks',JSON.stringify(tasks))
    // },[tasks])
    const handleToggle = () =>{
        setUpdate(null)
        setToggle(!toggle);
    }
    // call Api
    useEffect (() =>{
        const getData =  async () => {
            const response = await fetch("/getTasks")
            const data = await response.json()
            setTasks(data)
        }
        getData()
    },[])
    // 
    const postData = async (data) => {
        try{
            const response = await fetch("/postTask", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...data}),
            });
            const result = await response.json();
            if(result){
                setTasks(prev => [...prev, {...result}])
            }
        }
        catch(error){
            console.error("Error: ", error)
        }
    }
    const handleCreateTodo = (values) =>{
        postData(values);
        setToggle(!toggle)
    }

    const deleteData = async (id) => {
        try{
            const response = await fetch(`/deleteTask/${id}`, {
            method: "DELETE", 
            headers: {
                "Content-Type": "application/json",
            },
            });
            const result = await response.json();
            console.log("Success:", result);
            if(result){
               const newTasks =  tasks.filter( task => (task._id !== result._id))
               setTasks(newTasks);
            }
        }
        catch(error){
            console.error("Error: ", error)
        }
    }
    const handleDeleteTask = (index) =>{
        const idTask = tasks[index]._id;
        deleteData(idTask)
    }

    async function updateTask(id, data) {
        try {
          const response = await fetch(`/updateTask/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json ; charset=UTF-8",
            },
          });
          const result = await response.json();
          if(result){
            const newTask = tasks.map(task => (task._id === result._id) ? { ...task, ...result} : task)
            setTasks(newTask);
          }
        } catch (error) {
          console.error("Error:", error);
        }
    }
      
    const handleShowInputUpdate = (index) =>{
        setToggle(!toggle)
        setUpdate(index);
    }
    const handleUpdate= (tasks, update, value) =>{
        const idTask = tasks[update]._id;
        updateTask(idTask, value)
        setToggle(!toggle)
    }
    return(
        <div>
            <h4 className={cx('title')}>TODO App</h4>
            <div className={cx('wrapper')}>
                <div>
                    <BtnCreateTask 
                        handleToggle={handleToggle}
                    />
                </div>
                <div >
                    { 
                        toggle &&
                        <InputTask 
                            handleCreateTodo={handleCreateTodo}
                            handleUpdate={handleUpdate}
                            handleToggle={handleToggle}
                            tasks= {tasks}
                            update={update} 
                        />
                    }
                </div>
                <h5 className={cx('tittle-content')}>Tasks</h5>
                <div className={cx('tasks')}>
                        {tasks.map( (task, index) => (
                            <div key={index} className={cx('task')} >
                                <TaskList 
                                    task={task} 
                                    index={index}
                                    handleDeleteTask={handleDeleteTask}
                                    handleShowInputUpdate={handleShowInputUpdate}
                                    handleUpdate={handleUpdate}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </div>
            
    )
    
}

export default TodoApp