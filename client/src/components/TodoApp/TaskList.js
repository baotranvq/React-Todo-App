import classNames from 'classnames/bind'
import styles from './TodoApp.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)
function TaskList ({handleDeleteTask, handleShowInputUpdate, task, index }){
    

    return (
            <div>
                <h6>{task.title}</h6>
                <p>{task.date}</p>
                <p>{task.description}</p>
                <div className={cx('task-btn')}>
                    <button onClick={() => handleShowInputUpdate(index)} ><FontAwesomeIcon icon={faPenToSquare} /></button>
                    <button onClick={() => handleDeleteTask(index)} ><FontAwesomeIcon icon={faTrash} /></button>
                </div>
            </div>
    )
}

export default TaskList