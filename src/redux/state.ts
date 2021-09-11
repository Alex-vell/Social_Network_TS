let rerenderEntireTree = (state: StateType) => {
    console.log('RERENDER')
}


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


let state: StateType = {
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
}

export const addPost = () => {
    let newPost = {
        id: new Date().getDate(),
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}
export const addNewPostText = (newText: string) => {

    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}


export const addMessage = () => {

    let newMessage = {
        id: new Date().getDate(),
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree(state)
}
export const addNewMessageText = (newText: string) => {

    state.dialogsPage.newMessageText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer
}

export default state