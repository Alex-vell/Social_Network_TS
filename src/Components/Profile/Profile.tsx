import React from "react";
import {ProfileContent} from "./ProfileContent/ProfileContent";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {FormDataType} from "./ProfileContent/ProfileDataForm/ProfileDataForm";
import {ProfileType} from "../../redux/profile-reducer";


type StateType = {
    isOwner: boolean
    profile: ProfileType
    status: string
    savePhoto: (photo: File) => void
    updateUserStatus: (status: string) => void
    saveProfile: (profile: FormDataType) => void
}

export const Profile: React.FC<StateType> = (
    {profile,isOwner, status, savePhoto, saveProfile, updateUserStatus}) => {
    return (
        <div>
            <ProfileContent profile={profile}
                            isOwner={isOwner}
                            status={status}
                            savePhoto={savePhoto}
                            saveProfile={saveProfile}
                            updateUserStatus={updateUserStatus}/>
            <MyPostsContainer
            />
        </div>
    )
}
