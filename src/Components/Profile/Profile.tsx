import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileContent from "./ProfileContent/ProfileContent";
import Post from "./MyPosts/Post/Post";

export type profilePropsType = {
    id: number
    message: string
    likesCount: number
}


const Profile: React.FC<profilePropsType> = () => {

    let posts = [
        {id: 1, message: 'Hey la lay', likesCount: 15},
        {id: 2, message: 'Bla bla', likesCount: 11}
    ]
    let postsElement = posts.map(el => <Post message={el.message} likesCount={el.likesCount} />)


    return (
        <div>
            <ProfileContent/>
            <MyPosts postsElement={postsElement} />
        </div>
    )
}

export default Profile
