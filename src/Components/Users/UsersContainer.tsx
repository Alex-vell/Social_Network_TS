import {connect} from "react-redux";
import {
    setCurrentPage, /*setTotalUsersCount,*/
    /*setUsers, setToggleIsFetching,*/
    /*UserType,*/
    toggleFollowingInProgress,
    getUsers,
    follow,
    unFollow,
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../general/Preloader/Preloader";
/*import {usersAPI} from "../../api/api";*/


export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.setToggleIsFetching(true)
        //
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        //     this.props.setToggleIsFetching(false)
        // })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

        this.props.setCurrentPage(pageNumber)
        // this.props.setToggleIsFetching(true)
        //
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.setUsers(data.items)
        //     this.props.setToggleIsFetching(false)
        // })
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
                //toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

type mapStateToPropsType = ReturnType<typeof mapStateToProps>

type mapDispatchToPropsType = {
    follow: (userId: number | null) => void
    unFollow: (userId: number | null) => void
    //setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    //setTotalUsersCount: (totalCount: number) => void
    //setToggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number | null) => void
    getUsers: (currentPage: number, pageSize: number) => void

}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    follow, unFollow, /*setUsers,*/ setCurrentPage,
    /*setTotalUsersCount,
    setToggleIsFetching,*/
    toggleFollowingInProgress, getUsers
})(UsersContainer)