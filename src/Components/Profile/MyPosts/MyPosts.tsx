import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


type myPostsType = {
    id: number
    message: string
    likesCount: number

}
type postDataType = {
    posts: Array<myPostsType>
}

const MyPosts: React.FC<postDataType> = (props) => {


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
