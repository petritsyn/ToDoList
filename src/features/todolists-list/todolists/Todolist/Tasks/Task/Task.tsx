import React, {ChangeEvent, FC} from 'react'
import {Checkbox, IconButton} from '@mui/material'
import {Delete} from '@mui/icons-material'
import {EditableSpan} from 'common/components'
import {TaskStatuses} from 'common/enums';
import {TaskType} from "features/todolists-list/tasks/tasks.api";
import {useActions} from "common/hooks";
import {tasksThunks} from "features/todolists-list/tasks/tasks.reducer";
import s from 'features/todolists-list/todolists/Todolist/Tasks/Task/Task.module.css'

type Props = {
    task: TaskType
    todolistId: string
}

export const Task: FC<Props> = React.memo(({task, todolistId}) => {

    const {removeTask, updateTask} = useActions(tasksThunks)
    const removeTaskHandler = () => {
        removeTask({taskId: task.id, todolistId: todolistId})
    }

    const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const status = e.currentTarget.checked ? TaskStatuses.Completed : TaskStatuses.New
        updateTask({taskId: task.id, todolistId: todolistId, domainModel: {status}})
    }

    const changeTitleHandler = (newValue: string) => {
        updateTask({taskId: task.id, domainModel: {title: newValue}, todolistId: todolistId})
    }

    return <div key={task.id} className={task.status === TaskStatuses.Completed ? s.isDone : ''}>
        <Checkbox
            checked={task.status === TaskStatuses.Completed}
            color="primary"
            onChange={changeStatusHandler}
        />

        <EditableSpan value={task.title} onChange={changeTitleHandler}/>
        <IconButton onClick={removeTaskHandler}>
            <Delete/>
        </IconButton>
    </div>
})
