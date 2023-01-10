import React, {useEffect, useState} from 'react'
import {todilistApi} from "../api/todilist-api";

export default {
    title: 'API'
}

let todolistId = '144e4c1c-853b-4b65-8d94-2b2de5db57a4'

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