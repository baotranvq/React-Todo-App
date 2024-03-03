import classNames from 'classnames/bind'
import styles from './TodoApp.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)
function TaskList ({
    toggle, 
    setToggle, 
    setTitle, 
    setDate, 
    setDescription,
    tasks, 
    setTasks, 
    setUpdate
}){
    const handleDeleteTask = (index) =>{
        const newTasks= [...tasks]
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }

    const handleShowInputUpdate = (index) =>{
        setUpdate(index)
        setToggle(!toggle)
        setTitle(tasks[index].title);
        setDate(tasks[index].date);
        setDescription(tasks[index].description);
    }

    return (
        <div>
            <h5 className={cx('tittle-content')}>Tasks</h5>
                <div className={cx('tasks')}>
                    {tasks.map((task,index) => 
                    <div className={cx('task')} key={index}>
                        <h6>{task.title}</h6>
                        <p>{task.date}</p>
                        <p>{task.description}</p>
                        <div className={cx('task-btn')}>
                            <button onClick={() => handleShowInputUpdate(index)} ><FontAwesomeIcon icon={faPenToSquare} /></button>
                            <button onClick={() => handleDeleteTask(index)} ><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                    </div>)}
                </div>
        </div>
    )
}

export default TaskList