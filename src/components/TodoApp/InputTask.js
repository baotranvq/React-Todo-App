import classNames from 'classnames/bind'
import styles from './TodoApp.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function InputTask({
    toggle, 
    setToggle,
    title, 
    setTitle, 
    date, 
    setDate, 
    description, 
    setDescription, 
    tasks, 
    setTasks, 
    update
}){
    
    const handleCreate = () =>{
        setTasks(prev => [...prev, {title: title, date:date, description: description}])
        setTitle('')
        setDate('')
        setDescription('')
        setToggle(!toggle)
    }

    const handleUpdate= (update) =>{
        tasks[update].title = title;
        tasks[update].date = date;
        tasks[update].description = description;
        setTitle('')
        setDate('')
        setDescription('')
        setToggle(!toggle)
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }
    return (
        <div className={cx('task-content')}>
            <button className={cx('close-btn')} onClick={() => (setToggle(!toggle))}>
                <FontAwesomeIcon icon={faX} />
            </button>
            <label>Task Title</label>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder='Task Title' />
            <label>Date</label>
            <input value={date} onChange={e => setDate(e.target.value)} type='date' />
            <label>Task Description</label>
            <input value={description} onChange={e => setDescription(e.target.value)} className={cx('description')} placeholder='Task Description' />
            <div className={cx('task-submit')}>
                {update== null ? <button onClick={handleCreate} >Create</button> : <button onClick={() => handleUpdate(update)} >Update</button> }
            </div>
        </div>
    )
}

export default InputTask