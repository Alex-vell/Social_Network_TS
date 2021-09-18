import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsTypes, PostsType} from "../../../redux/state";
import {addNewPostTextAC, addPostAC} from "../../../redux/profile-reducer";

type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export const MyPosts: React.FC<ProfilePageType> = (props) => {

    let postsElement = props.posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)

    const addPostHandler = () => {
        props.dispatch(addPostAC(props.newPostText))
    }

    const onChangePostHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
      let content = event.currentTarget.value
        props.dispatch(addNewPostTextAC(content))
    }
    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea onChange={onChangePostHandler} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}