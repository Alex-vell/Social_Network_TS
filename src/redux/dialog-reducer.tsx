import {v1} from "uuid";

const ADD_MESSAGE = 'dialog/ADD-MESSAGE';

const initialState = {
    dialogs: [
    ] as Array<DialogsType>,
    messages: [
    ] as Array<MessagesType>,
} as DialogsPageType

export const dialogReducer = (state: InitialStateDialogReducerType = initialState, action: ActionType): InitialStateDialogReducerType => {

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

//action
export const sendMessageAC = (newMessageText: string) => {
    return {
        type: ADD_MESSAGE,
        newMessageText: newMessageText
    } as const
}

//types
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
type ActionType = ReturnType<typeof sendMessageAC>
