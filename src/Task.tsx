import React from 'react';
import {TaskType} from "./TodoList";

type TaskPropsType = TaskType

const Task = (props: TaskPropsType) => {
    return (
        <li>
            {/*<strong>{props.id}</strong>*/}
            <input type="checkbox"

                   checked={props.isDone}/>
            <span>{props.title}</span>

        </li>
    );
};

export default Task;
