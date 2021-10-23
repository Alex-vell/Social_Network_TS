import React from "react";
import s from './ProfileContent.module.css'
import {Preloader} from "../../general/Preloader/Preloader";
import photoAvatar from "../../../assets/images/photoAvatar.jpg";

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
                <img src='https://img.hipertextual.com/content/images/system/home_cover_1487382543596_2cf9e3.jpg' alt='img'/>
            </div>
            <div>
                <img className={s.userPhotoImg} src={props.profile.photos.large !== null ? props.profile.photos.large : photoAvatar} alt='Photo'/>
                <div>Full name: {props.profile.fullName}</div>
                {props.profile.lookingForAJob ? <div>looking for a job</div> : '' }
                <div>Contacts:</div>
                <ul>
                    {props.profile.contacts.github ? <li> GitHub: {props.profile.contacts.github}</li> : null}
                    {props.profile.contacts.vk ? <li> vk: {props.profile.contacts.vk}</li> : null}
                    {props.profile.contacts.facebook ? <li> facebook: {props.profile.contacts.facebook}</li> : null}
                    {props.profile.contacts.instagram ? <li> instagram: {props.profile.contacts.instagram}</li> : null}
                    {props.profile.contacts.twitter ? <li> twitter: {props.profile.contacts.twitter}</li> : null}
                    {props.profile.contacts.website ? <li> website: {props.profile.contacts.website}</li> : null}
                    {props.profile.contacts.youtube ? <li> youtube: {props.profile.contacts.youtube}</li> : null}
                    {props.profile.contacts.mainLink ? <li> mainLink: {props.profile.contacts.mainLink}</li> : null}
                </ul>
            </div>
        </div>
    )
}
