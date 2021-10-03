import {ActionsTypes} from "./store";

const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

/*export type InitialStateProfileReducerType = {
    posts: Array<PostsType>
    newPostText: string
}*/

export type InitialStateProfileReducerType = typeof initialState

const initialState = {
    posts: [
        {id: 1, message: 'Hey la lay', likesCount: 15},
        {id: 2, message: 'Bla bla', likesCount: 11}
    ] as Array<PostsType>,
    newPostText: ''
} as ProfilePageType

export const profileReducer = (state: InitialStateProfileReducerType = initialState, action: ActionsTypes): InitialStateProfileReducerType => {

    switch (action.type) {
        case ADD_POST:
            let newPost = state.newPostText /*{
                id: new Date().getDate(),
                message: state.newPostText,
                likesCount: 0
            }*/
            /*let newState = {...state}*/
            return {
                ...state,
                posts: [...state.posts, {
                    id: new Date().getDate(),
                    message: newPost,
                    likesCount: 0
                },
                ],
                newPostText: '',
            }

        case ADD_NEW_POST_TEXT:
            /*let newState = {...state}*/
            /*newState.posts = [...state.posts]*/
            return {
                ...state,
                newPostText: action.newPostMessageText
            }

        default:
            return state
    }
}

export const addPostAC = (postText: string) => {
    return {
        type: ADD_POST,
        postText: postText
    } as const
}
export const addNewPostTextAC = (newPostMessageText: string) => {
    return {
        type: ADD_NEW_POST_TEXT,
        newPostMessageText: newPostMessageText
    } as const
}