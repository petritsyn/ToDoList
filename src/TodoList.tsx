import React, {useState} from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    /*tasksFilter: (nameButton: 'all' | 'active' | 'completed') => void*/
}

export function Todolist(props: PropsType) {

    let [valueButton, setValueButton] = useState('all');

    const tasksFilter = (nameButton: string) => {
        setValueButton(nameButton)
    }

    let prokladka = props.tasks;

    if (valueButton === 'active') {
        prokladka = props.tasks.filter(el => !el.isDone)
    }
    if (valueButton === 'completed') {
        prokladka = props.tasks.filter(el => el.isDone)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {
                prokladka.map((el) => {
                    return (
                        <li key={el.id}>
                            <button onClick={ () => props.removeTask(el.id) }>x</button>
                            <input type="checkbox" checked={el.isDone}/> <span>{el.title}</span>
                        </li>
                    )
                })
            }
        </ul>
        <div>
            <button onClick={ () => tasksFilter('all')}>All</button>
            <button onClick={ () => tasksFilter('active')}>Active</button>
            <button onClick={ () => tasksFilter('completed')}>Completed</button>
        </div>
    </div>
}
