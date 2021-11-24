import {ActionsTypes} from "./ActionTypes";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";


const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

export type InitialStateAuthReducerType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    //isFetching: true
}

export const authReducer = (state: InitialStateAuthReducerType = initialState, action: ActionsTypes): InitialStateAuthReducerType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {

                ...state,
                ...action.payload,
            }

        default:
            return state

    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {userId, email, login, isAuth}

    } as const
}

//Thunk creator

export const getAuthUser = () => (dispatch: Dispatch) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        })

}

export const loginUser = (email: string | null, password: string | null, rememberMe: boolean) => {
    return (dispatch: Dispatch<any>) => {
        authAPI.login(email, password, rememberMe,)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUser())
                }
            })
    }
}

export const logoutUser = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}





