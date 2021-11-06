import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";


export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(el => <DialogsItem key={el.id} id={el.id} name={el.name}/>)
    let messagesElements = state.messages.map(el => <Message key={el.id} message={el.message}/>)
    let newMessageText = state.newMessageText

    const addMessageHandler = () => {
        props.addMessageCallback(newMessageText)
    }
    const onChangeMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let content = event.currentTarget.value
        props.onChangeMessageCallback(content)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsContainer}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
            <div>
                <textarea value={newMessageText} onChange={onChangeMessageHandler}/>
            </div>
            <div>
                <button onClick={addMessageHandler}>add</button>
            </div>
        </div>
    )
}