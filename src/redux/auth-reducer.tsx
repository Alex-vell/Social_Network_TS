import {authAPI, LoginParamsType, securityAPI} from "../api/api";
import {Dispatch} from "redux";
import {handleServerAppError} from "../utills/error-utils";

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'
const SET_ERROR = 'auth/SET_ERROR'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    error: null,
    captchaURL: null
    //isFetching: true
}

export const authReducer = (state: InitialStateAuthReducerType = initialState, action: ActionType): InitialStateAuthReducerType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case "auth/GET_CAPTCHA_URL_SUCCESS":
            return {
                ...state,
                ...action.payload,
            }

        case SET_ERROR:
            return {...state, error: action.error}

        default:
            return state

    }
}

//action
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {userId, email, login, isAuth}

    } as const
}

export const getCaptchaUrlSuccess = (captchaURL: string | null) => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        payload: {captchaURL}

    } as const
}

export const setError = (error: string | null) => {
    return {
        type: SET_ERROR,
        error

    } as const
}

//Thunk creator
export const getAuthUser = () => async (dispatch: Dispatch) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
    return response
}

export const loginUser = (data: LoginParamsType) => {
    return async (dispatch: Dispatch<any>) => {
        const response = await authAPI.login(data)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUser())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            handleServerAppError(response.data, dispatch)
        }
        /* .catch((error: AxiosError) => {
             alert(error.message)
         })*/
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch: Dispatch<any>) => {
        const response = await securityAPI.getCaptchaUrl()
        dispatch(getCaptchaUrlSuccess(response.data.url))

    }
}

export const logoutUser = () => {
    return async (dispatch: Dispatch) => {
        const response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}

//types
export type InitialStateAuthReducerType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    error: string | null
    captchaURL: string | null
}

type ActionType = ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setError>
    | ReturnType<typeof getCaptchaUrlSuccess>

