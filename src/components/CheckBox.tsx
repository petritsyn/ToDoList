import React, {ChangeEvent} from 'react';

type CheckBoxPropsType = {
    checked: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const CheckBox = (props: CheckBoxPropsType) => {
    return (
        <>
            <input type="checkbox" checked={props.checked} onChange={props.onChange}/>
        </>
    );
};