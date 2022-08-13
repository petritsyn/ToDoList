import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

const initialState: Array<TodolistType> = []

export const todolistsReducer = (state = initialState, action: todolistsReducerType): Array<TodolistType> => {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            // // засунем в стейт список тудулистов, id которых не равны тому, который нужно выкинуть
            // setTodolists(todolists.filter(tl => tl.id != id));
            // // удалим таски для этого тудулиста из второго стейта, где мы храним отдельно таски
            // delete tasks[id]; // удаляем св-во из объекта... значением которого являлся массив тасок
            // // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
            // setTasks({...tasks});
            return state.filter(tl => tl.id !== action.payload.todolistId1)

        case "ADD-TODOLIST":
            return [...state, {id: action.todolistId, title: action.payload.newTodolistTitle, filter: 'all'}]

        case "CHANGE-TODOLIST-TITLE":
            return state.map(el => el.id === action.payload.todolistId2 ? {
                ...el,
                title: action.payload.newTodolistTitle
            } : el)

        case "CHANGE-TODOLIST-FILTER":
            return state.map(el => el.id === action.payload.id ? {...el, filter: action.payload.filter} : el)

        default:
            return state
    }
}

type todolistsReducerType = removeTodoListACType | addTodolistACType | changeTodolistTitleAC | changeTodolistFilterACType
export type removeTodoListACType = ReturnType<typeof removeTodoListAC>
export type addTodolistACType = ReturnType<typeof addTodolistAC>
type changeTodolistTitleAC = ReturnType<typeof changeTodolistTitleAC>
type changeTodolistFilterACType = ReturnType<typeof changeTodolistFilterAC>

export const removeTodoListAC = (todolistId1: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {todolistId1}
    } as const
}

export const addTodolistAC = (newTodolistTitle: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {newTodolistTitle},
        todolistId: v1()
    } as const
}

export const changeTodolistTitleAC = (todolistId2: string, newTodolistTitle: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            todolistId2,
            newTodolistTitle
        }
    } as const
}

export const changeTodolistFilterAC = (todolistId2: string, newFilter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            id: todolistId2,
            filter: newFilter
        }
    } as const
}