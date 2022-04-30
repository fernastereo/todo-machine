import React from 'react';
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleChevronRight, faTrashCan } from '@fortawesome/free-solid-svg-icons'

function TodoItem(props) {
    return (
        <li className="TodoItem">
            {props.completed ?
                <FontAwesomeIcon 
                    icon={faCircleCheck} 
                    className={`Icon Icon-check--active`}
                    onClick={props.onUncomplete}/>
            :  <FontAwesomeIcon 
                    icon={faCircleChevronRight}
                    className={`Icon`} 
                    onClick={props.onComplete}/>
            }
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <FontAwesomeIcon
                icon={faTrashCan}
                className='Icon Icon-delete'
                onClick={props.onDelete}/>
        </li>
    );
}

export {TodoItem};