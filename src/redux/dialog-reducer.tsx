import {ActionsTypes} from "./ActionTypes";
import {v1} from "uuid";


const ADD_MESSAGE = 'ADD-MESSAGE';


export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}
export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageText: string
}

export type InitialStateDialogReducerType = typeof initialState

const initialState = {
    dialogs: [
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'Natali'},
        {id: v1(), name: 'Anna'}
    ] as Array<DialogsType>,
    messages: [
        {id: v1(), message: 'I am a developer'},
        {id: v1(), message: 'bla bla'},
        {id: v1(), message: 'la la'}
    ] as Array<MessagesType>,
} as DialogsPageType

export const dialogReducer = (state: InitialStateDialogReducerType = initialState, action: ActionsTypes): InitialStateDialogReducerType => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: action.newMessageText}]
            }

        default:
            return state
    }
}

export const sendMessageAC = (newMessageText: string) => {
    return {
        type: ADD_MESSAGE,
        newMessageText: newMessageText
    } as const
}