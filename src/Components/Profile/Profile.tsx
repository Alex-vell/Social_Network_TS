import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileContent from "./ProfileContent/ProfileContent";
import Post from "./MyPosts/Post/Post";

type profilePropsType = {
    id: number
    message: string
    likesCount: number
}
type postDataType = {
    posts: Array<profilePropsType>
}


const Profile: React.FC<postDataType> = (props) => {


    /*let postsElement = posts.map(el => <Post message={el.message} likesCount={el.likesCount} />)*/


    return (
        <div>
            <ProfileContent/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile
