import React from "react";
import s from './ProfileContent.module.css'
import {Preloader} from "../../general/Preloader/Preloader";
import photoAvatar from "../../../assets/images/photoAvatar.jpg";
import {ProfileStatus} from "./ProfileStatus";

type profileContentType = {
    profile: any
    status: string
    updateUserStatus: (status: string) => void

}

export const ProfileContent: React.FC<profileContentType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.userPhotoImg} src={props.profile.photos.large || photoAvatar} alt='user'/>

                <ProfileStatus status={props.status}
                               updateUserStatus={props.updateUserStatus}/>


                <div>Full name: {props.profile.fullName}</div>
                {props.profile.lookingForAJob ? <div>looking for a job</div> : ''}
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
