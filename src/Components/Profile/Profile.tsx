import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileContent} from "./ProfileContent/ProfileContent";
import {ActionsTypes, ProfilePageType} from "../../redux/store";

type StateType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export const Profile: React.FC<StateType> = (props) => {
    return (
        <div>
            <ProfileContent/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}
