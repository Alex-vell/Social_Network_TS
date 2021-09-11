import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileContent from "./ProfileContent/ProfileContent";
import {ProfilePageType} from "../../redux/state";

/*type PostsType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostsType>
}*/
type StateType = {
    profilePage: ProfilePageType
    addPostCallback: (postMessage: string) => void
    addNewPostTextCallback: (newText: string) => void
}

const Profile: React.FC<StateType> = (props) => {
    return (
        <div>
            <ProfileContent/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     addPostCallback={props.addPostCallback}
                     addNewPostTextCallback={props.addNewPostTextCallback}/>
        </div>
    )
}

export default Profile
