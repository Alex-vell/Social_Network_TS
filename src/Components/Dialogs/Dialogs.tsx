import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, addMessageAC, addNewMessageTextAC, DialogsPageType} from "../../redux/state";

type StateType = {
    state: DialogsPageType
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
    //addMessageCallback: (message: string) => void
    //addNewMessageTextCallBack: (newText: string) => void
}


export const Dialogs: React.FC<StateType> = (props) => {


    let dialogsElements = props.state.dialogs.map(el => <DialogsItem key={el.id} id={el.id} name={el.name}/>)
    let messagesElements = props.state.messages.map(el => <Message key={el.id} message={el.message}/>)

    const addMessageHandler = () => {
        props.dispatch(addMessageAC(props.newMessageText))
        //props.addMessageCallback('')
    }
    const onChangeMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let content = event.currentTarget.value
        props.dispatch(addNewMessageTextAC(content))
        //props.addNewMessageTextCallBack(content)
    }

    /* let [title, setTitle] = useState('');*/
    /*const addMessageHandler = () => {
        alert(title)
        setTitle('')
    }
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(event.currentTarget.value);
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Control' && 'Enter') {
            alert(title)
            /!*setTitle(event.currentTarget.value);*!/
            setTitle('')
        }
    }*/

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea value={props.newMessageText} onChange={onChangeMessageHandler}/>
            <button onClick={addMessageHandler}>add</button>
        </div>
    )
}