import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/state";

/*type MessagesType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}*/
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

    let [title, setTitle] = useState('');
    const addMessageHandler = () => {
        alert(title)
        setTitle('')
    }
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(event.currentTarget.value);
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Control' && 'Enter') {
            alert(title)
            /*setTitle(event.currentTarget.value);*/
            setTitle('')
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea value={title} onChange={onChangeHandler} onKeyDown={onKeyPressHandler}/>
            <button onClick={addMessageHandler}>add</button>
        </div>
    )
}

export default Dialogs