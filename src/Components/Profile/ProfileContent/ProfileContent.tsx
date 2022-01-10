import React, {ChangeEvent, useState} from "react";
import s from './ProfileContent.module.css'
import {Preloader} from "../../general/Preloader/Preloader";
import photoAvatar from "../../../assets/images/photoAvatar.jpg";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileDataForm} from "./ProfileDataForm";

type profileContentType = {
    profile: any
    status: string
    isOwner: boolean
    savePhoto: (photo: File) => void
    updateUserStatus: (status: string) => void
    saveProfile: (profile: any) => void

}

export const ProfileContent: React.FC<profileContentType> = (
    { profile, status, updateUserStatus, isOwner,savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false)

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

                {editMode
                ? <ProfileDataForm saveProfile={saveProfile} profile={profile} toEditMode={() => {setEditMode(false)}}/>
                : <ProfileData profile={profile} isOwner={isOwner} toEditMode={() => {setEditMode(true)}}/>
                }
            </div>
        </div>
    )
}


// <div>Contacts:</div>
// <ul>
//     {profile.contacts.github ? <li> GitHub: {profile.contacts.github}</li> : null}
//     {profile.contacts.vk ? <li> vk: {profile.contacts.vk}</li> : null}
//     {profile.contacts.facebook ? <li> facebook: {profile.contacts.facebook}</li> : null}
//     {profile.contacts.instagram ? <li> instagram: {profile.contacts.instagram}</li> : null}
//     {profile.contacts.twitter ? <li> twitter: {profile.contacts.twitter}</li> : null}
//     {profile.contacts.website ? <li> website: {profile.contacts.website}</li> : null}
//     {profile.contacts.youtube ? <li> youtube: {profile.contacts.youtube}</li> : null}
//     {profile.contacts.mainLink ? <li> mainLink: {profile.contacts.mainLink}</li> : null}
// </ul>

type ProfilePropsType = {
    profile: any
    isOwner: boolean
    toEditMode: () => void
}

export const ProfileData: React.FC<ProfilePropsType> = ({profile, isOwner, toEditMode}) => {
  return (
      <div>
          {isOwner && <button onClick={toEditMode}>Edit</button>}
          <div>
              <b>Full name</b>: {profile.fullName}
          </div>
          <div>
              <b>Looking for a job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}
          </div>
          {
              profile.lookingForAJob &&
              <div>
                  <b>My professional skills</b>: {profile.lookingForAJobDescription}
              </div>
          }
          <div>
              <b>About me</b>: {profile.aboutMe}
          </div>

          <div>
              <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
              return <Contacts key={key}
                               contactTitle={key}
                               contactValue={profile.contacts[key]}/>
          })}
          </div>
      </div>
  )
}


type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

export const Contacts: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
  return (
      <div>
          <b>{contactTitle}</b>: {contactValue}
      </div>
  )
}