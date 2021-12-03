
import {Dispatch} from 'redux'
import {setError} from "../redux/auth-reducer";
import {CommonResponseType} from "../api/api";

export const handleServerAppError = <D>(data: CommonResponseType<D>, dispatch: Dispatch) => {
    if (data.messages.length) {
        dispatch(setError(data.messages[0]))
    } else {
        dispatch(setError('Some error occurred'))
    }
}

// export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch) => {
//     dispatch(setError(error.message ? error.message : 'Some error occurred'))
//     // dispatch(setAppStatusAC('failed'))
// }