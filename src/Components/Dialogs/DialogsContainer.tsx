import React from "react";
import {StoreType} from "../../redux/store";
import {addMessageAC, addNewMessageTextAC} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";

type DialogsContainerType = {
    store: StoreType
}


export const DialogsContainer: React.FC<DialogsContainerType> = (props) => {

    let state = props.store.getState().dialogsPage

    const addMessageCallback = (newMessageText: string) => {
        props.store.dispatch(addMessageAC(newMessageText))
    }
    const onChangeMessageCallback = (content: string) => {
        props.store.dispatch(addNewMessageTextAC(content))
    }

    return (<Dialogs addMessageCallback={addMessageCallback}
                     onChangeMessageCallback={onChangeMessageCallback}
                     dialogsPage={state}/>
    )
}