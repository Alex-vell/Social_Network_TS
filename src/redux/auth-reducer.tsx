import {ActionsTypes} from "./ActionTypes";
import {authAPI, LoginParamsType} from "../api/api";
import {Dispatch} from "redux";
import {handleServerAppError} from "../utills/error-utils";


const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

export type InitialStateAuthReducerType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    error: string | null
}


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    error: null
    //isFetching: true
}

export const authReducer = (state: InitialStateAuthReducerType = initialState, action: ActionsTypes): InitialStateAuthReducerType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {

                ...state,
                ...action.payload,
            }

        case "SET_ERROR":
            return {...state, error: action.error}

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

export const setError = (error: string | null) => {
    return {
        type: 'SET_ERROR',
        error

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
            return response
        })

}

export const loginUser = (data: LoginParamsType) => {
    return (dispatch: Dispatch<any>) => {
        authAPI.login(data)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUser())
                } else {
                    handleServerAppError(response.data, dispatch)
                }
            })
           /* .catch((error: AxiosError) => {
                alert(error.message)
            })*/
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





