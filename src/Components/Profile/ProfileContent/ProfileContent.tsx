import React, {ChangeEvent} from "react";
import s from './ProfileContent.module.css'
import {Preloader} from "../../general/Preloader/Preloader";
import photoAvatar from "../../../assets/images/photoAvatar.jpg";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type profileContentType = {
    profile: any
    status: string
    isOwner: boolean
    savePhoto: (photo: File) => void
    updateUserStatus: (status: string) => void

}

export const ProfileContent: React.FC<profileContentType> = (
    { profile, status, updateUserStatus, isOwner,savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
          const photo = e.target.files[0]
          savePhoto(photo)
      }
    }

    return (
        <div>
            <div>
                <img className={s.userPhotoImg} src={profile.photos.large || photoAvatar} alt='user'/>
                {isOwner && <input type={'file'} onChange={onPhotoSelected}/>}
                <ProfileStatusWithHooks status={status}
                                        isOwner={isOwner}
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
