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
    let path = '/dialogs/' + props.id

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props: messageType) => {
  return <div className={s.message}>{props.message}</div>
}

const Dialogs: React.FC<dialogsItemType> = (props) => {

    let dialogsData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Natali'},
        {id: 3, name: 'Anna'}
    ]
    let messageData = [
        {id: 1, message: 'I am a developer'},
        {id: 2, message: 'bla bla'},
        {id: 3, message: 'la la'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsItem id={dialogsData[0].id} name={dialogsData[0].name} />
                <DialogsItem id={dialogsData[1].id} name={dialogsData[1].name} />
                <DialogsItem id={dialogsData[2].id} name={dialogsData[2].name} />
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs