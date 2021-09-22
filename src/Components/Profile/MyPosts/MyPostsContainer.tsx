import React from "react";
import {StoreType} from "../../../redux/store";
import {addNewPostTextAC, addPostAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type ProfilePageType = {
    store: StoreType
}

export const MyPostsContainer: React.FC<ProfilePageType> = (props) => {

    let state = props.store.getState()

    const addPostCallback = (newPostText: string) => {
        props.store.dispatch(addPostAC(newPostText))
    }

    const onChangeCallback = (content: string) => {
        let action = addNewPostTextAC(content)
        props.store.dispatch(action)
    }
    return (<MyPosts onChangeCallback={onChangeCallback}
                     addPostCallback={addPostCallback}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}/>
    )
}