import React from "react";
import s from './ProfileContent.module.css'

type profileContentType = {

}

const ProfileContent: React.FC<profileContentType> = () => {
    return (
        <div>
            <div className={s.image}>
                <img src='https://img.hipertextual.com/content/images/system/home_cover_1487382543596_2cf9e3.jpg'/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
}

export default ProfileContent
