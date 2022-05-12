import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    todoListID: string
    title: string
    callBack: (newTitle: string) => void
}

export const EditableSpan = (props: EditableSpanPropsType) => {

    let [edit, setEdit] = useState(false)
    let [title, setTitle] = useState(props.title)

    const editOnHandler = () => {
        setEdit(true)
    }

    const editOffHandler = () => {
        setEdit(false)
        props.callBack(title)
    }

    const onEditChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        edit
            ? <input value={title} onBlur={editOffHandler} autoFocus onChange={onEditChangeHandler}/>
            : <span onDoubleClick={editOnHandler}>{props.title}</span>
    );
};