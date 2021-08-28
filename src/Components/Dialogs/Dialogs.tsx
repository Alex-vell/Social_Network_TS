import React from "react";
import { NavLink } from "react-router-dom";
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



const Dialogs: React.FC<dialogsItemType> = (props) => {

    let dialogs = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Natali'},
        {id: 3, name: 'Anna'}
    ]
    let messages = [
        {id: 1, message: 'I am a developer'},
        {id: 2, message: 'bla bla'},
        {id: 3, message: 'la la'}
    ]

    let dialogsElements = dialogs.map(el => <DialogsItem id={el.id} name={el.name} />)
    let messagesElements = messages.map(el => <Message message={el.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
                {/*<DialogsItem id={dialogs[0].id} name={dialogs[0].name} />
                <DialogsItem id={dialogs[1].id} name={dialogs[1].name} />
                <DialogsItem id={dialogs[2].id} name={dialogs[2].name} />*/}
            </div>
            <div className={s.messages}>
                {messagesElements}
                {/*<Message message={messages[0].message}/>
                <Message message={messages[1].message}/>
                <Message message={messages[2].message}/>*/}
            </div>
        </div>
    )
}

export default Dialogs