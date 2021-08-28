import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileContent from "./ProfileContent/ProfileContent";

type profilePropsType = {
    id: number
    message: string
    likesCount: number
}
let postData = [
    {id: 1, message: 'Hey la lay', likesCount: 15},
    {id: 2, message: 'Bla bla', likesCount: 11},
]

const Profile: React.FC<profilePropsType> = () => {

    return (
        <div>
            <ProfileContent/>
            <MyPosts postData={postData} />
        </div>
    )
}

export default Profile
