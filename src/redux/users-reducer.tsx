import {ActionsTypes} from "./store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

type locationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    photos: string
    followed: boolean
    name: string,
    status: string
    //location: locationType
}
/*export type InitialStateUsersReducerType = typeof initialState*/
export type InitialStateUsersReducerType = {
    users: Array<UserType>
}

const initialState: InitialStateUsersReducerType = {
    users: []
}


export const usersReducer = (state: InitialStateUsersReducerType = initialState, action: ActionsTypes): InitialStateUsersReducerType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(f => {
                    if (f.id === action.userId) {
                        return {...f, followed: false}
                    }
                    return f
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(f => {
                    if (f.id === action.userId) {
                        return {...f, followed: true}
                    }
                    return f
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state

    }
}

export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}
export const unFollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}