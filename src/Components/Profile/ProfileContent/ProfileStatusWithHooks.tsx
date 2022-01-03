import React, {ChangeEvent, useEffect, useState} from "react";

type profileStatusType = {
    status: string
    isOwner: boolean
    updateUserStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<profileStatusType> = ({status, updateUserStatus, isOwner}) => {

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
            {!editMode && isOwner &&
            <div>
                <span onDoubleClick={activateEditMode}><b>Status</b>: {status || '---'}</span>
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
