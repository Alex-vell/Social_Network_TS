import React from "react";
import {ProfileContent} from "./ProfileContent/ProfileContent";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type StateType = {
    isOwner: boolean
    profile: any
    status: string
    savePhoto: (photo: File) => void
    updateUserStatus: (status: string) => void
    saveProfile: (profile: any) => void
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
