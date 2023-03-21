import React from "react";
import styles from './Users.module.scss'
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
        <div className={styles.user}>
            <div className={styles.content}>
                <div>
                    <NavLink to={'./profile/' + user.id}>
                        <img
                            src={user.photos.small !== null ? user.photos.small : photoAvatar}
                            className={styles.userPhoto}
                            alt={'User'}
                        />
                    </NavLink>
                </div>

                <div className={styles.infoBlock}>
                    <span className={styles.userName}>{user.name}</span>
                    <span className={styles.status}>{user.status}</span>
                </div>
            </div>

            <div>
                {user.followed
                    ? <button
                        className={`${styles.button} ${styles.unfollow}`}
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            unFollow(user.id)

                        }}>
                        Unfollow</button>

                    : <button
                        className={`${styles.button} ${styles.follow}`}
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {

                            follow(user.id)

                        }}>Follow</button>}
            </div>
        </div>
    )
}
