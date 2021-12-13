import React from "react";
import styles from './Users.module.css'
import photoAvatar from "../../assets/images/photoAvatar.jpg";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type UsersType = {
    key: number | null
    follow: (userId: number | null) => void
    unFollow: (userId: number | null) => void
    user: UserType
    followingInProgress: Array<number | null>
}

export const User: React.FC<UsersType> = (
    {
        user, followingInProgress,
        unFollow, follow
    }) => {

    return (
        <div>
        <span>
          <div>
            <NavLink to={'./profile/' + user.id}> <img src={user.photos.small !== null ? user.photos.small : photoAvatar}
                                                    className={styles.userPhoto} alt={'User'}/></NavLink>
          </div>
          <div>
            {user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

                    unFollow(user.id)

                }}>Unfollow</button>

                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

                    follow(user.id)

                }}>Follow</button>}
          </div>
        </span>
            <span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{'user.location.country'}</div>
            <div>{'user.location.city'}</div>
          </span>
        </span>
        </div>
    )
}
