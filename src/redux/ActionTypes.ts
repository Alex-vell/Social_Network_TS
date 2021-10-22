import {addNewPostTextAC, addPostAC, setUserProfile} from "./profile-reducer";
import {addMessageAC, addNewMessageTextAC} from "./dialog-reducer";
import {follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unFollow} from "./users-reducer";
import {setAuthUserData} from "./auth-reducer";

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof addNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof addNewMessageTextAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>