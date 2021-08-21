import React from "react";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <img src='https://img.hipertextual.com/content/images/system/home_cover_1487382543596_2cf9e3.jpg'/>
            <div>
                ava + description
            </div>
            <div>
                My posts
            </div>
            <div>
                post 1
            </div>
            <div>
                post 2
            </div>
        </div>
    )
}

export default Profile
