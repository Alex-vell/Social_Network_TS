import {ActionsTypes} from "./store";

const SET_USER_DATA = 'SET_USER_DATA'


export type DataType = {
    id: number | null
    email: string | null
    login: string | null
}
export type InitialStateAuthReducerType = {
    data: DataType
    isAuth: boolean
    //isFetching: boolean
}


const initialState = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false,
    //isFetching: true
}


export const authReducer = (state: InitialStateAuthReducerType = initialState, action: ActionsTypes): InitialStateAuthReducerType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }


        default:
            return state

    }
}

export const setAuthUserData = (data: DataType, id: number | null,
                                email: string | null,
                                login: string | null,
                                isAuth: boolean,) => {
    return {
        type: SET_USER_DATA,
        data,
        id,
        email,
        login,
        isAuth,
    } as const
}


