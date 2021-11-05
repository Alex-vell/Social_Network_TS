import {addNewPostTextAC, addPostAC, setUserProfile, setUserStatus} from "./profile-reducer";
import {addMessageAC, addNewMessageTextAC} from "./dialog-reducer";
import {
    setCurrentPage,
    setFollow,
    setToggleIsFetching,
    setTotalUsersCount,
    setUnFollow,
    setUsers,
    toggleFollowingInProgress
} from "./users-reducer";
import {setAuthUserData} from "./auth-reducer";

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof addNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof addNewMessageTextAC>
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