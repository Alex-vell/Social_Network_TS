import {connect} from "react-redux";
import {follow, requestUsers, setCurrentPage, toggleFollowingInProgress, unFollow,} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import React, {ComponentType} from "react";
import {Users} from "./Users";
import {Preloader} from "../general/Preloader/Preloader";
import {compose} from "redux";
import {
    getUsers,
    getPageSize,
    getTotalUserCount,
    getCurrentPage,
    getIsFetching, getFollowingInProgress,
} from "../../redux/users-selectors";


export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    componentWillUnmount() {

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChangedCallback={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {
        follow, unFollow, setCurrentPage,
        toggleFollowingInProgress, getUsers: requestUsers
    }),
    /*withAuthRedirect*/
)(UsersContainer)

//types
type mapStateToPropsType = ReturnType<typeof mapStateToProps>

type mapDispatchToPropsType = {
    follow: (userId: number | null) => void
    unFollow: (userId: number | null) => void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number | null) => void
    getUsers: (currentPage: number, pageSize: number) => void

}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType