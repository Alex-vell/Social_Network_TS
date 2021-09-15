const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT';

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
   /* addPost: () => void
    addNewPostText: (newText: string) => void
    addMessage: () => void
    addNewMessageText: (newText: string) => void*/
    subscribe: (callback: () => void) => void
    _onChangeRender: (state: StateType) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}

/*
type AddPostActionType = ReturnType<typeof addPostAC>
type AddNewPostTextActionType = ReturnType<typeof addNewPostTextAC>
type AddMessageActionType = ReturnType<typeof addMessageAC>
type AddNewMessageTextActionType = ReturnType<typeof addNewMessageTextAC>
*/

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof addNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof addNewMessageTextAC>

export const addPostAC = (postText: string) => {
    return {
        type: ADD_POST,
        postText: postText
    } as const
}
export const addNewPostTextAC = (newText: string) => {
    return {
        type: ADD_NEW_POST_TEXT,
        newText: newText
    } as const
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

    /*addPost() {
        let newPost = {
            id: new Date().getDate(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._onChangeRender(this._state)
    },
    addNewPostText(newText: string) {

        this._state.profilePage.newPostText = newText
        this._onChangeRender(this._state)
    },
    addMessage() {

        let newMessage = {
            id: new Date().getDate(),
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._onChangeRender(this._state)
    },
    addNewMessageText(newText: string) {
        this._state.dialogsPage.newMessageText = newText
        this._onChangeRender(this._state)
    },*/

    subscribe(callback) {
        this._onChangeRender = callback
    },
    getState() {
        return this._state
    },

    dispatch(action) { //{type: 'ADD-POST}
        if (action.type === ADD_POST) {
            let newPost = {
                id: new Date().getDate(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._onChangeRender(this._state)
        } else if (action.type === ADD_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._onChangeRender(this._state)
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: new Date().getDate(),
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._onChangeRender(this._state)
        } else if (action.type === ADD_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText
            this._onChangeRender(this._state)
        }
    }
}