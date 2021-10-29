import React from "react";
import {ProfileContent} from "./ProfileContent/ProfileContent";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type StateType = {
   profile: any
}

export const Profile: React.FC<StateType> = (props) => {

    return (
        <div>
            <ProfileContent profile={props.profile} />
            <MyPostsContainer
            />
        </div>
    )
}
