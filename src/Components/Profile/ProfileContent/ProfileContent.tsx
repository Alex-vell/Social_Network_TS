import React from "react";
import s from './ProfileContent.module.css'
import {Preloader} from "../../general/Preloader/Preloader";
import photoAvatar from "../../../assets/images/photoAvatar.jpg";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type profileContentType = {
    profile: any
    status: string
    updateUserStatus: (status: string) => void

}

export const ProfileContent: React.FC<profileContentType> = ({ profile, status, updateUserStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.userPhotoImg} src={profile.photos.large || photoAvatar} alt='user'/>

                <ProfileStatusWithHooks status={status}
                               updateUserStatus={updateUserStatus}/>


                <div>Full name: {profile.fullName}</div>
                {profile.lookingForAJob ? <div>looking for a job</div> : ''}
                <div>Contacts:</div>
                <ul>
                    {profile.contacts.github ? <li> GitHub: {profile.contacts.github}</li> : null}
                    {profile.contacts.vk ? <li> vk: {profile.contacts.vk}</li> : null}
                    {profile.contacts.facebook ? <li> facebook: {profile.contacts.facebook}</li> : null}
                    {profile.contacts.instagram ? <li> instagram: {profile.contacts.instagram}</li> : null}
                    {profile.contacts.twitter ? <li> twitter: {profile.contacts.twitter}</li> : null}
                    {profile.contacts.website ? <li> website: {profile.contacts.website}</li> : null}
                    {profile.contacts.youtube ? <li> youtube: {profile.contacts.youtube}</li> : null}
                    {profile.contacts.mainLink ? <li> mainLink: {profile.contacts.mainLink}</li> : null}
                </ul>
            </div>
        </div>
    )
}
