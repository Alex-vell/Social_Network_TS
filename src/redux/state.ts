import {addNewPostTextAC, addPostAC, profileReducer} from "./profile-reducer";
import {addMessageAC, addNewMessageTextAC, dialogReducer} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type DialogsType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type MessagesType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageText: string
}
export type SidebarType = {}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: StateType
    subscribe: (callback: () => void) => void
    _onChangeRender: (state: StateType) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof addNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof addNewMessageTextAC>

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hey la lay', likesCount: 15},
                {id: 2, message: 'Bla bla', likesCount: 11}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _onChangeRender(state: StateType) {
        console.log('RERENDER')
    },
    subscribe(callback) {
        this._onChangeRender = callback
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._onChangeRender(this._state)
    }
}