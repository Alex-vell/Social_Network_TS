import {ActionsTypes, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';

const initialState = {
    posts: [
        {id: 1, message: 'Hey la lay', likesCount: 15},
        {id: 2, message: 'Bla bla', likesCount: 11}
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: new Date().getDate(),
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case ADD_NEW_POST_TEXT:
            state.newPostText = action.newPostMessageText
            return state
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