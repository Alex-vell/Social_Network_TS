import {Dispatch} from "redux";
import {getAuthUser} from "./auth-reducer";

const SET_INITIALIZED = 'app/SET_INITIALIZED'

const initialState = {
    initialized: false
}

export const appReducer = (state: InitialStatAppReducerType = initialState, action: ActionType): InitialStatAppReducerType => {
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

//types
export type InitialStatAppReducerType = {
    initialized: boolean
}
type ActionType = ReturnType<typeof setInitialized>

