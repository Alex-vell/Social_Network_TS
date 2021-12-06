import {addPostAC, deletePostAC, setUserProfile, setUserStatus} from "./profile-reducer";
import {sendMessageAC} from "./dialog-reducer";
import {
    setCurrentPage,
    setFollow,
    setToggleIsFetching,
    setTotalUsersCount,
    setUnFollow,
    setUsers,
    toggleFollowingInProgress
} from "./users-reducer";
import {setAuthUserData, setError} from "./auth-reducer";
import {setInitialized} from "./app-reducer";

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof setFollow>
    | ReturnType<typeof setUnFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setToggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingInProgress>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof setInitialized>
    | ReturnType<typeof setError>
    | ReturnType<typeof deletePostAC>