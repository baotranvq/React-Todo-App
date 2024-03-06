import classNames from 'classnames/bind'
import styles from './TodoApp.module.scss'
import { useState } from 'react';
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

    const handleCreateTodo = (values) =>{
        setTasks(prev => [...prev, {...values}])
        setToggle(!toggle)
    }

    const handleDeleteTask = (index) =>{
        const newTasks= [...tasks]
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }

    const handleShowInputUpdate = (index) =>{
        setToggle(!toggle)
        setUpdate(index);
    }

    const handleUpdate= (tasks, update, value) =>{
        const updatedTasks = [...tasks];
        updatedTasks[update] = {...value}
        setTasks(updatedTasks);
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