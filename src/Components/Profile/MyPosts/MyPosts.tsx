import React from "react";
import s from './MyPosts.module.css'



type myPostsType = {
    id: number
    message: string
    likesCount: number

}
type postDataType = {
    postsElement: any
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
                {props.postsElement}
            </div>
        </div>
    )
}

export default MyPosts
