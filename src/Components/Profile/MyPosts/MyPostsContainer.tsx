import {addPostAC, PostsType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";

type MapStateToPropsTypeMyPosts = {
    posts: Array<PostsType>
    newPostText: string
}
type MapDispatchToPropsTypeMyPosts = {
    addPostCallback: (newPostText: string) => void
}
export type MyPostsPropsType = MapStateToPropsTypeMyPosts & MapDispatchToPropsTypeMyPosts


const mapStateToProps = (state: AppStateType): MapStateToPropsTypeMyPosts => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsTypeMyPosts => {
    return {
        addPostCallback: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)