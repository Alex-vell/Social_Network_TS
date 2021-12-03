import {ActionsTypes} from "./ActionTypes";
import {Dispatch} from "redux";
import {getAuthUser} from "./auth-reducer";


const SET_INITIALIZED = 'SET_INITIALIZED'

export type InitialStatAppReducerType = {
    initialized: boolean
}


const initialState = {
    initialized: false
}

export const appReducer = (state: InitialStatAppReducerType = initialState, action: ActionsTypes): InitialStatAppReducerType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }

        default:
            return state

    }
}

// action

export const setInitialized = () => ({type: SET_INITIALIZED} as const)


//Thunk creator

export const initializeApp = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(getAuthUser())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialized())
        })

}


