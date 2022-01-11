import React, {ChangeEvent, useState} from "react";
import s from './ProfileContent.module.css'
import {Preloader} from "../../general/Preloader/Preloader";
import photoAvatar from "../../../assets/images/photoAvatar.jpg";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import {FormDataType, ProfileDataForm} from "./ProfileDataForm/ProfileDataForm";
import {ProfileType} from "../../../redux/profile-reducer";


type profileContentType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    savePhoto: (photo: File) => void
    updateUserStatus: (status: string) => void
    saveProfile: (profile: FormDataType) => void

}

export const ProfileContent: React.FC<profileContentType> = (
    {profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {

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
        <div className={s.profileContentContainer}>
            <div>
                {/*<img className={s.userPhotoImg} src={profile.photos.large || photoAvatar} alt='user'/>*/}
                {/*{isOwner && <div><input type={'file'} onChange={onPhotoSelected}/></div>}*/}
                {/*<ProfileStatusWithHooks status={status}
                                        isOwner={isOwner}
                                        updateUserStatus={updateUserStatus}/>*/}

                {editMode
                    ? <ProfileDataForm saveProfile={saveProfile} profile={profile} toEditMode={() => {
                        setEditMode(false)
                    }}/>
                    : <div className={s.imgAndProfileDataContainer}>
                        <div>
                            <img className={s.userPhotoImg} src={profile.photos.large || photoAvatar} alt='user'/>
                            {isOwner && <div><input type={'file'} onChange={onPhotoSelected}/></div>}
                        </div>
                        <div className={s.profileData}>
                            <ProfileData profile={profile}
                                        isOwner={isOwner}
                                        toEditMode={() => {
                                            setEditMode(true)
                                        }}/>
                        </div>
                    </div>
                }
                <ProfileStatusWithHooks status={status}
                                        isOwner={isOwner}
                                        updateUserStatus={updateUserStatus}/>
            </div>
        </div>
    )
}


type ProfilePropsType = {
    profile: FormDataType
    isOwner: boolean
    toEditMode: () => void
}

export const ProfileData: React.FC<ProfilePropsType> = (
    {profile, isOwner, toEditMode}) => {
    return (
        <div>
            <div className={s.dataEl}>
                <b className={s.titleData}>Full name:</b> <span className={s.valueData}>{profile.fullName}</span>
            </div>
            <div className={s.dataEl}>
                <b className={s.titleData}>Looking for a job:</b> <span className={s.valueData}>{profile.lookingForAJob ? 'Yes' : 'No'}</span>
            </div>
            {
                profile.lookingForAJob &&
                <div className={s.dataEl}>
                    <b className={s.titleData}>My professional skills:</b> <span className={s.valueData}>{profile.lookingForAJobDescription}</span>
                </div>
            }
            <div className={s.dataEl}>
                <b className={s.titleData}>About me:</b> <span className={s.valueData}>{profile.aboutMe}</span>
            </div>

            <div className={s.contactsWrapper}>
                <b className={s.titleData}>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <Contacts key={key}
                                 contactTitle={key}
                                 contactValue={profile.contacts[key]}/>
            })}
            </div>
            {isOwner && <button className={s.bntSaveData} onClick={toEditMode}>Edit</button>}
        </div>
    )
}


type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

export const Contacts: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contactEl}>
            <b className={s.contactTitle}>{contactTitle}:</b> <span className={s.contactValue}>{contactValue}</span>
        </div>
    )
}