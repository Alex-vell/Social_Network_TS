import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching,
    unFollow,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../general/Preloader/Preloader";


export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        //alert('componentDidMount')
        this.props.toggleIsFetching(true)
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.toggleIsFetching(false)
            })
    }

    componentWillUnmount() {
        //alert('componentWillUnmount')
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users follow={this.props.follow}
                   unfollow={this.props.unFollow}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChangedCallback={this.onPageChanged}/>
        </>
    }
}

type mapStateToPropsType = ReturnType<typeof mapStateToProps>

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
/*const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(follow(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollow(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPage(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCount(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetching(isFetching))
        }
    }
}*/


export default connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer)