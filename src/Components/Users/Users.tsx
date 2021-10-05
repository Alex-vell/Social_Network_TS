import React from "react";
import styles from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";

export const Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://icon-library.com/images/avatar-icon-free/avatar-icon-free-12.jpg',
                followed: true,
                fullName: 'Alex',
                status: 'I am a developer',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://icon-library.com/images/avatar-icon-free/avatar-icon-free-12.jpg',
                followed: false,
                fullName: 'Paul',
                status: 'I am a designer',
                location: {city: 'Paris', country: 'France'}
            },
            {
                id: 3,
                photoUrl: 'https://icon-library.com/images/avatar-icon-free/avatar-icon-free-12.jpg',
                followed: true,
                fullName: 'John',
                status: 'I am a manager',
                location: {city: 'Los Angeles', country: 'USA'}
            }
        ])
    }

    const followHandler = (userId: number) => {
        props.follow(userId)
    }
    const unfollowHandler = (userId: number) => {
        props.unfollow(userId)
    }
    return <div>
        {
            props.usersPage.users.map(f => <div key={f.id}>
        <span>
          <div>
            <img src={f.photoUrl} className={styles.userPhoto}/>
          </div>
          <div>
            {f.followed
                ? <button onClick={() => followHandler(f.id)}>follow</button>
                : <button onClick={() => unfollowHandler(f.id)}>unfollow</button>}
          </div>
        </span>
                <span>
          <span>
            <div>{f.fullName}</div>
            <div>{f.status}</div>
          </span>
          <span>
            <div>{f.location.country}</div>
            <div>{f.location.city}</div>
          </span>
        </span>
            </div>)
        }
    </div>
}