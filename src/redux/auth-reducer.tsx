import {ActionsTypes} from "./ActionTypes";
import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

export type DataType = {
    email: string | null
    id: number | null
    login: string | null
}
export type InitialStateAuthReducerType = {
    data: DataType
    isAuth: boolean
    //isFetching: boolean
}

const initialState = {
    data: {
        email: null,
        id: null,
        login: null,
    },
    isAuth: false,
    //isFetching: true
}


export const authReducer = (state: InitialStateAuthReducerType = initialState, action: ActionsTypes): InitialStateAuthReducerType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {

                ...state,
                data: {...action.data},
                isAuth: true
            }


        default:
            return state

    }
}

export const setAuthUserData = (data: DataType, isAuth: boolean,) => {
    return {
        type: SET_AUTH_USER_DATA,
        data,
        isAuth,
    } as const
}

//Thunk creator

export const getAuthUser = () => {
    return (dispatch: any) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(response.data.data, response.data.isAuth))
            }
        })
    }
}






