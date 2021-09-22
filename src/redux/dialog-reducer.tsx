import {ActionsTypes, DialogsPageType} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT';

const initialState = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Natali'},
        {id: 3, name: 'Anna'}
    ],
    messages: [
        {id: 1, message: 'I am a developer'},
        {id: 2, message: 'bla bla'},
        {id: 3, message: 'la la'}
    ],
    newMessageText: ''
}

export const dialogReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
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