import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileContent from "./ProfileContent/ProfileContent";

type profilePropsType = {

}

const Profile: React.FC<profilePropsType> = () => {
    return (
        <div>
            <ProfileContent/>
            <MyPosts/>
        </div>
    )
}

export default Profile
