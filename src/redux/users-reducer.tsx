import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
    users: [
        {
            name: null,
            id: null,
            photos: {
                small: null,
                large: null
            },
            status: null,
            followed: false
        }
    ],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}


export const usersReducer = (state: InitialStateUsersReducerType = initialState, action: ActionType): InitialStateUsersReducerType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(f => {
                    if (f.id === action.userId) {
                        return {...f, followed: true}
                    }
                    return f
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(f => {
                    if (f.id === action.userId) {
                        return {...f, followed: false}
                    }
                    return f
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state

    }
}

// action
export const setFollow = (userId: number | null) => {
    return {
        type: FOLLOW,
        userId
    } as const
}
export const setUnFollow = (userId: number | null) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount
    } as const
}
export const setToggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}
export const toggleFollowingInProgress = (isFetching: boolean, userId: number | null) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId,
    } as const
}

//Thunk Creator
export const requestUsers = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(setToggleIsFetching(true))
    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
    dispatch(setToggleIsFetching(false))
}

export const unFollow = (userId: number | null) => async (dispatch: Dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    const response = await usersAPI.unFollowUser(userId)
    if (response.data.resultCode === 0) {
        dispatch(setUnFollow(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}

export const follow = (userId: number | null) => async (dispatch: Dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    const response = await usersAPI.followUser(userId)
    if (response.data.resultCode === 0) {
        dispatch(setFollow(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}

//types
type PhotoType = {
    small: string | null
    large: string | null
}
export type UserType = {
    id: number | null
    name: string | null
    status: string | null
    photos: PhotoType
    followed: boolean

    //location: locationType
}

export type InitialStateUsersReducerType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number | null>
}

type ActionType = | ReturnType<typeof setFollow>
    | ReturnType<typeof setUnFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setToggleIsFetching>
    | ReturnType<typeof toggleFollowingInProgress>