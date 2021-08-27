import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'

type dialogsItemType = {
    id: number
    name: string
}
type messageType = {
    message: string
}


const DialogsItem = (props: dialogsItemType) => {
    let path = '/dialogs' + props.id

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props: messageType) => {
  return <div className={s.message}>{props.message}</div>
}

const Dialogs: React.FC<dialogsItemType> = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsItem id={1} name='Alex' />
                <DialogsItem id={2} name='Natali' />
                <DialogsItem id={3} name='Anna' />
            </div>
            <div className={s.messages}>
                <Message message='I am a developer'/>
                <Message message='bla bla'/>
            </div>
        </div>
    )
}

export default Dialogs