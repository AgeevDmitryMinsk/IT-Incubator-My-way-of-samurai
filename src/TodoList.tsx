// rsc
import React from 'react';
import TodoListHeader from "./TodoListHeader";
import Task from "./Task";
import TodoListButtons from "./TodoListButtons";

type TodoListPropsType = {
    title: string,
    tasksList: TaskType[] // список дел tasksList = массив по типу TaskType
}

export type TaskType = { // в каждом списке дел есть:
    id: number,          // порядковый номер дела id,
    title: string,       // название дела title
    isDone: boolean      // выполено ли дело isDone
}

const TodoList = (props: TodoListPropsType) => {
    return (
    <div>
        {/*<h3>What to learn</h3>*/}
        {/*<h3>{props.title}</h3>*/}
        <TodoListHeader title={props.title} />
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {/*<li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>*/}
            {/*<li> <input type="checkbox" checked={props.task[0].isDone}/> <span>{props.task[0].title}</span> </li>*/}
            {/*<Task {...props.task[0]} />*/}
            <Task id={props.tasksList[0].id} title={props.tasksList[0].title} isDone={props.tasksList[0].isDone} />

            <Task id={props.tasksList[1].id} title={props.tasksList[1].title} isDone={props.tasksList[1].isDone} />
            {/*<li>*/}
            {/*    <input type="checkbox"*/}
            {/*           checked={props.task[1].isDone}/>*/}
            {/*    <span>{props.task[1].title}</span>*/}
            {/*</li>*/}
           <Task id={props.tasksList[2].id} title={props.tasksList[1].title} isDone={props.tasksList[1].isDone} />
            {/*<li>*/}
            {/*    <input type="checkbox"*/}
            {/*           checked={props.task[2].isDone}/>*/}
            {/*    <span>{props.task[2].title}</span>*/}
            {/*</li>*/}
        </ul>
        <div>
            <TodoListButtons />
        </div>
    </div>
    )
};

export default TodoList;
