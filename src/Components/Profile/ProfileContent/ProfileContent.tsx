import React from "react";
import s from './ProfileContent.module.css'
import {Preloader} from "../../general/Preloader/Preloader";

type profileContentType = {
    profile: any
}

export const ProfileContent: React.FC<profileContentType> = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.image}>
                <img src='https://img.hipertextual.com/content/images/system/home_cover_1487382543596_2cf9e3.jpg'/>
            </div>
            <div>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
}
