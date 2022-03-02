import React from 'react';
import './App.css';
import {TodoList} from "./TodoList";


function App() {

    const task1 = [
        {id: 1, title: "HTMLSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ];

    const task2 = [
        {id: 1, title: "Hello Wordl", isDone: true},
        {id: 2, title: "I am happy", isDone: false},
        {id: 3, title: "Yo", isDone: false}
    ];


    return (
        <div className="App">
            <TodoList title={'Zagolovok 1'} task={task1}/>
            <TodoList title={'Zagolovok 2'} task={task2}/>
        </div>
    );
}

export default App;
