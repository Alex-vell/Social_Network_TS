import React from "react";
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, Form, Formik, FormikProps} from "formik";


export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(el => <DialogsItem key={el.id} id={el.id} name={el.name}/>)
    let messagesElements = state.messages.map(el => <Message key={el.id} message={el.message}/>)

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

            <MessageForm addMessageCallback={props.addMessageCallback}/>

        </div>
    )
}


type FormPropsType = {
    addMessageCallback: (newMessageText: string) => void
}

type FormikDataType = {
    newMessageText: string
}

export const MessageForm = (props: FormPropsType) => {
    return (
        <Formik
            initialValues={{newMessageText: ''}}
            onSubmit={(values: FormikDataType, actions) => {
                props.addMessageCallback(values.newMessageText)
                actions.setSubmitting(false);
                actions.resetForm();
            }}
        >
            {(props: FormikProps<FormikDataType>) => (
                <Form>
                    <div><Field as={'textarea'} type="text" name="newMessageText" placeholder="Enter text"/></div>
                    <button type="submit">Add post</button>
                </Form>
            )}
        </Formik>
    )
}