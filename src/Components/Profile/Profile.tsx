import React from "react";
import {ProfileContent} from "./ProfileContent/ProfileContent";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserType} from "../../redux/users-reducer";

type StateType = {
    profile: any
    status: string
    updateUserStatus: (status: string) => void
}

export const Profile: React.FC<StateType> = (props) => {

    return (
        <div>
            <ProfileContent profile={props.profile}
                            status={props.status}
                            updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer
            />
        </div>
    )
}
