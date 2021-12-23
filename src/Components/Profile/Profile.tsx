import React from "react";
import {ProfileContent} from "./ProfileContent/ProfileContent";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type StateType = {
    isOwner: boolean
    profile: any
    status: string
    savePhoto: (photo: File) => void
    updateUserStatus: (status: string) => void
}

export const Profile: React.FC<StateType> = (props) => {
    return (
        <div>
            <ProfileContent profile={props.profile}
                            isOwner={props.isOwner}
                            status={props.status}
                            savePhoto={props.savePhoto}
                            updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer
            />
        </div>
    )
}
