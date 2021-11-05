import {ActionsTypes} from "./ActionTypes";
import {profileAPI, ResponseProfileType} from "../api/api";
import {Dispatch} from "redux";


const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: any
    status: string
}

export type InitialStateProfileReducerType = typeof initialState

const initialState = {
    posts: [
        {id: 1, message: 'Hey la lay', likesCount: 15},
        {id: 2, message: 'Bla bla', likesCount: 11}
    ] as Array<PostsType>,
    newPostText: '',
    profile: null,
    status: ''
} as ProfilePageType

export const profileReducer = (state: InitialStateProfileReducerType = initialState, action: ActionsTypes): InitialStateProfileReducerType => {

    switch (action.type) {
        case ADD_POST:
            let newPost = state.newPostText
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
            return {
                ...state,
                newPostText: action.newPostMessageText
            }

        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }

        case SET_USER_STATUS: {
            return {
                ...state, status: action.status
            }
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
export const setUserProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
export const setUserStatus = (status: string) => {
    return {
        type: SET_USER_STATUS,
        status
    } as const
}

//Thunk creator

export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch) => {
        debugger
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export const getUserStatus = (userId: number) => (dispatch: Dispatch) => {
      profileAPI.getStatus(userId)
          .then(response => {
              debugger
          dispatch(setUserStatus(response.data))
      })
  }

export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}
