import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    /* let tasks1 = [
         { id: 1, title: "HTML&CSS", isDone: true },
         { id: 2, title: "JS", isDone: true },
         { id: 3, title: "ReactJS", isDone: false }
     ]*/

    let [tasks1, setTasks1] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])

    const removeTask = (id: number) => {
        let result = tasks1.filter(item => {
            return item.id !== id
        })
        setTasks1(result)
    }

/*    let [valueButton, setValueButton] = useState('all');

    const tasksFilter = (nameButton: string) => {
        setValueButton(nameButton)
    }

    let prokladka = tasks1;

    if (valueButton === 'active') {
        prokladka = tasks1.filter(el => !el.isDone)
    }
    if (valueButton === 'completed') {
        prokladka = tasks1.filter(el => el.isDone)
    }*/

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks1}
                      removeTask={removeTask}
                      /*tasksFilter={tasksFilter}*//>
        </div>
    );
}

export default App;
