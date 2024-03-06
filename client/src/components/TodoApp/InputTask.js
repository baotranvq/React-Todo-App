import classNames from 'classnames/bind'
import styles from './TodoApp.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react'
const cx = classNames.bind(styles)

function InputTask({ handleCreateTodo, handleUpdate, handleToggle, update, tasks }){

    const [formData, setFormData] = useState({
        title: '',
        date: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };
   
    const handleSubmit = () => {
        handleCreateTodo(formData)
    }

    const updateTask = () =>{
        const value = formData
        handleUpdate(tasks ,update, value)
    }

    useEffect(() => {
        if (update !== null) {
          setFormData({
            title: tasks[update].title,
            date: tasks[update].date,
            description: tasks[update].description,
          });
        }
      }, [update, tasks]);
    
    
   
    return (
        <div className={cx('task-content')}>
            <button className={cx('close-btn')} onClick={handleToggle}>
                <FontAwesomeIcon icon={faX} />
            </button>
            <label>Task Title</label>
            <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Task Title"
            />
            <label>Date</label>
            <input
                name="date"
                value={formData.date}
                onChange={handleChange}
                type="date"
            />
            <label>Task Description</label>
            <input
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Task Description"
            />
            <div className={cx('task-submit')}>
                {update == null ? <button onClick={handleSubmit} >Create</button> : <button onClick={updateTask} >Update</button> }
            </div>
        </div>
    )
}

export default InputTask

