import axios from "axios";

const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {
        'API-KEY': '7d54e03a-c727-4a11-92e7-335f41a4e836'
    }
})

export const todilistApi = {
    getTodolist() {
        return instanse.get<TodolistType[]>('/todo-lists')
            .then(res => res.data)
    },
    createTodolist(title: string) {
        return instanse.post<ResponseType<{data: TodolistType}>>('/todo-lists', {title})
            .then(res => res.data)
    },
    updateTodolist(todolistId: string, title: string) {
        return instanse.put<ResponseType>(`/todo-lists/${todolistId}`, {title})
            .then(res => res.data)
    },
    deleteTodolist(todolistId: string) {
        return instanse.delete<ResponseType>(`/todo-lists/${todolistId}`)
            .then(res => res.data)
    },
    getTasks(todolistId: string) {
        return instanse.get<TaskType[]>(`/todo-lists/${todolistId}/tasks`)
            .then(res => res.data)
    },
    createTask(todolistId: string, title: string) {
        return instanse.post(`/todo-lists/${todolistId}/tasks`, {title})
            .then(res => res.data)
    },
    updateTask(todolistId: string, taskId: string, title: string) {
        return instanse.put(`/todo-lists/${todolistId}/tasks/${taskId}`, {title})
            .then(res => res.data)
    },
    deleteTask(todolistId: string, taskId: string) {
        return instanse.delete(` /todo-lists/${todolistId}/tasks/${taskId}`)
            .then(res => res.data)
    }
}

type TodolistType = {
    addedDate: string
    id: string
    order: number
    title: string
}

type ResponseType<D = {}> = {
    data: {
        item: D
    }
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

export type TaskType = {
    addedDate: string
    deadline: ''
    description: ''
    id: string
    order: number
    priority: number
    startDate: string
    status: number
    title: string
    todoListId: string
}