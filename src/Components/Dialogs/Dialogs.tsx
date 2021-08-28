import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type dialogsItemType = {
    id: number
    name: string
}
type messageType = {
    message: string
}
type dialogsPropsType = {
    dialogs: Array<dialogsItemType>
    messages: Array<messageType>
}


const Dialogs: React.FC<dialogsPropsType> = (props) => {


    let dialogsElements = props.dialogs.map(el => <DialogsItem id={el.id} name={el.name}/>)
    let messagesElements = props.messages.map(el => <Message message={el.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs