import {addNewPostTextAC, addPostAC, setUserProfile} from "./profile-reducer";
import {addMessageAC, addNewMessageTextAC} from "./dialog-reducer";
import {
    setFollow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    setToggleIsFetching,
    setUnFollow,
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