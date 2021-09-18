import {ActionsTypes, DialogsPageType} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT';

export const dialogReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: new Date().getDate(),
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case ADD_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}

export const addMessageAC = (messageText: string) => {
    return {
        type: ADD_MESSAGE,
        messageText: messageText
    } as const
}
export const addNewMessageTextAC = (newText: string) => {
    return {
        type: ADD_NEW_MESSAGE_TEXT,
        newText: newText
    } as const
}