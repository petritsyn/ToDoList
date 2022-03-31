import React, {KeyboardEvent, ChangeEvent, useState} from 'react';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    prokladka: Array<TaskType>
    removeTask: (id: string) => void
    tasksFilter: (buttonName: string) => void
    addTask: (newTitle: string) => void
}


export function Todolist(props: PropsType) {

    const [newTitle, setNewTitle] = useState('');

    const newTitleHandler = () => {
        props.addTask(newTitle);
        setNewTitle('');
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            newTitleHandler();
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)
    }

    const filterHandler = (buttonName: string) => {
        props.tasksFilter(buttonName)
    }

    const removeTaskHandler = (id: string) => {
        props.removeTask(id)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input onChange={onChangeHandler} value={newTitle} onKeyPress={onKeyPressHandler}/>
            <button onClick={newTitleHandler}>+</button>
        </div>
        <ul>
            {props.prokladka.map((el) => {
                return (
                    <li key={el.id}>
                        <button onClick={() => removeTaskHandler(el.id)}>X</button>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                    </li>
                )
            })}
        </ul>
        <div>
            <button onClick={() => filterHandler("All")}>All</button>
            <button onClick={() => filterHandler("Active")}>Active</button>
            <button onClick={() => filterHandler('Completed')}>Completed</button>
        </div>
    </div>
}
