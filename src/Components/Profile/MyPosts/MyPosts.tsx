import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

type PostsType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostsType>
}

const MyPosts: React.FC<ProfilePageType> = (props) => {

    let postsElement = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts
