import React from "react";
import styles from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import photoAvatar from '../../assets/images/photoAvatar.jpg'
import axios from "axios";


export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        alert('componentDidMount')
        axios.get<any>('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    componentWillUnmount() {
        alert('componentWillUnmount')
    }

    render() {
        return <div>
            {
                this.props.users.users.map(f => <div key={f.id}>
        <span>
          <div>
            <img src={photoAvatar} className={styles.userPhoto}/> {/*f.photos.small != null ? f.photos.small : photoAvatar*/}
          </div>
          <div>
            {f.followed
                ? <button onClick={() => this.props.follow(f.id)}>follow</button>
                : <button onClick={() => this.props.unfollow(f.id)}>unfollow</button>}
          </div>
        </span>
                    <span>
          <span>
            <div>{f.name}</div>
            <div>{f.status}</div>
          </span>
          <span>
            <div>{'f.location.country'}</div>
            <div>{'f.location.city'}</div>
          </span>
        </span>
                </div>)
            }
        </div>
    }
}
