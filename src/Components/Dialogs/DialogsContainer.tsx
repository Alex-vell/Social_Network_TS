import React from "react";
import {addMessageAC, addNewMessageTextAC} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

type DialogsContainerType = {
    //store: StoreType
}

export const DialogsContainer: React.FC<DialogsContainerType> = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState().dialogsPage

                    const addMessageCallback = (newMessageText: string) => {
                        store.dispatch(addMessageAC(newMessageText))
                    }
                    const onChangeMessageCallback = (content: string) => {
                        store.dispatch(addNewMessageTextAC(content))
                    }

                    return <Dialogs addMessageCallback={addMessageCallback}
                                    onChangeMessageCallback={onChangeMessageCallback}
                                    dialogsPage={state}/>
                }
            }
        </StoreContext.Consumer>

    )
}