import React from "react";
import {ProfileContent} from "./ProfileContent/ProfileContent";
import {StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type StateType = {
    store: StoreType
}

export const Profile: React.FC<StateType> = (props) => {
    return (
        <div>
            <ProfileContent/>
            <MyPostsContainer store={props.store}
            />
        </div>
    )
}
