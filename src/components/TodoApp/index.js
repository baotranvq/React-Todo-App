import classNames from 'classnames/bind'
import styles from './TodoApp.module.scss'
import { useEffect, useState } from 'react';
import BtnCreateTask from './BtnCreateTask';
import InputTask from './InputTask';
import TaskList from './TaskList';

const cx = classNames.bind(styles)


function TodoApp() {
    const [update, setUpdate] = useState(null)
    const [toggle, setToggle] = useState(false)
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    let initState =  JSON.parse(localStorage.getItem('tasks')) || [];
    const [tasks, setTasks] = useState(initState)
    useEffect(() =>{
        localStorage.setItem('tasks',JSON.stringify(tasks))
        console.log('1')
    },[tasks])

    return(
        <div>
            <h4 className={cx('title')}>TODO App</h4>
            <div className={cx('wrapper')}>
                <div>
                    <BtnCreateTask 
                        toggle={toggle} 
                        setToggle={setToggle}  
                        setUpdate={setUpdate}
                        setTitle={setTitle} 
                        setDate={setDate}
                        setDescription={setDescription}
                    />
                </div>
                <div >
                    { 
                        toggle &&
                        <InputTask 
                            toggle={toggle} setToggle={setToggle}
                            title={title} setTitle={setTitle} 
                            date={date} setDate={setDate}
                            description={description} setDescription={setDescription}
                            tasks={tasks} setTasks={setTasks}
                            update={update} setUpdate={setUpdate}
                        />
                    }
                </div>
                <div>
                    <TaskList 
                        toggle={toggle} 
                        setToggle={setToggle}
                        setTitle={setTitle} 
                        setDate={setDate}
                        setDescription={setDescription}
                        tasks={tasks} 
                        setTasks={setTasks} 
                        update={update}
                        setUpdate={setUpdate}
                    />
                </div>
            </div>
            
        </div>
    )
    
}

export default TodoApp