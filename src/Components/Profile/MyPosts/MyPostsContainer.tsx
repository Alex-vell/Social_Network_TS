import {addNewPostTextAC, addPostAC, InitialStateProfileReducerType, PostsType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";

/*export const MyPostsContainer: React.FC<ProfilePageType> = () => {

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
}*/

type MapStateToPropsTypeMyPosts = {
    posts: Array<PostsType>
    newPostText: string
}
type MapDispatchToPropsTypeMyPosts = {
    onChangeCallback: (content: string) => void
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
        onChangeCallback: (content: string) => {
            dispatch(addNewPostTextAC(content))
        },
        addPostCallback: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)