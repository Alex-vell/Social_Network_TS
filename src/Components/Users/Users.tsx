import React from "react";
import styles from './Users.module.css'
import photoAvatar from "../../assets/images/photoAvatar.jpg";
import {InitialStateUsersReducerType} from "../../redux/users-reducer";


type UsersType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    users: InitialStateUsersReducerType
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onPageChangedCallback: (pageNumber: number) => void
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
            <img src={`${u.photos.small != null ? u.photos.small : photoAvatar}`}
                 className={styles.userPhoto}/> {/*u.photos.small != null ? u.photos.small : photoAvatar*/}
          </div>
          <div>
            {u.followed
                ? <button onClick={() => props.follow(u.id)}>follow</button>
                : <button onClick={() => props.unfollow(u.id)}>unfollow</button>}
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
