import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileContent} from "./ProfileContent/ProfileContent";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

/*type PostsType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostsType>
}*/
type StateType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
    //addPostCallback: (postMessage: string) => void
    //addNewPostTextCallback: (newText: string) => void
}

export const Profile: React.FC<StateType> = (props) => {
    return (
        <div>
            <ProfileContent/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
                //addPostCallback={props.addPostCallback}
                     //addNewPostTextCallback={props.addNewPostTextCallback}
            />
        </div>
    )
}
