import React from "react";
import styles from './Users.module.css'
import photoAvatar from "../../assets/images/photoAvatar.jpg";
import {InitialStateUsersReducerType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";


type UsersType = {
    follow: (userId: number | null) => void
    unFollow: (userId: number | null) => void
    users: InitialStateUsersReducerType
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onPageChangedCallback: (pageNumber: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number | null) => void
    followingInProgress: Array<number | null>
}


export const Users = (props: UsersType) => {

    let pages = []
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectPageActive
                    ? styles.selectPageActive
                    : styles.selectPage}
                             key={p}
                             onClick={(event => props.onPageChangedCallback(p))}>{p}</span>
            })}

        </div>
        {
            props.users.users.map(u => <div key={u.id}>
        <span>
          <div>
            <NavLink to={'./profile/' + u.id}> <img src={u.photos.small !== null ? u.photos.small : photoAvatar}
                                                    className={styles.userPhoto} alt={'User Photo'}/></NavLink>
          </div>
          <div>
            {u.followed
                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                    props.toggleFollowingInProgress(true, u.id)
                    followAPI.unFollowUser(u.id).then(data => {
                        if (data.resultCode === 0) {
                            props.unFollow(u.id)
                        }
                        props.toggleFollowingInProgress(false, u.id)
                    })


                }}>Unfollow</button>

                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                    props.toggleFollowingInProgress(true, u.id)
                    followAPI.followUser(u.id).then(data => {
                        if (data.resultCode === 0) {
                            props.follow(u.id)
                        }
                        props.toggleFollowingInProgress(false, u.id)
                    })


                }}>Follow</button>}
          </div>
        </span>
                <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
          </span>
        </span>
            </div>)
        }
    </div>
}
