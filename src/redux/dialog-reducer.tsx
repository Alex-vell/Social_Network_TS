import {ActionsTypes} from "./ActionTypes";


const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT';


export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageText: string
}

/*export type InitialStateDialogReducerType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageText: string
}*/

export type InitialStateDialogReducerType = typeof initialState

const initialState = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Natali'},
        {id: 3, name: 'Anna'}
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'I am a developer'},
        {id: 2, message: 'bla bla'},
        {id: 3, message: 'la la'}
    ] as Array<MessagesType>,
    newMessageText: ''
} as DialogsPageType

export const dialogReducer = (state: InitialStateDialogReducerType = initialState, action: ActionsTypes): InitialStateDialogReducerType => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = state.newMessageText /*{
                id: new Date().getDate(),
                message: state.newMessageText
            }*/
            /* let newState = {...state}*/
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: new Date().getDate(), message: newMessage}]
            }

        case ADD_NEW_MESSAGE_TEXT:
            /*let newState = {...state}*/
            return {
                ...state,
                newMessageText: action.newText
            }

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