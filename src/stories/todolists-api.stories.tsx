import React, {useEffect, useState} from 'react'
import {todilistApi} from "../api/todilist-api";

export default {
    title: 'API'
}

let todolistId = 'da5c9090-27a3-4554-b34f-59cdd8ff9cae'
let taskId = 'c99cae83-c22c-4487-b667-b9746f2a19c3'

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        todilistApi.getTodolist()
            .then(res => setState(res))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todilistApi.createTodolist('New todolist')
            .then(res => setState(res))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todilistApi.updateTodolist(todolistId, 'New Title')
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todilistApi.deleteTodolist(todolistId)
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const GetTasks = () => {
    debugger
    const [state, setState] = useState<any>(null)
    const [taskTitle, setTaskTitle] = useState<any>('')
    useEffect(() => {
        todilistApi.getTasks(todolistId)
            .then(res => setState(res))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todilistApi.createTask(todolistId, 'New todolist')
            .then(res => setState(res))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todilistApi.updateTask(todolistId, taskId, 'New Task Title')
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todilistApi.deleteTask(todolistId, taskId)
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}