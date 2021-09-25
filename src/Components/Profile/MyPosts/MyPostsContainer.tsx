import React from "react";
import {addNewPostTextAC, addPostAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

type ProfilePageType = {
    //store: StoreType
}

export const MyPostsContainer: React.FC<ProfilePageType> = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState()

                    const addPostCallback = (newPostText: string) => {
                        store.dispatch(addPostAC(newPostText))
                    }

                    const onChangeCallback = (content: string) => {
                        let action = addNewPostTextAC(content)
                        store.dispatch(action)
                    }

                    return <MyPosts onChangeCallback={onChangeCallback}
                                    addPostCallback={addPostCallback}
                                    posts={state.profilePage.posts}
                                    newPostText={state.profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>

    )
}