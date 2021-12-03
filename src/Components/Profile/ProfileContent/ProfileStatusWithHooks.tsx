import React, {ChangeEvent, useEffect, useState} from "react";

type profileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<profileStatusType> = ({status, updateUserStatus}) => {

    const [editMode, setEditMode] = useState(false)
    const [statusValue, setStatusValue] = useState(status)

    useEffect(() => {
        setStatusValue(status)
    }, [status])


    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        updateUserStatus(statusValue)
    }
    const onStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatusValue(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{status || '---'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChangeHandler} onBlur={deactivateEditMode} autoFocus={true}
                       value={statusValue}/>
            </div>
            }

        </div>
    )
}
