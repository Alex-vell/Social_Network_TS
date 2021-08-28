import React from "react";
import s from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type MessagesType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}
type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

type StateType = {
    state: DialogPageType
}


const Dialogs: React.FC<StateType> = (props) => {


    let dialogsElements = props.state.dialogs.map(el => <DialogsItem id={el.id} name={el.name}/>)
    let messagesElements = props.state.messages.map(el => <Message message={el.message}/>)

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