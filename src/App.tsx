import React from 'react';
import './App.css';

import TodoList, {TaskType} from "./TodoList";

function App() {
    const tasks_1 : TaskType[] = [
        {id: 1, title: "HTML", isDone: false},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS", isDone: false},
    ];
    const tasks_2 : Array<TaskType> = [
        {id: 1, title: "React", isDone: true},
        {id: 2, title: "Angular", isDone: true},
        {id: 3, title: "Vue", isDone: false},
    ];
    const tasks_3 : Array<TaskType> = [
        {id: 1, title: "Yandex.Prekticum", isDone: true},
        {id: 2, title: "Vladilen Inc.", isDone: true},
        {id: 3, title: "IT-Insubator", isDone: false},
    ]
    return (

        <div className="App">

            <TodoList title={`what to learn?`}
                      tasksList={tasks_1} />


            <TodoList title={`2nd TodoList`} tasksList={tasks_2} />
            <TodoList title={`3d Todolist`} tasksList={tasks_3}  />


        </div>


    );
}



export default App;
