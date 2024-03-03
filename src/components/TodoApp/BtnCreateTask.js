import classNames from 'classnames/bind'
import styles from './TodoApp.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function BtnCreateTask({
    toggle, 
    setToggle, 
    setUpdate, 
    setTitle, 
    setDate, 
    setDescription
}){
    const handleToggle = () =>{
        setTitle('');
        setDate('');
        setDescription('');
        setToggle(!toggle);
        setUpdate(null);
    }

    return (
        <div className={cx('add-task')}>
                    <input
                        placeholder='Add New Task' 
                        readOnly 
                        spellCheck={false} 
                    />
                    <button onClick={handleToggle} className={cx('add-btn')} > 
                        <FontAwesomeIcon icon = {faPlus}/>
                    </button>
                </div>
    )
}

export default BtnCreateTask