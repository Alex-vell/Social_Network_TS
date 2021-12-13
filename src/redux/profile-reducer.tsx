import {profileAPI} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const DELETE_POST = 'profile/DELETE_POST';

const initialState = {
    posts: [
        {id: 1, message: 'Hey la lay', likesCount: 15},
        {id: 2, message: 'Bla bla', likesCount: 11}
    ] as Array<PostsType>,
    profile: null,
    status: ''
} as ProfilePageType

export const profileReducer = (state: InitialStateProfileReducerType = initialState, action: ActionType): InitialStateProfileReducerType => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: 3,
                    message: action.newPostText,
                    likesCount: 0
                },
                ],
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

        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.postId)
            }

        default:
            return state
    }
}

//action
export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
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

export const deletePostAC = (postId: number) => {
    return {
        type: DELETE_POST,
        postId
    } as const
}

//Thunk creator
export const getUserProfile = (userId: number) => {
    return async (dispatch: Dispatch) => {
        const response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    }
}

export const getUserStatus = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response.data))
}

export const updateUserStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

//types
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

type ActionType = ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof deletePostAC>