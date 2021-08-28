import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileContent from "./ProfileContent/ProfileContent";
import Post from "./MyPosts/Post/Post";


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

    /*let postsElement = props.state.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />)*/


    return (
        <div>
            <ProfileContent/>
            <MyPosts posts={props.state.posts} />
        </div>
    )
}

export default Profile
