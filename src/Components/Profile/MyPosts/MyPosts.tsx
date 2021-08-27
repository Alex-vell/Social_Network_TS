import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

type myPostsPropsType = {}

const MyPosts: React.FC<myPostsPropsType> = () => {
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
                <Post message='Hey la lay' likesCount='15'/>
                <Post message='Bla bla' likesCount='11'/>
            </div>
        </div>
    )
}

export default MyPosts
