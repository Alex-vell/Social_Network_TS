import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileContent from "./ProfileContent/ProfileContent";

type PostsType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostsType>
}
type StateType = {
    state: ProfilePageType
}

const Profile: React.FC<StateType> = (props) => {
    return (
        <div>
            <ProfileContent/>
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}

export default Profile
