import React from 'react';
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleChevronRight, faTrashCan } from '@fortawesome/free-solid-svg-icons'

function TodoItem(props) {
    const onComplete = () => {
        alert('se completó el todo ' + props.text);
    }

    const onDelete = () => {
        alert('se borró el todo ' + props.text);
    }

    return (
        <li className="TodoItem">
            {props.completed ?
                <FontAwesomeIcon 
                    icon={faCircleCheck} 
                    className={`Icon Icon-check--active`}
                    onClick={onComplete}/>
            :  <FontAwesomeIcon 
                    icon={faCircleChevronRight}
                    className={`Icon`} 
                    onClick={onComplete}/>
            }
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <FontAwesomeIcon
                icon={faTrashCan}
                className='Icon Icon-delete'/>
        </li>
    );
}

export {TodoItem};