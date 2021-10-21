import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
/*import {PostsType} from "../../../redux/store";*/
import {MyPostsPropsType} from "./MyPostsContainer";

/*type ProfilePageType = {
    posts: Array<PostsType>
    addPostCallback: (newPostText: string) => void
    onChangeCallback: (content: string) => void
    newPostText: string
}*/

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postsElement = props.posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)

    const addPostHandler = (newPostText: string) => {
        props.addPostCallback(newPostText)
    }

    const onChangePostHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let content = event.currentTarget.value
        props.onChangeCallback(content)
    }
    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea onChange={onChangePostHandler} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={() => {
                        addPostHandler(props.newPostText)
                    }}>Add post
                    </button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}