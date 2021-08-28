type DialogsType = {
    id: number
    name: string
}
type PostsType = {
    id: number
    message: string
    likesCount: number
}
type MessagesType = {
    id: number
    message: string
}
type ProfilePageType = {
    posts: Array<PostsType>
}
type DialogPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}
type SidebarType = {}

type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}


let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hey la lay', likesCount: 15},
            {id: 2, message: 'Bla bla', likesCount: 11}
        ]
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
        ]
    },
    sidebar: {}
}

export default state