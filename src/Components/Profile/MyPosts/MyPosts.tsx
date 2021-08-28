import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

export type myPostsType = {
    id: number
    message: string
    likesCount: number
}
type postDataType = {
    postData: Array<myPostsType>
}

const MyPosts: React.FC<postDataType> = (props) => {

    /*let postData = [
        {id: 1, message: 'Hey la lay', likesCount: 15},
        {id: 2, message: 'Bla bla', likesCount: 11},
    ]*/

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
                <Post message={props.postData[0].message} likesCount={props.postData[0].likesCount} />
                <Post message={props.postData[1].message} likesCount={props.postData[1].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts
