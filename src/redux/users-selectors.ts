import {AppStateType} from "./redux-store";


export const getUsers = (state: AppStateType) => {
  return state.usersPage
}
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUserCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}


// example reselect
// export const getUsersSuperSelector = createSelector(getUsers,
//     (users: any) => {
//     return users.filter(u => true) // example code
// })
